# Ajuna CasinoJam Frontend

This is the react / next.js frontend for CasinoJAM SAGE playground. If you are
looking for the node implementation, go here.

## Getting Started

### Generate Papi Types

This repo uses [papi](https://papi.how) to connect to substrate nodes. In order
to generate the [typescript types with papi](https://papi.how/codegen), you must
first run the following commands, see

```bash
pnpm papi add casinojam -w wss://rpc-paseo.ajuna.network
```

or if you are running a substrate node locally

```bash
pnpm papi add casinojam -w ws://127.0.0.1:9944
```

This will generate the types for connecting papi to ajuna with the key
`casinojam`

> [!IMPORTANT] If your node specifications change, you will have to rerun the
> command.

### Running the dev server

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

### Working with dev accounts

If you are running your node with the `--dev` flag, you will have access to demo
accounts. You can add alices, bobs, ... accounts to your wallets with the
following mnemonics

```bash
# alice
bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice

# bob
bottom drive obey lake curtain smoke basket hold race lonely fit walk//Bob
```

## Learn More

- You can also use the Substrate Portal (Polkadot JS APPs) frontend to connect
  to your local node via
  [https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/extrinsics](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/extrinsics).
  This will help you understand SAGE transitions better.
- This frontend is build on [Next.js](https://nextjs.org/docs) and
  [react](https://react.dev), make sure you understand what it is and how to use
  it
