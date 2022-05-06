module.exports = async ({getNamedAccounts, getUnnamedAccounts, deployments}) => {
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();
    const accounts = await getUnnamedAccounts();
    await deploy('TestOwnable', {
      from: accounts[0],
      args: [],
      log: true,
    });
  };
  module.exports.tags = ['TestOwnable'];