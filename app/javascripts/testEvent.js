const  Web3 = require('web3')
if(typeof web3 !== 'undefined'){
    web3 = new web3(Web3.currentProvider)
}else{
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
}

console.log('loaded')
var testEventAbi = [ { "constant": false, "inputs": [ { "name": "_length", "type": "uint256" }, { "name": "_height", "type": "uint256" } ], "name": "setArgs", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "getRes", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "a", "type": "uint256" }, { "indexed": false, "name": "b", "type": "uint256" }, { "indexed": false, "name": "c", "type": "uint256" } ], "name": "getResEvent", "type": "event" } ]
var ContractInstance = web3.eth.contract(testEventAbi).at('0xfb9043c5c67a9013f14c4f24341780051f6a9325')
console.log('instance done')
var event = ContractInstance.getres(function (error,result) {
    if(!error){
        console.log(result)
    }
})
