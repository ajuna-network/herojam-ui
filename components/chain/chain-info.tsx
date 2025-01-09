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
import { useState } from "react";

export function ChainInfo() {
  const blockNumber = useBlockNumber();
  const { connectionStatus, wsProvider } = useChain();
  const [isOpen, setIsOpen] = useState(false);

  const handleSwitch = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (connectionStatus?.type === WsEvent.CONNECTED) {
      wsProvider?.switch();
      setIsOpen(true);
    }
  };

  return (
    <div className="fixed bottom-7 right-8">
      <TooltipProvider>
        <Tooltip delayDuration={100} open={isOpen} onOpenChange={setIsOpen}>
          <TooltipTrigger asChild>
            <Badge
              className="tabular-nums font-light h-6 cursor-pointer shadow-sm"
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
              sideOffset={-1}
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
