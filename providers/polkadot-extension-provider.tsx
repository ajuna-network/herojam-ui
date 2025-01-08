"use client";

import { type PolkadotSigner } from "polkadot-api";
import {
  connectInjectedExtension,
  getInjectedExtensions,
  type InjectedExtension,
  type InjectedPolkadotAccount,
} from "polkadot-api/pjs-signer";
import { createContext, useContext, useEffect, useState } from "react";

interface PolkadotExtensionContextType {
  installedExtensions: string[];
  selectedExtensionName: string | undefined;
  setSelectedExtensionName: (name: string | undefined) => void;
  accounts: InjectedPolkadotAccount[];
  selectedAccountIndex: number;
  setSelectedAccountIndex: (index: number) => void;
  activeSigner: PolkadotSigner | null;
}

export const PolkadotExtensionContext = createContext<
  PolkadotExtensionContextType | undefined
>(undefined);

export const PolkadotExtensionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [installedExtensions, setInstalledExtensions] = useState<string[]>([]);
  const [accounts, setAccounts] = useState<InjectedPolkadotAccount[]>([]);
  const [activeSigner, setActiveSigner] = useState<PolkadotSigner | null>(null);
  const [selectedExtensionName, setSelectedExtensionName] = useState<
    string | undefined
  >(undefined);
  const [selectedAccountIndex, setSelectedAccountIndex] = useState<number>(0);

  useEffect(() => {
    // client only
    const storedExtensionName =
      localStorage.getItem("selectedExtensionName") || undefined;
    const storedAccountIndex =
      Number(localStorage.getItem("selectedAccountIndex")) || 0;

    setSelectedExtensionName(storedExtensionName);
    setSelectedAccountIndex(storedAccountIndex);
  }, []);

  const handleSetSelectedExtensionName = (name: string | undefined) => {
    if (name) {
      localStorage.setItem("selectedExtensionName", name);
    } else {
      localStorage.removeItem("selectedExtensionName");
    }
    setSelectedExtensionName(name);
  };

  const handleSetSelectedAccountIndex = (index: number) => {
    localStorage.setItem("selectedAccountIndex", index.toString());
    setSelectedAccountIndex(index);
  };

  async function connect() {
    const extensions: string[] = getInjectedExtensions();
    setInstalledExtensions(extensions);
    console.log("extensions", extensions);

    const selectedExtension: InjectedExtension = await connectInjectedExtension(
      extensions[0]
    );

    console.log("selectedExtension", selectedExtension);

    const accounts: InjectedPolkadotAccount[] = selectedExtension.getAccounts();
    setAccounts(accounts);

    console.log("accounts", accounts);

    const polkadotSigner = accounts[0].polkadotSigner;
    setActiveSigner(polkadotSigner);
  }

  useEffect(() => {
    connect();
  }, []);

  return (
    <PolkadotExtensionContext.Provider
      value={{
        installedExtensions,
        selectedExtensionName,
        setSelectedExtensionName: handleSetSelectedExtensionName,
        accounts,
        selectedAccountIndex,
        setSelectedAccountIndex: handleSetSelectedAccountIndex,
        activeSigner,
      }}
    >
      {children}
    </PolkadotExtensionContext.Provider>
  );
};

export const usePolkadotExtension = () => {
  const context = useContext(PolkadotExtensionContext);
  if (!context) {
    throw new Error(
      "usePolkadotExtension must be used within a PolkadotExtensionProvider"
    );
  }
  return context;
};
