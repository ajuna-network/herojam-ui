"use client";

import {
  useConnectedWallets,
  useWallets,
  useWalletConnector,
  useWalletDisconnector,
} from "@reactive-dot/react";

export function Wallets() {
  const wallets = useWallets();
  const connectedWallets = useConnectedWallets();

  const [, connectWallet] = useWalletConnector();
  const [, disconnectWallet] = useWalletDisconnector();

  return (
    <section>
      <header>
        <h3>Wallet connection</h3>
      </header>
      <article>
        <h4>Wallets</h4>
        <ul>
          {wallets.map((wallet) => (
            <li key={wallet.id}>
              <div>{wallet.name}</div>
              <div>
                {connectedWallets.includes(wallet) ? (
                  <button onClick={() => disconnectWallet(wallet)}>
                    Disconnectw
                  </button>
                ) : (
                  <button onClick={() => connectWallet(wallet)}>Connect</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
