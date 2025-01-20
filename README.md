# Ajuna HeroJam UI

## Getting Started

### backend

### frontend

1. generate the [papi types](https://papi.how/codegen) for ajuna testnet on
   paseo

````bash
pnpm papi add aju -w wss://rpc-paseo.ajuna.network
```

or if you are running a substrate node locally

```bash
pn`m papi add ajudev -w ws://127.0.0.1:9944
```

This will generate the types for connecting papi to ajuna with the key `aju` / `ajudev`.

2. run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

3. If you are running your node with `--dev` you will have access to demo
   accounts. The frontend uses Alice's account for demo purposes. Add it to your
   wallet by importing

```bash
bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice
```

## Learn More

- This project is build on [Next.js](https://nextjs.org/docs), make sure you
  understand what it is and how to use it
