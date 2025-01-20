"use client";

import { toast } from "sonner";
import { Check, CircleAlert } from "lucide-react";
import { InvalidTxError, type TxEvent } from "polkadot-api";
import { chainConfig } from "@/papi-config";

interface NotificationOptions {
  onComplete?: () => void;
  messages?: {
    awaitingSignatureMessage?: string;
    awaitingSignatureDescription?: string;
    awaitingBestBlocksMessage?: string;
    awaitingBestBlocksDescription?: string;
    awaitingFinalizationMessage?: string;
    awaitingFinalizationDescription?: string;
    successMessage?: string;
    successDescription?: string;
    errorMessage?: string;
    errorDescription?: string;
  };
  subscanUrl?: string;
  bestOrFinalized?: "best" | "finalized";
}

const defaultOptions: NotificationOptions = {
  onComplete: () => {},
  messages: {
    awaitingSignatureMessage: "Awaiting signature...",
    awaitingSignatureDescription: "Please sign the transaction in your wallet.",
    awaitingBestBlocksMessage: "Waiting for tx to be included in block...",
    awaitingBestBlocksDescription: "This may take a few seconds.",
    awaitingFinalizationMessage: "Waiting for finalization...",
    awaitingFinalizationDescription: "This may take a few seconds.",
    successMessage: "Transaction Successful",
    successDescription: undefined,
    errorMessage: "Transaction failed",
    errorDescription: "Something went wrong",
  },
  subscanUrl: chainConfig[0].explorerUrl,
  bestOrFinalized: "finalized",
};

export function createTxNotificationHandler(options?: NotificationOptions) {
  const opts = { ...defaultOptions, ...options };
  const messages = opts.messages ?? defaultOptions.messages!;
  const toastId = toast.loading(messages.awaitingSignatureMessage, {
    description: messages.awaitingSignatureDescription,
  });

  return {
    next: (event: TxEvent) => {
      console.log("next event", event);

      if (event.type === "broadcasted") {
        toast.loading(messages.awaitingBestBlocksMessage, {
          id: toastId,
          description: messages.awaitingBestBlocksDescription,
        });
      } else if (
        opts.bestOrFinalized === "finalized" &&
        event.type === "txBestBlocksState" &&
        event.found &&
        event.ok !== undefined
      ) {
        toast.loading(messages.awaitingFinalizationMessage, {
          id: toastId,
          description: messages.awaitingFinalizationDescription,
        });
      } else if (
        (opts.bestOrFinalized === "best" &&
          event.type === "txBestBlocksState" &&
          event.found &&
          event.ok !== undefined) ||
        (opts.bestOrFinalized === "finalized" && event.type === "finalized")
      ) {
        opts.onComplete?.();

        if (event.ok) {
          toast.success(messages.successMessage, {
            id: toastId,
            description: messages.successDescription,
            icon: <Check className="mr-2 w-5 h-5 animate-pulse" />,
            action: opts.subscanUrl
              ? {
                  label: "View on Subscan",
                  onClick: () =>
                    window.open(
                      `${opts.subscanUrl}/extrinsic/${event.txHash}`,
                      "_blank"
                    ),
                }
              : undefined,
          });
        } else {
          console.warn("tx failed event", event);
          const err = event.dispatchError;
          toast.error(messages.errorMessage, {
            id: toastId,
            description: `${err?.type}`,
            duration: 5000,
            icon: <CircleAlert className="mr-2 w-5 h-5" />,
          });
        }
      }
    },
    error: (error: Error) => {
      opts.onComplete?.();

      console.log("tx error", error);

      if (error instanceof InvalidTxError) {
        toast.error(messages.errorMessage, {
          id: toastId,
          description: error.error.value.type,
          duration: 5000,
          icon: <CircleAlert className="mr-2 w-5 h-5" />,
        });
        console.warn("InvalidTxError", error);
        return;
      }

      const isCancelled = error.message === "Cancelled";

      if (isCancelled)
        toast.error("Cancelled", {
          id: toastId,
          description: "Maybe another time",
          duration: 5000,
          icon: <CircleAlert className="mr-2 w-5 h-5" />,
        });
      else
        toast.error(messages.errorMessage, {
          id: toastId,
          description: error.message,
          duration: 5000,
          icon: <CircleAlert className="mr-2 w-5 h-5" />,
        });
    },
  };
}
