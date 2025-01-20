import { usePolkadotExtension } from "@/providers/polkadot-extension-provider";
import { Button, ButtonProps } from "./button";
import type { Transaction } from "polkadot-api";
import { useChainInfo } from "@/hooks/use-chain-info";
import { formatBalance } from "@/lib/format-balance";
import { useFees } from "@/hooks/use-fees";
import { InlineLoader } from "./inline-loader";
import { useAccountInfo } from "@/hooks/use-account-info";
import { Coins } from "lucide-react";
import { createTxNotificationHandler } from "@/tx/tx-notification";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface TxButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  transaction: Transaction<any, any, any, any> | undefined;
  /* eslint-enable @typescript-eslint/no-explicit-any */
  options?: {
    label?: string;
    costDecimals?: number;
  };
  className?: string;
}

const defaultOptions = {
  label: "Submit",
  costDecimals: 4,
};

export function TxButton({
  children,
  disabled,
  transaction,
  options,
  className,
  ...props
}: TxButtonProps & ButtonProps) {
  const opts = { ...defaultOptions, ...options };
  const buttonContent = children ? (
    children
  ) : transaction ? (
    `Sign and Submit ${transaction?.decodedCall.type}.${transaction?.decodedCall.value.type}`
  ) : (
    <>
      Sign and Submit
      <InlineLoader />
    </>
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { activeSigner } = usePolkadotExtension();
  const { tokenDecimals, tokenSymbol } = useChainInfo();
  const accountInfo = useAccountInfo();
  const freeBalance = accountInfo?.data.free;

  const { data: cost, isLoading: isCostLoading } = useFees(
    transaction,
    activeSigner?.publicKey
  );

  let freeBalanceSmallerThanCost: boolean = false;
  if (cost !== undefined && freeBalance !== undefined) {
    freeBalanceSmallerThanCost = freeBalance < cost;
  }

  const isDisabled =
    !transaction || !activeSigner || freeBalanceSmallerThanCost;

  const errorMessage: string | undefined = freeBalanceSmallerThanCost
    ? "Insufficient funds. Please top up your account"
    : !activeSigner
    ? "Please connect your wallet to submit transaction"
    : undefined;

  const handleClick = async () => {
    if (!activeSigner) {
      console.error("No active signer");
      return;
    }

    setIsSubmitting(true);

    await transaction?.signSubmitAndWatch(activeSigner).subscribe(
      createTxNotificationHandler({
        onComplete: () => {
          setIsSubmitting(false);
        },
      })
    );
  };

  return (
    <div className="flex flex-col gap-[0.4rem]">
      <Button
        variant="outline"
        onClick={handleClick}
        disabled={disabled || isDisabled || isSubmitting}
        className={cn("relative", className)}
        {...props}
      >
        {buttonContent}
        <span
          className={`absolute flex h-4 w-4 -top-2 -right-2 transition-opacity duration-200 ${
            isSubmitting ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-foreground"></span>
        </span>
      </Button>
      <div className="flex flex-col gap-[0.4rem] items-center -mt-1">
        {isCostLoading ? (
          <InlineLoader />
        ) : (
          <div className="flex items-center text-xs text-muted-foreground justify-between w-full">
            {errorMessage && (
              <span className="text-[11px] text-orange-500 self-start">
                {errorMessage}
              </span>
            )}
            <span className="text-xs self-end">
              {cost && (
                <>
                  <Coins className="inline w-3 h-3 mr-1" />
                  {formatBalance({
                    value: cost,
                    decimals: tokenDecimals,
                    unit: tokenSymbol,
                    options: {
                      nDecimals: opts.costDecimals,
                    },
                  })}
                </>
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
