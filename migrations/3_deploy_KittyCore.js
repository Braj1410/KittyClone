const Core = artifacts.require("KittyCore");

module.exports = function (deployer) {
  const core = await deployer.deploy(Core);
};
