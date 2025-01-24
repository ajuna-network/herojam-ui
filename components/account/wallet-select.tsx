"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowLeft, LogOut, Wallet } from "lucide-react";
import { usePolkadotExtension } from "@/providers/polkadot-extension-provider";
import { deslugify, trimAddress } from "@/lib/utils";
import { Identicon } from "@polkadot/react-identicon";

export function WalletSelect() {
  const {
    accounts,
    installedExtensions,
    selectedExtensionName,
    selectedAccount,
    setSelectedExtensionName,
    setSelectedAccount,
    initiateConnection,
    disconnect,
  } = usePolkadotExtension();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" onClick={initiateConnection}>
          <Wallet className="w-4 h-4" />
          {selectedAccount?.name}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]s">
        <DialogHeader>
          <DialogTitle>
            {selectedExtensionName !== undefined && (
              <Button
                variant="outline"
                size="icon"
                className="mr-4"
                onClick={() => setSelectedExtensionName(undefined)}
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            )}
            {selectedExtensionName !== undefined
              ? "Select Account"
              : "Select Extension"}
            {selectedExtensionName !== undefined && (
              <Button
                variant="outline"
                size="icon"
                className="ml-4"
                onClick={disconnect}
              >
                <LogOut className="w-4 h-4" />
              </Button>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-start gap-2 py-4 max-h-[70vh] pr-4 overflow-y-auto">
          {selectedExtensionName === undefined ? (
            <>
              {installedExtensions.map((extension, index) => (
                <Button
                  variant="outline"
                  className="w-full"
                  key={index}
                  onClick={() => setSelectedExtensionName(extension)}
                >
                  <span className="font-bold">{deslugify(extension)}</span>
                </Button>
              ))}
            </>
          ) : (
            <>
              {accounts.length > 0 ? (
                accounts.map((account, index) => (
                  <DialogClose asChild key={index}>
                    <Button
                      variant="outline"
                      className="w-full flex flex-row h-auto justify-start items-center gap-0 [&_svg]:size-auto"
                      onClick={() => setSelectedAccount(account)}
                    >
                      <Identicon
                        className="w-[32px] h-[32px] mr-2 [&>svg>circle:first-child]:fill-transparent"
                        value={account.address}
                        size={32}
                        theme="polkadot"
                      />
                      <div className="flex flex-col justify-start items-start gap-0">
                        <span className="font-bold">{account.name}</span>
                        {account.address && (
                          <div>{trimAddress(account.address)}</div>
                        )}
                      </div>
                    </Button>
                  </DialogClose>
                ))
              ) : (
                <div>
                  Please allow the site to access your extension accounts
                </div>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
