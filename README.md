
### Initialisation
- copy .env.example to .env and put your bscscan key
- copy .secret.example to .secret and put your secret key
- run `npm i` to install dependencies

### Deployment
`truffle migrate --network testnet`

### Verification
`truffle run verify {ContractName}@{ContractAddress} --network testnet`

Example:\
`truffle run verify TarsilaNft@0x841D22120dD84Ca171834E9b4B7e031d12Ef36X1 --network testnet`
