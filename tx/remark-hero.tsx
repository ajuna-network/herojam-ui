import { PolkadotSigner, TypedApi, Binary } from "polkadot-api";
import { pas } from "@polkadot-api/descriptors";
import { toast } from "sonner";
import { Check, CircleAlert } from "lucide-react";

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

  const toastId = toast.loading("Awaiting signature...", {
    description: "Please sign the transaction in your wallet.",
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
              icon: <Check className="mr-2 w-5 h-5 animate-pulse" />,
            });
            break;
          // default:
          //   toast.error("Something went wrong", {
          //     id: toastId,
          //     duration: 5000,
          //     description: event.type,
          //   });
          //   break;
        }
      },
      error: (error) => {
        const isCancelled = error.message === "Cancelled";

        if (isCancelled) {
          toast.error("Cancelled", {
            id: toastId,
            description: "Maybe another time",
            duration: 5000,
            icon: <CircleAlert className="mr-2 w-5 h-5" />,
          });
        } else {
          toast.error("Something went wrong", {
            id: toastId,
            description: error.message,
            duration: 5000,
            icon: <CircleAlert className="mr-2 w-5 h-5" />,
          });
          console.error(error);
        }
      },
    });
}
