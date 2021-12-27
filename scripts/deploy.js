const main = async () => {
    const Token = await hre.ethers.getContractFactory('WavePortal');
    const portal = await Token.deploy({
      value: hre.ethers.utils.parseEther('0.001'),
    });
    await portal.deployed();

    console.log(`Token address: ${portal.address}`);
}

const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };

    runMain();