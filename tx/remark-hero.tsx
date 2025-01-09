import { PolkadotSigner, TypedApi, Binary } from "polkadot-api";
import { pas } from "@polkadot-api/descriptors";
import { toast } from "sonner";
import { Loader } from "@/components/ui/loader";

export async function remarkHero(
  polkadotApi: TypedApi<typeof pas> | null,
  polkadotSigner: PolkadotSigner | null
) {
  if (!polkadotApi || !polkadotSigner) return;

  const remark = `
╦ ╦╔═╗╦═╗╔═╗ ╦╔═╗╔╦╗
╠═╣║╣ ╠╦╝║ ║ ║╠═╣║║║
╩ ╩╚═╝╩╚═╚═╝╚╝╩ ╩╩ ╩
`;

  const toastId = toast("Awaiting signature...", {
    description: "Please sign the transaction in your wallet.",
    icon: <Loader className="mr-2 w-5 h-5" />,
    duration: Infinity,
  });

  return polkadotApi.tx.System.remark({
    remark: Binary.fromText(remark),
  })
    .signSubmitAndWatch(polkadotSigner)
    .subscribe({
      next: (event) => {
        switch (event.type) {
          case "broadcasted":
            toast.loading("Waiting for tx to be included in block...", {
              id: toastId,
              description: "This may take a few seconds.",
            });
            break;
          case "txBestBlocksState":
            toast.info("The tx is now in a best block, check it out:", {
              id: toastId,
            });
            toast.success("Transaction Successful", {
              id: toastId,
              action: {
                label: "View on Subscan",
                onClick: () =>
                  window.open(
                    `https://paseo.subscan.io/extrinsic/${event.txHash}`,
                    "_blank"
                  ),
              },
            });
            break;
        }
      },
      error: (error) => {
        toast.error(error.message, { id: toastId });
      },
    });
}
