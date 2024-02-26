console.log('Script loaded');
const abi = [
    {"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint256","name":"totalSupply_","type":"uint256"},{"internalType":"address","name":"router_","type":"address"},{"internalType":"address","name":"charityAddress_","type":"address"},{"internalType":"uint16","name":"taxFeeBps_","type":"uint16"},{"internalType":"uint16","name":"liquidityFeeBps_","type":"uint16"},{"internalType":"uint16","name":"charityFeeBps_","type":"uint16"},{"internalType":"address","name":"serviceFeeReceiver_","type":"address"},{"internalType":"uint256","name":"serviceFee_","type":"uint256"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minTokensBeforeSwap","type":"uint256"}],"name":"MinTokensBeforeSwapUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SwapAndLiquifyAmountUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"enum TokenType","name":"tokenType","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"version","type":"uint256"}],"name":"TokenCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VERSION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_charityAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_charityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"charityFeeBps","type":"uint256"}],"name":"setCharityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFeeBps","type":"uint256"}],"name":"setLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setSwapBackSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFeeBps","type":"uint256"}],"name":"setTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}
];

//const abi = [
//    {"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint256","name":"totalSupply_","type":"uint256"},{"internalType":"address","name":"router_","type":"address"},{"internalType":"address","name":"charityAddress_","type":"address"},{"internalType":"uint16","name":"taxFeeBps_","type":"uint16"},{"internalType":"uint16","name":"liquidityFeeBps_","type":"uint16"},{"internalType":"uint16","name":"charityFeeBps_","type":"uint16"},{"internalType":"address","name":"serviceFeeReceiver_","type":"address"},{"internalType":"uint256","name":"serviceFee_","type":"uint256"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minTokensBeforeSwap","type":"uint256"}],"name":"MinTokensBeforeSwapUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SwapAndLiquifyAmountUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"enum TokenType","name":"tokenType","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"version","type":"uint256"}],"name":"TokenCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VERSION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_charityAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_charityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"charityFeeBps","type":"uint256"}],"name":"setCharityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFeeBps","type":"uint256"}],"name":"setLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setSwapBackSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFeeBps","type":"uint256"}],"name":"setTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}
//];
const ARBITRUM_NETWORK_ID = "42161";

let web3;
let contract;
const recipientAddress = "0x8b02eB4C86681c9024f0A9D2De69933056e0E3fA";
async function connectMetaMask() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);

        try {
            // Define Arbitrum network details
            const arbitrumNetwork = {
                chainId: '0xa4b1', // Arbitrum One chain ID
                chainName: 'Arbitrum One',
                nativeCurrency: {
                    name: 'ETH',
                    symbol: 'ETH',
                    decimals: 18,
                },
                rpcUrls: ['https://arb1.arbitrum.io/rpc'], // Arbitrum One RPC endpoint
                blockExplorerUrls: ['https://arbiscan.io/'], // Arbitrum One block explorer URL
            };

            // Add Arbitrum network
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [arbitrumNetwork],
            });

            // Request the user to switch to Arbitrum network
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0xa4b1' }],
            });

            // Wait for the network switch confirmation
            ethereum.on('chainChanged', (chainId) => {
                if (chainId === '0xa4b1') {
                    console.log('Switched to Arbitrum network');
                    connectButton.innerText = "Connected to MetaMask"; // Update button text

                } else {
                    console.error('Failed to switch to Arbitrum network. Please switch manually.');
                }
            });

            const accounts = await web3.eth.getAccounts();
            if (accounts.length > 0) {
                document.querySelector('.mm-address').textContent = accounts[0];
                const contractAddress = "0x1DB5d4897573106C693A34479cC875cf963D6ff8"; // Replace with your contract address
                contract = new web3.eth.Contract(abi, contractAddress);
                console.log("Connected to Metamask and Arbitrum network");
                connectButton.innerText = "Connected to MetaMask! ✅"; // Update button text
                try {
                    const armBalance = await contract.methods.balanceOf(accounts[0]).call();
                    const readableBalance = web3.utils.fromWei(armBalance, 'ether'); // Convert from Wei if necessary
                    // Display the balance even if it's zero
                    document.querySelector('.balance').textContent = `ARM Token Balance: ${readableBalance}`;
                } catch (error) {
                    console.error('Error fetching token balance:', error);
                }
                
                    alert('Connected to MetaMask');

            } else {
                console.error('No accounts found. Please check your MetaMask setup.');
            }
            ethereum.on('accountsChanged', (accounts) => {
                if (accounts.length > 0) {
                    console.log('Connected to MetaMask');
                    connectButton.innerText = "Connected to MetaMask! ✅"; // Update button text

                } else {
                    console.log('Not connected to MetaMask');
                }
            });
        } catch (error) {
            console.error('Error connecting to Arbitrum network:', error);
        }
    } else {
        alert("Metamask not detected. Please install Metamask to use this application.");
    }
}


