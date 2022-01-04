exports.example = (function() {
    const Web3 = require('web3');
    const providers = require('./lib/providers').Providers.getProviders();
    const web3 = new Web3(providers.bsc.https);

    const { Contracts } = require('./lib/contracts');

    const Registry = new web3.eth.Contract(
        Contracts.getRegistryABI(),
        Contracts.getContracts().bsc.registry
    );

    const Chain = new web3.eth.Contract(
        Contracts.getChainABI(),
        Contracts.getContracts().bsc.chain
    );

    const run = async () => {
        // confirm current Chain address in registry:
        const currentChainAddress = await Registry.methods.getAddressByString('Chain').call();
        console.log("Current Chain implementation contract address: " + currentChainAddress);

        // get blocksCount from Chain
        const blocksCount = await Chain.methods.blocksCount().call();
        console.log("Current blocksCount in Chain contract: " + blocksCount)

        // verify proof for block
        const blockID = 244792;
        //const proof = ["0x4ada02dc20957f59db7ae0a0ecae125c21abecefd85b48353695b126fd9d6096","0xb9bd7db1dafb2be5163c6861bbda67c4300ef36eabb21af40032313a840f5ea1","0x75349b08c30eea9b74193ecadee2c38de7e6031914b0d13d1f2e5fbb9cec3d06","0xbfba5e8a5180548b604bf20103d05a013d1281516178026ec5824182a1a1f373","0x8a5184a7ce845fcc94920b31034b551111c6e53b44bc2dd68517707ae920b225","0x2b25e6b9f9d33fa3b87c01d76d81ead444949502b36084704c0c59274d5431d3","0x140baf0a36cd4d01748efa5cb6b697ee04902be6aca52bcef8ea5581e31306d4","0xf724a973d1fcb105208382b5a55c61a0e4bdac61ff48e7c1c377bb3bb179b566","0x035f4fa5b4a5a54b4869910391031f7a7e2177d0598525d013ba0a922ecc4f1f","0x9957941a872dff4f431ffa9461ea46d044dc5346c05adbd27d8b19485b9e1ff7","0xf612fa6c94797a2416da57d9f69b4bda54acd643ee291d4e3b3b5fe884c1e556"];
        const proof = ["0x86f349b9879a892f879abd4fcb0753438b2f868e99b5d996f47b998e7a30a850","0x68d3f9fb17b93412d84c89b6d595ccd152d0c01266aac8a1953cb022cd0f703f","0x271a6a9551fefc4754374765442fc5acc003c893b99db444461d03897f4adccc","0x3057d292e91d944c63b8197e08ef25e0731844f7fd3914c8c34e99a3448d6258","0xa862bfa6ba2f57f4c85fd4b0687fbf6c4b10ab03dd2c6b0891e7cc50f5469b23","0x1dd8c17d3c8124c50a972190c05c4b51e5a6a8fe5c77c3205a25224ea60dbad1","0xdd275e13c476c37e2634b3dc4523182d820b25a1004ce477f89129526d67d8e6","0x97fc30dab907682a1156883ace012974ed7deb2f04bcd60550176c68e85d517d","0x035f4fa5b4a5a54b4869910391031f7a7e2177d0598525d013ba0a922ecc4f1f","0x094dfabd792b95ffff7d46fabe728cdc4b2aca51a659e436d534523484da4272","0x20f78e8852fe811ceabd21732270935d956a758e0d8989ded3b4fa281c92d4ee"]
        const key = '0x000000000000000000000000000000000000000000000000414156452d425443';
        const value = '0x0000000000000000000000000000000000000000000000000013a7531ee5c000';
        const latestBlock = await web3.eth.getBlockNumber();
        console.log(latestBlock);
        const proofVerifiedForBlock = await Chain.methods.verifyProofForBlock(
            244792,
            ["0x86f349b9879a892f879abd4fcb0753438b2f868e99b5d996f47b998e7a30a850","0x68d3f9fb17b93412d84c89b6d595ccd152d0c01266aac8a1953cb022cd0f703f","0x271a6a9551fefc4754374765442fc5acc003c893b99db444461d03897f4adccc","0x3057d292e91d944c63b8197e08ef25e0731844f7fd3914c8c34e99a3448d6258","0xa862bfa6ba2f57f4c85fd4b0687fbf6c4b10ab03dd2c6b0891e7cc50f5469b23","0x1dd8c17d3c8124c50a972190c05c4b51e5a6a8fe5c77c3205a25224ea60dbad1","0xdd275e13c476c37e2634b3dc4523182d820b25a1004ce477f89129526d67d8e6","0x97fc30dab907682a1156883ace012974ed7deb2f04bcd60550176c68e85d517d","0x035f4fa5b4a5a54b4869910391031f7a7e2177d0598525d013ba0a922ecc4f1f","0x094dfabd792b95ffff7d46fabe728cdc4b2aca51a659e436d534523484da4272","0x20f78e8852fe811ceabd21732270935d956a758e0d8989ded3b4fa281c92d4ee"],
            '0x000000000000000000000000000000000000000000000000414156452d425443',
            '0x0000000000000000000000000000000000000000000000000013a7531ee5c000'
        ).call();
        console.log("Proof is verified for block: " + proofVerifiedForBlock)
    }

    return { run: run }
})();