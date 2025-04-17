import { CodePromise, Abi, ContractPromise } from '@polkadot/api-contract';
import { ApiPromise, WsProvider, Keyring } from '@polkadot/api';
import { BN, BN_ONE, BN_ZERO } from "@polkadot/util";
import { json } from "./abi.js";

const wsProvider = new WsProvider('wss://rpc.testnet.vne.network/');
const api = await ApiPromise.create({ provider: wsProvider });
const code = new CodePromise(api, json, json.source.wasm);

const gasLimit = api.registry.createType("WeightV2", {
    refTime: new BN("1000000000000"),   
    proofSize: new BN("100000000000"),
});

const storageDepositLimit = null;
const keyring = new Keyring({ type: "ethereum" });
const userKeyring = keyring.addFromUri('0x1a2daa226a2aa5644583e3111c900fc8d155231b9c1ee9d968b95ecebc8fc2e4');
console.log(userKeyring.address);


const tx = code.tx['new']({ value: 0, gasLimit: gasLimit, storageDepositLimit }, userKeyring.address);

const unsub = await tx.signAndSend(userKeyring, { signer: userKeyring }, ({ contract, status, events }) => {
    console.log('status', status.toHuman())

    if (contract) {
        const addr = events.filter(e => e.event.method == 'Instantiated')[0].event.data.toHuman().contract;
        console.log('Contract address: ', addr)
        unsub()
    }
})