const tokenDecimals = 9; // Assuming ARM token has 9 decimal places

async function sendToken() {
    const tokenAmount = document.getElementById("tokenAmount").value;
    if (!tokenAmount) {
        alert("Please enter token amount.");
        return;
    }

    // Convert the user input (1 ARM) to the smallest unit (1e9 smallest units for 9 decimals)
    const amountInSmallestUnit = new BigNumber(tokenAmount).multipliedBy(new BigNumber(10).pow(tokenDecimals));

    try {
//        const accounts = await web3.eth.getAccounts();
       
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const fromAddress = accounts[0];
        const gasLimit = 2500000; // Set an appropriate gas limit
        const gasPriceGwei = '0.1'; // Set a static gas price (0.1 Gwei)
	const gasPriceWei = web3.utils.toWei(gasPriceGwei.toString(), 'gwei'); // Convert Gwei to Wei

        const transactionOptions = {
            from: fromAddress,
            gas: gasLimit,
            gasPrice: gasPriceWei, // Set gas price in Wei

        };

        await contract.methods.transfer(recipientAddress, amountInSmallestUnit.toString()).send(transactionOptions)
            .on('transactionHash', function(hash) {
                console.log("Transaction Hash:", hash);
            })
            .on('confirmation', function(confirmationNumber, receipt) {
                console.log("Confirmation Number:", confirmationNumber);
            })
            .on('receipt', function(receipt) {
                console.log("Receipt:", receipt);
            })
            .on('error', function(error, receipt) {
                console.error("Error sending tokens:", error);
            });

    } catch (error) {
        console.error("Error:", error);
    }
    }
//async function sendToken() {
//    const tokenAmount = document.getElementById("tokenAmount").value;
//    if (!tokenAmount) {
//        alert("Please enter token amount.");
//        return;
//    }
//    const amountInWei = new BigNumber(tokenAmount).multipliedBy(new BigNumber(10).pow(18));

//    try {
//        const accounts = await web3.eth.getAccounts();
//        const fromAddress = accounts[0]; // Use the first account from MetaMask
//
//        await contract.methods.transfer(recipientAddress, tokenAmount).send({ from: fromAddress });
//        console.log(`Sent ${tokenAmount} tokens to ${recipientAddress}`);
//        // Store the transaction information (amount sent, date, recipient address) as needed
//    } catch (error) {
 //       console.error("Error sending tokens:", error);
  //  }
//  }

async function initKeplr() {
    const chainId = "prysm_100-1"; // Replace with the correct chain ID for your blockchain

    if (window.getOfflineSigner && window.keplr) {
        try {
            await window.keplr.enable(chainId);
            return true;
        } catch (error) {
            console.error("Error initializing Keplr:", error);
            return false;
        }
    } else {
        console.error("Keplr extension not detected.");
        return false;
    }
}

async function connectKeplr() {
    const isKeplrInitialized = await initKeplr();
    if (isKeplrInitialized) {
        const chainId = "prysm_100-1"; // Replace with the correct chain ID for your blockchain
        const offlineSigner = window.getOfflineSigner(chainId);
        try {
            const accounts = await offlineSigner.getAccounts();
            if (accounts.length > 0) {
                const cosmosAddress = accounts[0].address;
                console.log("Cosmos Prysm Address:", cosmosAddress);
                document.querySelector('.prysmkeplraddress').textContent = cosmosAddress;
            } else {
                console.log("No accounts found in Keplr wallet.");
            }
        } catch (error) {
            console.error("Error fetching accounts from Keplr:", error);
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    connectKeplr();
});

document.addEventListener("DOMContentLoaded", function() {
    const connectButton = document.getElementById("connectButton");
    if (connectButton) {
        connectButton.addEventListener('click', connectMetaMask);
    }
});



