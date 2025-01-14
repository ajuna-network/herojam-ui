import { useQuery } from "@tanstack/react-query";
import { SS58String, Transaction } from "polkadot-api";

export function useFees(
  transaction: Transaction<any, any, any, any>,
  who: Uint8Array | SS58String | undefined
) {
  return useQuery({
    queryKey: ["fees", "transaction", who],
    queryFn: () => transaction.getEstimatedFees(who!),
    enabled: !!transaction && !!who,
  });
}
