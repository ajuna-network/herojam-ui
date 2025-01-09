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
  activeSigner: PolkadotSigner | null;
  initiateConnection: () => void;
  selectedAccount: InjectedPolkadotAccount | null;
  setSelectedAccount: (account: InjectedPolkadotAccount) => void;
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
  const [selectedAccount, setSelectedAccount] =
    useState<InjectedPolkadotAccount | null>(null);

  useEffect(() => {
    const extensions = getInjectedExtensions();
    setInstalledExtensions(extensions);
  }, []);

  useEffect(() => {
    const storedExtensionName =
      localStorage.getItem("selectedExtensionName") || undefined;
    const storedAccount = JSON.parse(
      localStorage.getItem("selectedAccount") || "null"
    );
    const storedUserWantsToConnect =
      localStorage.getItem("userWantsToConnect") || false;

    setSelectedExtensionName(storedExtensionName);
    setSelectedAccount(storedAccount);
    setUserWantsToConnect(!!storedUserWantsToConnect);
  }, []);

  useEffect(() => {
    if (selectedExtensionName && userWantsToConnect) {
      setTimeout(() => {
        connect();
      });
    }
  }, [selectedExtensionName, userWantsToConnect]);

  useEffect(() => {
    if (accounts.length > 0 && selectedAccount) {
      setSelectedAccount(selectedAccount);
    }
  }, [accounts, selectedAccount]);

  const handleSetSelectedExtensionName = (name: string | undefined) => {
    if (name) {
      localStorage.setItem("selectedExtensionName", name);
    } else {
      localStorage.removeItem("selectedExtensionName");
    }
    setSelectedExtensionName(name);
  };

  const handleSetSelectedAccount = (account: InjectedPolkadotAccount) => {
    localStorage.setItem("selectedAccount", JSON.stringify(account));
    setSelectedAccount(account);
    const polkadotSigner = account.polkadotSigner;
    setActiveSigner(polkadotSigner);
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
  }

  return (
    <PolkadotExtensionContext.Provider
      value={{
        installedExtensions,
        selectedExtensionName,
        setSelectedExtensionName: handleSetSelectedExtensionName,
        accounts,
        selectedAccount,
        setSelectedAccount: handleSetSelectedAccount,
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
