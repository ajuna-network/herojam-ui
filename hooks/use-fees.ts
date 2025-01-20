import { useQuery } from "@tanstack/react-query";
import { SS58String, Transaction } from "polkadot-api";

export function useFees(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transaction: Transaction<any, any, any, any> | undefined,
  who: Uint8Array | SS58String | undefined
) {
  return useQuery({
    queryKey: ["fees", "transaction", who],
    queryFn: () => transaction?.getEstimatedFees(who!),
    enabled: !!transaction && !!who,
  });
}
