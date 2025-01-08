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
  initiateConnection: () => void;
}

export const PolkadotExtensionContext = createContext<
  PolkadotExtensionContextType | undefined
>(undefined);

export const PolkadotExtensionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userWantsToConnect, setUserWantsToConnect] = useState<boolean>(false);
  const [installedExtensions, setInstalledExtensions] = useState<string[]>([]);
  const [accounts, setAccounts] = useState<InjectedPolkadotAccount[]>([]);
  const [activeSigner, setActiveSigner] = useState<PolkadotSigner | null>(null);
  const [selectedExtensionName, setSelectedExtensionName] = useState<
    string | undefined
  >(undefined);
  const [selectedAccountIndex, setSelectedAccountIndex] = useState<number>(0);

  useEffect(() => {
    const extensions = getInjectedExtensions();
    setInstalledExtensions(extensions);
  }, []);

  useEffect(() => {
    if (userWantsToConnect) {
      connect();
    }
  }, [userWantsToConnect]);

  useEffect(() => {
    const storedExtensionName =
      localStorage.getItem("selectedExtensionName") || undefined;
    const storedAccountIndex =
      Number(localStorage.getItem("selectedAccountIndex")) || 0;
    const storedUserWantsToConnect =
      localStorage.getItem("userWantsToConnect") || false;

    setSelectedExtensionName(storedExtensionName);
    setSelectedAccountIndex(storedAccountIndex);
    setUserWantsToConnect(!!storedUserWantsToConnect);
  }, []);

  useEffect(() => {
    connect();
  }, [selectedExtensionName]);

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

  const initiateConnection = () => {
    localStorage.setItem("userWantsToConnect", "true");
    setUserWantsToConnect(true);
  };

  async function connect() {
    if (!selectedExtensionName) {
      return;
    }

    const extensions: string[] = getInjectedExtensions();
    setInstalledExtensions(extensions);

    const selectedExtension: InjectedExtension = await connectInjectedExtension(
      selectedExtensionName
    );

    if (!selectedExtension) {
      return;
    }

    const accounts: InjectedPolkadotAccount[] = selectedExtension.getAccounts();
    setAccounts(accounts);

    const polkadotSigner = accounts[0].polkadotSigner;
    setActiveSigner(polkadotSigner);
  }

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
        initiateConnection,
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
