const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy({
      value: hre.ethers.utils.parseEther('0.1'),
    });
    await waveContract.deployed();
    console.log('Contract addy:', waveContract.address)

    let contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log('Contract balance:', hre.ethers.utils.formatEther(contractBalance));

    

    // let waveCount;
    // waveCount = await waveContract.getTotalWaves(); // get total waves
    // let waveTxn = await waveContract.wave('A message!') // send a wave
    // await waveTxn.wait(); // wait for the transaction to be mined
    // contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    // console.log('Contract balance1:', hre.ethers.utils.formatEther(contractBalance));

    // const [_, randomPerson] = await hre.ethers.getSigners(); // get the signer
    // waveTxn = await waveContract.connect(randomPerson).wave('Another message!') // send a wave
    // await waveTxn.wait(); // wait for the transaction to be mined
    // console.log('Contract balance2:', hre.ethers.utils.formatEther(contractBalance));


    const waveTxn = await waveContract.wave('A message!') // send a wave');
    await waveTxn.wait();
    // console.log('Transaction hash1:', waveTxn);
  
    const waveTxn2 = await waveContract.wave('Anther message!') // send a wave');
    await waveTxn2.wait();
    // console.log('Transaction hash2:', waveTxn2);

    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
      'Contract balance:',
      hre.ethers.utils.formatEther(contractBalance)
    );

  // let allWaves = await waveContract.getAllWaves();
  // console.log(allWaves);

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();