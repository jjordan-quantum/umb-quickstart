exports.Contracts = (function() {
    const fs = require('fs')
    const contracts = JSON.parse(fs.readFileSync('./lib/contracts.json'));
    const CHAIN_ABI = JSON.parse(fs.readFileSync('./lib/abis/Chain.json'));
    const REGISTRY_ABI = JSON.parse(fs.readFileSync('./lib/abis/Registry.json'));
    return {
        getContracts: _ => contracts,
        getChainABI: _ => CHAIN_ABI,
        getRegistryABI: _ => REGISTRY_ABI
    }
})();
