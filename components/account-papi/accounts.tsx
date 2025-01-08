"use client";

import { useAccounts, useLazyLoadQuery } from "@reactive-dot/react";

export function Accounts() {
  const accounts = useAccounts();
  const [timestamp, totalIssuance] = useLazyLoadQuery((builder) =>
    builder
      .readStorage("Timestamp", "Now", [])
      .readStorage("Balances", "TotalIssuance", [])
  );

  return (
    <div>
      <ul>
        {accounts.map((account, index) => (
          <li key={index}>
            <div>Address: {account.address}</div>
            {account.name && <div>Name: {account.name}</div>}
          </li>
        ))}
      </ul>
      <section>
        <div>
          Latest block timestamp: {new Date(Number(timestamp)).toLocaleString()}
        </div>
        <div>Total issuance: {totalIssuance.toString()}</div>
      </section>
    </div>
  );
}
