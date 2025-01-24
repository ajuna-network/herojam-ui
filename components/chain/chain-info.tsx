"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useChain } from "@/providers/chain-provider";
import { WsEvent } from "polkadot-api/ws-provider/web";
import { useState } from "react";

export function ChainInfo() {
  const { connectionStatus, wsProvider, activeChain } = useChain();
  const [isOpen, setIsOpen] = useState(false);

  const handleSwitch = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (connectionStatus?.type === WsEvent.CONNECTED) {
      wsProvider?.switch();
      setIsOpen(true);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100} open={isOpen} onOpenChange={setIsOpen}>
        <TooltipTrigger asChild className="flex items-center">
          <div
            className="tabular-nums font-light h-6 cursor-pointer shadow-sm"
            onClick={handleSwitch}
          >
            {connectionStatus?.type === WsEvent.CONNECTED ? (
              <>
                <span className="block rounded-full w-2.5 h-2.5 bg-green-400 animate-pulse mr-1" />{" "}
              </>
            ) : connectionStatus?.type === WsEvent.ERROR ||
              connectionStatus?.type === WsEvent.CLOSE ? (
              <>
                <span className="block rounded-full w-2.5 h-2.5 bg-red-400" />
                &nbsp;
              </>
            ) : (
              <>
                <span className="block rounded-full w-2.5 h-2.5 bg-yellow-400 animate-pulse" />
                &nbsp;
              </>
            )}
          </div>
        </TooltipTrigger>
        {connectionStatus?.type === WsEvent.CONNECTED && (
          <TooltipContent side="right" className="">
            connected to <b>{activeChain?.name}</b>({connectionStatus.uri})
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
