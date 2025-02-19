import type {
  aju,
  ajudev,
  pas,
  casinojam,
  wnd,
} from "@polkadot-api/descriptors";
import type { TypedApi } from "polkadot-api";

export type ApiTypes = {
  aju: typeof aju;
  ajudev: typeof ajudev;
  pas: typeof pas;
  casinojam: typeof casinojam;
  wnd: typeof wnd;
};

export type AvailableApis = TypedApi<ApiTypes[keyof ApiTypes]>;
