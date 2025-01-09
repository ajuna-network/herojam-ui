"use client";

import { useBlockNumber } from "@/hooks/use-block-number";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useChain } from "@/providers/chain-provider";
import { WsConnected, WsEvent } from "polkadot-api/ws-provider/web";

export function ChainInfo() {
  const blockNumber = useBlockNumber();
  const { connectionStatus, wsProvider } = useChain();

  const handleSwitch = () => {
    if (connectionStatus?.type === WsEvent.CONNECTED) {
      console.log("switching", wsProvider);
      wsProvider?.switch();
    }
  };

  return (
    <div className="fixed bottom-2 right-2">
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger>
            {" "}
            <Badge
              className="tabular-nums font-light h-6"
              variant="secondary"
              onClick={handleSwitch}
            >
              {connectionStatus?.type === WsEvent.CONNECTED ? (
                <>
                  <span className="block rounded-full w-1.5 h-1.5 bg-green-400 animate-pulse mr-1" />{" "}
                  {blockNumber}
                </>
              ) : connectionStatus?.type === WsEvent.ERROR ||
                connectionStatus?.type === WsEvent.CLOSE ? (
                <>
                  <span className="block rounded-full w-1.5 h-1.5 bg-red-400" />
                  &nbsp;
                </>
              ) : (
                <>
                  <span className="block rounded-full w-1.5 h-1.5 bg-yellow-400 animate-pulse" />
                  &nbsp;
                </>
              )}
            </Badge>
          </TooltipTrigger>
          {connectionStatus?.type === WsEvent.CONNECTED && (
            <TooltipContent
              side="left"
              sideOffset={-2}
              className="bg-background text-foreground"
            >
              connected to <b>{(connectionStatus as WsConnected).uri}</b> on
              block
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
