import { TxButton, TxButtonProps } from "./tx-button";

export function TxCommand(props: TxButtonProps) {
  return <TxButton className="w-full p-0" variant="ghost" {...props} />;
}
