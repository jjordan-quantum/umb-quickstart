async function main() {
   const { example } = require('./web3-example');
   await example.run();
}

main()
.then(() => { process.exit(0) })
.catch((error) => {
    console.error(error);
    process.exit(1);
})