# Changelog

## 0.2.12

### Patch Changes

- f7b2370: asdf

## 0.2.11

### Patch Changes

- 3ca3358: adf

## 0.2.10

### Patch Changes

- 0fc6b3a: asdf

## 0.2.9

### Patch Changes

- 0fc1a9b: asdf

## 0.2.8

### Patch Changes

- 16de554: adsf

## 0.2.7

### Patch Changes

- f518a9f: adsffad

## 0.2.6

### Patch Changes

- c99fd40: adadfsdfas

## 0.2.5

### Patch Changes

- c06ea8a: asdafsdfds

## 0.2.4

### Patch Changes

- c237e92: asdf

## 0.2.3

### Patch Changes

- 0171b58: test
- 114d688: adsffds
- 7251801: asdf

## 0.2.1

### Patch Changes

- 3b00b7c: bump private package versions to try triggering a tag

## v0.1.3

- Integrate data transport layer
- Refactor `SyncService`
- New RPC Endpoint `eth_getBlockRange`

## v0.1.2

Reduce header cache size to allow L2Geth to spin back up.

## v0.1.1

Pre-minnet fixes.

- gaslimit: fix eth_call (#186)
- rollup: safer historical log syncing (#173)
- config: flag for max acceptable calldata size (#181)
- debug rpc: debug_setL1Head and better l1 timestamp management (#184)
- Fix for hasEmptyAccount (#182)
- gasLimit: error on gas limit too high for queue origin sequencer txs (#180)
- Fixes issue with broken gas limit (#183)

## v0.1.0

Initial Release

- Feature complete for minnet
- OVM runtime implemented for deterministic transaction execution on L1
- Runs in either Sequencer mode or Verifier mode
- `rollup` package includes the `SyncService` for syncing the Canonical
  Transaction Chain
- New configuration options for rollup related features
- No P2P networking
- Maintains RPC compatibility with geth
