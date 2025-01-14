import { usePolkadotExtension } from "@/providers/polkadot-extension-provider";
import { Button } from "./button";
import type { Transaction } from "polkadot-api";
import { useChainInfo } from "@/hooks/use-chain-info";
import { formatBalance } from "@/lib/format-balance";
import { useFees } from "@/hooks/use-fees";
import { InlineLoader } from "./inline-loader";

interface TxButtonProps {
  children?: React.ReactNode;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  transaction: Transaction<any, any, any, any>;
  /* eslint-enable @typescript-eslint/no-explicit-any */
  options?: {
    label?: string;
    costDecimals?: number;
  };
}

const defaultOptions = {
  label: "Submit",
  costDecimals: 4,
};

export function TxButton({ children, transaction, options }: TxButtonProps) {
  const opts = { ...defaultOptions, ...options };
  const buttonContent =
    children ||
    `Sign and Submit ${transaction.decodedCall.type}.${transaction.decodedCall.value.type}`;
  const { activeSigner } = usePolkadotExtension();
  const { tokenDecimals, tokenSymbol } = useChainInfo();

  const { data: cost, isLoading: isCostLoading } = useFees(
    transaction,
    activeSigner?.publicKey
  );

  const handleClick = async () => {
    if (!activeSigner) {
      console.error("No active signer");
      return;
    }
    console.info(
      `Signing transaction ${transaction.decodedCall.type}.${transaction.decodedCall.value.type} with data`,
      transaction.decodedCall.value.value
    );

    await transaction.signSubmitAndWatch(activeSigner).subscribe({
      next: (event) => {
        console.log(event);
      },
    });
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <Button onClick={handleClick}>{buttonContent}</Button>
      <InlineLoader />
      {isCostLoading ? (
        <InlineLoader />
      ) : cost ? (
        <span className="text-xs text-muted-foreground -mt-1">
          {formatBalance({
            value: cost,
            decimals: tokenDecimals,
            unit: tokenSymbol,
            options: {
              nDecimals: opts.costDecimals,
            },
          })}
        </span>
      ) : null}
    </div>
  );
}
