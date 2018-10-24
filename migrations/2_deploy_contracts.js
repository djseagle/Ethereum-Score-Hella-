//var Score = artifacts.require("./Score.sol");
var Vote = artifacts.require('./Vote.sol')
module.exports = function(deployer) {
  //deployer.deploy(Score);
  deployer.deploy(Vote);
};
