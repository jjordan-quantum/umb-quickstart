# umb-quickstart
Sample project for experimentation with UMB network.

### example
A simple example of making contract calls to BSC deployment for verifying a block proof can be found in main.js.
#### note:
I expect that the ABI and contract address will need to be updated for Chain.sol once new contracts are imported.  This can be confirmed by checking the 'getAddressByString' method of the Registry against the address stored in contracts.json.  If a new implementation is detected, one could try obtaining the ABI via etherscan's API.
