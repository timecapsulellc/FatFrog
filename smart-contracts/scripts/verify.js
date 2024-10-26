const hre = require("hardhat");

async function main() {
  const contractAddress = "0xf9b864b6d7B2f6348f6adDE5557c676f14FB53e8";

  console.log("Verifying FrogToken contract...");
  
  try {
    await hre.run("verify:verify", {
      address: contractAddress,
      constructorArguments: []
    });
    console.log("Contract verified successfully");
  } catch (error) {
    console.error("Verification failed:", error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
