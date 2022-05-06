# Ownable Repro

## Steps to reproduce

1. Get dependencies

```
yarn
```

2. Duplicate `.env.sample` to `.env` and replace `your_key_here` with the private key for your deployer wallet.

3. Get kovan ETH for Optimistic Kovan. You can use the [Paradigm MultiFaucet](https://faucet.paradigm.xyz) to drip yoruself ETH.

4. Run the deploy:

```
yarn deploy:ovm
```

5. Check the logs for your transaction - the ownership transferred should not match the transaction sender.
