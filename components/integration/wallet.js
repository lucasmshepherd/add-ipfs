

const NetworkConfig = {
    "TESTNET": {
        "CONTRACT_ADDRESS_TOKEN": "0xf86640900dD2C849a4AFb8E9baEDB09A9Ac3Bf0b",
        "CONTRACT_ABI_TOKEN": [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"isExcluded","type":"bool"}],"name":"ExcludeFromMaxWalletToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newMarketing","type":"address"}],"name":"MarketingAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pair","type":"address"},{"indexed":true,"internalType":"bool","name":"value","type":"bool"}],"name":"SetAutomatedMarketMakerPair","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newStaking","type":"address"}],"name":"StakingAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"taxAmount","type":"uint256"}],"name":"TaxUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newTreasury","type":"address"}],"name":"TreasuryAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"whitelistAccount","type":"address"},{"indexed":false,"internalType":"bool","name":"value","type":"bool"}],"name":"WhitelistAddressUpdated","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"DAOFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"automatedMarketMakerPairs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint32","name":"pos","type":"uint32"}],"name":"checkpoints","outputs":[{"components":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint224","name":"votes","type":"uint224"}],"internalType":"struct ERC20VotesUpgradeable.Checkpoint","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"excluded","type":"bool"}],"name":"excludeFromMaxWalletToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPastTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPastVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"initialHolder","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isExcludedFromMaxWalletToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketing","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"marketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWalletAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"recipient","type":"address"}],"name":"migrateETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"proxiableUUID","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasury","type":"address"}],"name":"setAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setAutomatedMarketMakerPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"buy","type":"uint256"},{"internalType":"uint256","name":"sell","type":"uint256"},{"internalType":"uint256","name":"p2p","type":"uint256"}],"name":"setDAOFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_marketing","type":"address"}],"name":"setMarketingAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"buy","type":"uint256"},{"internalType":"uint256","name":"sell","type":"uint256"},{"internalType":"uint256","name":"p2p","type":"uint256"}],"name":"setMarketingFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setMaxWalletAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_staking","type":"address"}],"name":"setStakingPoolAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"buy","type":"uint256"},{"internalType":"uint256","name":"sell","type":"uint256"},{"internalType":"uint256","name":"p2p","type":"uint256"}],"name":"setStakingPoolFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapEnable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setSwapTokensAtAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_whitelist","type":"address"},{"internalType":"bool","name":"_status","type":"bool"}],"name":"setWhitelistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"staking","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakingPoolFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapEnable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapTokensAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelistedAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}],

        "CONTRACT_ADDRESS": "0x0A08F528244b8082d02b6C737F1E5C74D44CeCdF",
        "CONTRACT_ABI": [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenRecovered","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MigrateTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minStakePerUser","type":"uint256"}],"name":"MinStakePerUser","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"migrateTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minStaking","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingreward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minStakingAmount","type":"uint256"}],"name":"updateMinStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawReward","outputs":[],"stateMutability":"nonpayable","type":"function"}],
        "SCAN_LINK": "https://rinkeby.infura.io/v3/",
        "INFURA_ID": "84807e24ba43429cbf4912fe7c337dfb",
        "NETWORK": {
            "NAME": "Rinkeby Testnet",
            "SYMBOL": "ETH",
            "ID": 4,
            "CHAINID_HEX": "0x4"
        },
        "CONTRACT_ADDRESS_MINT" : "0x30be36537265a0CaAAc7e94825117adfd92cDDD9",
        "CONTRACT_ABI_MINT" : [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"ADDToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_BY_MINT_IN_TRANSACTION_SALE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_MINT_SALE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT_MINTED_TIER_ONE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT_MINTED_TIER_THREE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT_MINTED_TIER_TWO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SALE_NFT_TIER_ONE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SALE_NFT_TIER_THREE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SALE_NFT_TIER_TWO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SALE_PRICE_TIER_ONE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SALE_PRICE_TIER_THREE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SALE_PRICE_TIER_TWO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOKEN_REQUIRED_FOR_MINT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"cancelLoanRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"uint256","name":"returnPerDay","type":"uint256"},{"internalType":"uint256","name":"loanDuration","type":"uint256"}],"name":"getLoanOnStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"loanerAddress","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"lendOnStake","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"migrateTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintEnable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"mintSaleNFTTierOne","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"mintSaleNFTTierThree","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"mintSaleNFTTierTwo","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"proposalApproved","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"proposalRejected","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"proposalSubmited","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"requestingLoans","outputs":[{"internalType":"address","name":"loanerAddress","type":"address"},{"internalType":"address","name":"lenderAddress","type":"address"},{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"uint256","name":"returnPerDay","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"startDay","type":"uint256"},{"internalType":"uint256","name":"endDay","type":"uint256"},{"internalType":"uint256","name":"returnAmount","type":"uint256"},{"internalType":"bool","name":"loanIsPaid","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleEnableTierOne","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"saleEnableTierThree","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"saleEnableTierTwo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"tierOne","type":"bool"},{"internalType":"bool","name":"tierTwo","type":"bool"},{"internalType":"bool","name":"tierThree","type":"bool"}],"name":"setSaleStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakingInfo","outputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"proposalSubmitted","type":"bool"},{"internalType":"bool","name":"proposalApproved","type":"bool"},{"internalType":"bool","name":"proposalRejected","type":"bool"},{"internalType":"bool","name":"hasLoan","type":"bool"},{"internalType":"bool","name":"inStaking","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newLimit","type":"uint256"}],"name":"updateMintLimitPerTransectionSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newLimit","type":"uint256"}],"name":"updateSaleMintLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tierOne","type":"uint256"},{"internalType":"uint256","name":"tierTwo","type":"uint256"},{"internalType":"uint256","name":"tierThree","type":"uint256"}],"name":"updateSalePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tierOne","type":"uint256"},{"internalType":"uint256","name":"tierTwo","type":"uint256"},{"internalType":"uint256","name":"tierThree","type":"uint256"}],"name":"updateSaleSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newToken","type":"address"}],"name":"updateTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newLimit","type":"uint256"}],"name":"updateTokenRequiredForMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"salemint","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"withdrawLoanedFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    },

    "MAINNET": {
        "CONTRACT_ADDRESS_TOKEN": "",
        "CONTRACT_ABI_TOKEN": "",

        "CONTRACT_ADDRESS": "",
        "CONTRACT_ABI": "",

        "CONTRACT_ADDRESS_MINT" : "",
        "CONTRACT_ABI_MINT" : "",

        "SCAN_LINK": "https://mainnet.infura.io/v3/",
        "INFURA_ID": "84807e24ba43429cbf4912fe7c337dfb",
        "NETWORK": {
            "NAME": "ETH Mainnet",
            "SYMBOL": "ETH",
            "ID": 1,
            "CHAINID_HEX": "0x1"
        }
    }
};
// var defaultNetwork = NetworkConfig.TESTNET;
// const Web3Modal = window.Web3Modal.default;
// const WalletConnectProvider = window.WalletConnectProvider.default;
// const Fortmatic = window.Fortmatic;
// const evmChains = window.evmChains;
// const tree = window.MerkleTree;
// const keccak = window.keccak256;
// let web3Modal
// let provider;
let selectedAccount;
var web3;
var referAdd;

$("#mint-nft-0").click(function(e) {
        mintOne();
});
$("#mint-nft-1").click(function(e) {
        mintTwo();
});
$("#mint-nft-2").click(function(e) {
        mintThree();
});
$(".mintEnable").click(function(e) {
    mintEnable();
});
$("#stake-btn").click(function(e) {
    StakeCall();
});

$('.do-min').click(function () {
    var id = $(this).data("id");
    var inVarID="#input-quantity-"+id;
    if (isNaN($(inVarID).val() / 1) == false) {
        var quantity = $(inVarID).val();
    } else {
        var quantity = 1;
    }
    if ($(inVarID).val() > 1) {
        $(inVarID).val(parseInt(quantity) - parseInt(1));
    }
    priceChnage();
});

$('.do-plus').click(function () {
    var id = $(this).data("id");
    var inVarID="#input-quantity-"+id;
    if (isNaN($(inVarID).val() / 1) == false) {
        var quantity = $(inVarID).val();
    } else {
        var quantity = 1;
    }
    $(inVarID).val(parseInt(quantity) + parseInt(1));

    priceChnage();
});

$(".inputQuantity").change(function (e) {
    priceChnage();
});
$(".approveForMint").click(function (e) {
    approveForMint();
});

$("#logout").click(async(e) => {
    e.preventDefault();
    try {
        await web3Modal.clearCachedProvider();
        document.cookie = "pset=;max-age=0";
        $(".wallet-connect").show();
        $("#logout").hide();
        $(".userAddr").hide();
        $("#stake-btn").hide();
        $("#approveTokens").hide();
        $(".mintNft").hide();
    } catch (error) {
        console.log("cle=>", cle);
    }
    checkAddress = fakeAddress;
});

$(".wallet-connect").click(function (e) {
    onConnect();
});

$(".input-quantity").change(function (e) {
    console.log(this.value)
});

$("#withdraw").click(function (e) {
    withdraw();
});

$("#withdraw-all").click(function (e) {
    withdrawAll();
});

$("#withdraw-reward").click(function (e) {
    withdrawReward();
});

$("#approveTokens").click(function (e) {
    approveTokens();
});

function errorMintRedirect(){
    if(checkAddress == fakeAddress){
        onConnect();
    }else{
        swal({
            title: "Error Found",
            text: "Minimum "+tokensForMint+" Tokens required to Mint NFTs",
            type: "error",
            showCancelButton: false,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
    }
}

function getCookie(cval) {
    let cvalue = cval + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cvalue) == 0) {
            return c.substring(cvalue.length, c.length);
        }
    }
    return '';
}

window.addEventListener('load', async () => {
    $(".wallet-connect").html('Please Wait...');
    $(".wallet-connect").attr("disabled", true);
    await initWallet();
    var pset = getCookie('pset');
    
    if ((pset != undefined && pset != '')) {
        await onConnect();
    } else {
        await initAll();
    }
    $('.onlynumeric').bind('keypress', function (e) {
        var code = e.keyCode || e.which;
        if (code > 31 && (code < 48 || code > 57) || (code == 9)) {
             return false;
        }
        return true;
    });
    $('.onlynumericwithdecimal').bind('keypress', function (e) {
        var code = (e.which) ? e.which : e.keyCode;
        if (code == 46) {
            //Check if the text already contains the . character
            if (this.value.indexOf('.') === -1) {
            return true;
            } else {
            return false;
            }
        } else {
            if (code > 31 &&
            (code < 48 || code > 57))
            return false;
        }
        return true;
    });
});


var abi_token = defaultNetwork.CONTRACT_ABI_TOKEN;
var contractAddress_token = defaultNetwork.CONTRACT_ADDRESS_TOKEN;

var abi = defaultNetwork.CONTRACT_ABI;
var contractAddress = defaultNetwork.CONTRACT_ADDRESS;

var abi_mint = defaultNetwork.CONTRACT_ABI_MINT;
var contractAddress_mint = defaultNetwork.CONTRACT_ADDRESS_MINT;

var fakeAddress = "0x000000000000000000000000000000000000dEaD";
var userAddress = fakeAddress;
var checkAddress = userAddress;
var contract = undefined;
var contract_mint = undefined;

var saleEnableOne;
var saleEnableTwo;
var saleEnableThree;

var userStatus;

var MintLimit = 0;
var maxMintLimit = 0;
var NFTpriceOne = 0;
var NFTpriceTwo = 0;
var NFTpriceThree = 0;
var TOTAL_NFT_MINTED = 0;
var TOTAL_NFT = 0;
var buttondisplay = "Yes";  
var LimitPerTrx;
var LimitPerWallet;

var TRANSACTION_LIMIT = 0;
var TRANSACTION_LIMIT_ONE = 0;
var TRANSACTION_LIMIT_TWO = 0;
var TRANSACTION_LIMIT_THREE = 0;

var SALE_NFT_ONE;
var SALE_NFT_TWO;
var SALE_NFT_THREE;

var SALE_PRICE_ONE;
var SALE_PRICE_TWO;
var SALE_PRICE_THREE;

var totalSupply;
var networkId;
var type;

var SALE_MINTED_ONE;
var SALE_MINTED_TWO;
var SALE_MINTED_THREE;

var remaningNFT_One = 0;
var remaningNFT_Two = 0;
var remaningNFT_Three = 0;

var tokensForMint=null;

var getUserInfo;
var minTokensToStake;
var tokensStaked;

var balanceOf;
var tokensToApprove;
var approved;

var mintApprove;
var maxWalletAmount;

async function onConnect() {
    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect();
        document.cookie = "pset=true";
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }
    provider.on("accountsChanged", (accounts) => {
        init2();
    });
    provider.on("chainChanged", (chainId) => {
        init2();
    });
    provider.on("networkChanged", (networkId) => {
        init2();
    });
    await init2();
}



function mytoFixed(num, fixed) {
    if (typeof num != "string") {
        num = num.toString();
    }
    num = (num.indexOf('.') < 0) ? num + '.' + '00000000' : num + '' + '00000000';
    num = num.slice(0, (num.indexOf(".")) + fixed + 1);
    return num;
}

async function initWallet() {
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                infuraId: defaultNetwork.INFURA_ID,
                chainId: defaultNetwork.NETWORK.ID,
            }
        },
        'custom-walletlink': {
            display: {
                logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
                name: 'Coinbase',
                description: 'Connect to Coinbase Wallet',
            },
            options: {
                appName: 'Coinbase',
                networkUrl: defaultNetwork.SCAN_LINK + defaultNetwork.INFURA_ID,
                chainId: defaultNetwork.NETWORK.ID,
            },
            package: WalletLink,
            connector: async (_, options) => {
                const {
                    appName,
                    networkUrl,
                    chainId
                } = options
                const walletLink = new WalletLink({
                    appName,
                })
                const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
                await provider.enable()
                return provider
            },
        }
    }
    web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
    });
    console.log("Web3Modal instance is", web3Modal);
    
    $(".wallet-connect").html('Connect  <img src="img/svg/a.svg">');
    $(".wallet-connect").attr("disabled", false);

    const web3 = new Web3(defaultNetwork.SCAN_LINK + defaultNetwork.INFURA_ID);
    const contract = new web3.eth.Contract(abi, contractAddress);
    const contract_mint = new web3.eth.Contract(abi_mint, contractAddress_mint);

    minTokensToStake = await contract.methods.minStaking().call() /10 ** 18;
    tokensForMint = await contract_mint.methods.TOKEN_REQUIRED_FOR_MINT().call() / 10**18;
    
    getUserInfo = await contract.methods.getUserInfo(userAddress).call();
    tokensStaked = getUserInfo[0] / 10 ** 18;
    console.log("tokens stked ",tokensStaked)
    
    // if(tokensStaked > tokensForMint || tokensStaked != 0){
    //     $(".mint-page-link").attr("href", "./mint.php");
    //     $(".mint-page-link").attr("onClick", "");
    // }else{
    //     $(".mint-page-link").attr("onClick", "errorMintRedirect()");
    // }
}

async function init2() {
    const web3 = new Web3(provider);
    contract_token = new web3.eth.Contract(abi_token, contractAddress_token);
    contract = new web3.eth.Contract(abi, contractAddress);
    contract_mint = new web3.eth.Contract(abi_mint, contractAddress_mint);
    networkId = web3.currentProvider.chainId;
    web3.eth.getAccounts(function (err, accounts) {
        if (err != null) {
            swal({
                title: "Error Found",
                text: err,
                type: "error",
                showCancelButton: false,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Ok",
                closeOnConfirm: false
            });
        } 
        else if (accounts.length == 0) {
            swal({
                title: "Error Found",
                text: 'Your Wallet is Locked. Please Unlock It To Use DAPP',
                type: "error",
                showCancelButton: false,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Ok",
                closeOnConfirm: false
            });
        } 
        else if (networkId != defaultNetwork.NETWORK.ID) {
            swal({
                title: "Error Found",
                text: 'Make Sure You Are Using The ' + defaultNetwork.NETWORK.NAME,
                type: "error",
                showCancelButton: false,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Ok",
                closeOnConfirm: false
            });
        } else {
            userAddress = accounts[0];
            checkAddress = userAddress;
            $("#logout").show();
            $(".wallet-connect").css("display", "none");
            $(".userAddr").html(userAddress.slice(0,5)+"..."+userAddress.slice(39,42))
            $(".userAddr").show();
            // $("#stake-btn").show();
            // $("#approveTokens").show();
            chcekTokens();
            checkStakeTokensInput();
            initAll();
        }
    });
}

async function chcekTokens(){
    const web3 = new Web3(defaultNetwork.SCAN_LINK + defaultNetwork.INFURA_ID);
    const contract_token = new web3.eth.Contract(abi_token, contractAddress_token);
    const contract = new web3.eth.Contract(abi, contractAddress);
    const contract_mint = new web3.eth.Contract(abi_mint, contractAddress_mint);

    minTokensToStake = await contract.methods.minStaking().call() /10 ** 18;
    tokensForMint = await contract_mint.methods.TOKEN_REQUIRED_FOR_MINT().call() / 10**18;
    
    getUserInfo = await contract.methods.getUserInfo(userAddress).call();
    tokensStaked = getUserInfo[0] / 10 ** 18;
    console.log("tokens stked ",tokensStaked)
    
    // if(balanceOf >= tokensForMint){
    //     $(".mint-page-link").attr("href", "./mint.php");
    //     $(".mint-page-link").attr("onClick", "");
    // }else{
    //     $(".mint-page-link").attr("onClick", "errorMintRedirect()");
    // }

    balanceOf = await contract_token.methods.balanceOf(userAddress).call() / 10**18;
    maxWalletAmount = await contract_token.methods.maxWalletAmount().call() / 10**18;
    console.log("balacnce of" , maxWalletAmount)
    approved = await contract_token.methods.allowance(userAddress,contractAddress).call() /10**18;
    tokensToApprove = await contract_token.methods.totalSupply().call();
    console.log("approved ",approved)

    $("#stakeTokensInput").val(balanceOf.toFixed(5));
    if(balanceOf > maxMintLimit){
        $("#stakeTokensInput").val(maxMintLimit.toFixed(5));
    }
    // if(tokensToApprove != 0){
    //     $("#approveTokens").show();
    //     $("#approveTokens").html(`Approve : ${tokensToApprove} Tokens`)
    // }

    if(approved > 0){
        $("#stake-btn").show();
        if(tokensStaked == 0){
            $("#hideStake").show();
            $("#showStake").hide();
            $("#hideStake").html("You have not staked tokens yet")
        }else{
            $("#showStake").show();
            $("#hideStake").hide();
            $("#stake-amt").html(tokensStaked)
        }
    }
    else{
        $("#approveTokens").show();
    }
}

function checkStakeTokensInput(){
    let count = $("#stakeTokensInput").val();
    if(balanceOf < count){
        $("#stakeTokensInput").val(balanceOf.toFixed(5));
        if(balanceOf > maxMintLimit){
            $("#stakeTokensInput").val(maxMintLimit.toFixed(5));
        }
    }
    else if(count < minTokensToStake){
        $("#stakeTokensInput").val(minTokensToStake)
    }
    if(balanceOf < minTokensToStake){
        $("#error-stake").html("Insufficient Tokens for Staking");
        $("#stake-btn").attr("disabled",true)
    }
}

async function approveTokens(){
    // let provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    const contract_token = new web3.eth.Contract(abi_token, contractAddress_token);
    const contract = new web3.eth.Contract(abi, contractAddress);
    console.log("tokensToApprove value", tokensToApprove)

    contract_token.methods.approve(contractAddress, tokensToApprove).estimateGas({
        from: userAddress
    }).then(function (gasAmount) {
        contract_token.methods.approve(contractAddress, tokensToApprove).send({
            from: userAddress
        }, function (error, tx) {
            if (error) {
                swal({
                    title: "Error Found",
                    text: error.message,
                    type: "error",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            } else {
                swal({
                    title: "Approve Request Submitted Successfully",
                    text: "Please Wait For Wallet Confirmation",
                    type: "success",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            }
        });
    }).catch(function (error) {
        swal({
            title: "Error Found",
            text: error.message,
            type: "error",
            showCancelButton: false,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
    });

}

async function StakeCall(){
    const web3 = new Web3(provider);
    const contract = new web3.eth.Contract(abi, contractAddress);

    var countStake = $("#stakeTokensInput").val();
    countStake = web3.utils.toWei(countStake, 'ether');
    // countStake = countStake * 1000000000000000000;
    console.log("count stake", countStake)
    
    contract.methods.deposit(countStake).estimateGas({
        from: userAddress
    }).then(function (gasAmount) {
        contract.methods.deposit(countStake).send({
            from: userAddress
        }, function (error, tx) {
            if (error) {
                swal({
                    title: "Error Found",
                    text: error.message,
                    type: "error",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            } else {
                swal({
                    title: "Approve Request Submitted Successfully",
                    text: "Please Wait For Wallet Confirmation",
                    type: "success",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            }
        });
    }).catch(function (error) {
        swal({
            title: "Error Found",
            text: error.message,
            type: "error",
            showCancelButton: false,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
    });

}

async function initAll() {
    const web3 = new Web3(defaultNetwork.SCAN_LINK + defaultNetwork.INFURA_ID);
    const contract_token = new web3.eth.Contract(abi_token, contractAddress_token);
    const contract = new web3.eth.Contract(abi, contractAddress);
    const contract_mint = new web3.eth.Contract(abi_mint, contractAddress_mint);

    // &contractaddress=0xaED064da85aa8a98f8DEdC5f08504CdE56A6fF39
    // fetch('https://api.bscscan.com/api?module=account&action=txlist&address=0x760c5A41b67BE0b8E208Da61c9654d5aad1e92f2&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=6WPVYZ6X6QY1AXPSJRZBPCF45W6G1DWTBQ')

    
    // 0xaED064da85aa8a98f8DEdC5f08504CdE56A6fF39
    

    let path = window.location.pathname;
    let page = path.split("/").pop();

    if (page == "home.php") {
        console.log("page new")
    }
    else if(page == "staketoken.php"){        
        console.log("stake page")
        
    }
    else if(page == "mint.php"){
        $(".wallet-connect").hide();
        

        saleEnableOne = await contract_mint.methods.saleEnableTierOne().call();
        saleEnableTwo = await contract_mint.methods.saleEnableTierTwo().call();
        saleEnableThree = await contract_mint.methods.saleEnableTierThree().call();

        userStatus = await contract_mint.methods.users(userAddress).call();
        userStatus = userStatus[1];

        mintApprove = await contract_token.methods.allowance(userAddress,contractAddress_mint).call() /10**18;

        if(userStatus && balanceOf >= tokensForMint){
            $(".mintNft").show();  
            $(".mintNft").attr("disabled", false);
            if (saleEnableOne) {
                type = "saleOne";
                $("#mint-nft-0").show();
            }else{
                $("#mint-nft-0").html(`<button class="border_btn" disabled="disabled">Minting Paused</button>`);
            }
            if (saleEnableTwo) {
                type = "saleTwo";
                $("#mint-nft-1").show();
            }else{
                $("#mint-nft-1").html(`<button class="border_btn" disabled="disabled">Minting Paused</button>`);
            }
            if(saleEnableThree){
                type = "saleThree";
                $("#mint-nft-2").show();
            }else {
                $("#mint-nft-2").html(`<button class="border_btn" disabled="disabled">Minting Paused</button>`);
            }
        }
        else{
            if(balanceOf < tokensForMint){
                $(".tokenToMint").html(tokensForMint)
                $(".insufficientBal").show();
            }else{
                if(mintApprove < tokensForMint){
                    $(".approveForMint").show();
                }
                else{
                    $(".mintEnable").show();
                    $(".mintNft").hide();  
                    $(".mintNft").attr("disabled", true);
                }
            }         
        }

        SALE_NFT_ONE = parseInt(await contract_mint.methods.SALE_NFT_TIER_ONE().call());
        SALE_NFT_TWO = parseInt(await contract_mint.methods.SALE_NFT_TIER_TWO().call());
        SALE_NFT_THREE = parseInt(await contract_mint.methods.SALE_NFT_TIER_THREE().call());

        SALE_MINTED_ONE = parseInt(await contract_mint.methods.NFT_MINTED_TIER_ONE().call());
        SALE_MINTED_TWO = parseInt(await contract_mint.methods.NFT_MINTED_TIER_TWO().call());
        SALE_MINTED_THREE = parseInt(await contract_mint.methods.NFT_MINTED_TIER_THREE().call());

        LimitPerWallet = parseInt(await contract_mint.methods.MAX_MINT_SALE().call());
    
        LimitPerTrx = parseInt(await contract_mint.methods.MAX_BY_MINT_IN_TRANSACTION_SALE().call());

        SALE_PRICE_ONE = await contract_mint.methods.SALE_PRICE_TIER_ONE().call() / 10**18;
        SALE_PRICE_TWO = await contract_mint.methods.SALE_PRICE_TIER_TWO().call() / 10**18;
        SALE_PRICE_THREE = await contract_mint.methods.SALE_PRICE_TIER_THREE().call() / 10**18;

        fetch(`https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD`)
        .then((res) => res.json())
        .then((data) => {
            let USD_ETH = data.USD;
            $("#usd-price-0").html((USD_ETH * SALE_PRICE_ONE).toFixed(3));
            $("#usd-price-1").html((USD_ETH * SALE_PRICE_TWO).toFixed(3));
            $("#usd-price-2").html((USD_ETH * SALE_PRICE_THREE).toFixed(3));
        })
        .catch(error => console.error(error));

        $("#totalMint_0").html(SALE_MINTED_ONE);
        $("#totalMint_1").html(SALE_MINTED_TWO);
        $("#totalMint_2").html(SALE_MINTED_THREE);
        
        $("#supply_0").html(SALE_NFT_ONE);
        $("#supply_1").html(SALE_NFT_TWO);
        $("#supply_2").html(SALE_NFT_THREE);
        
        $("#init-ETH-0").html(SALE_PRICE_ONE);
        $("#init-ETH-1").html(SALE_PRICE_TWO);
        $("#init-ETH-2").html(SALE_PRICE_THREE);

        $("#ETH_0").html(SALE_PRICE_ONE);
        $("#ETH_1").html(SALE_PRICE_TWO);
        $("#ETH_2").html(SALE_PRICE_THREE);
        
        MintLimit = LimitPerWallet;
        
        NFTpriceOne = SALE_PRICE_ONE;
        NFTpriceTwo = SALE_PRICE_TWO;
        NFTpriceThree = SALE_PRICE_THREE;
        
        remaningNFT_One = SALE_NFT_ONE - SALE_MINTED_ONE;
        remaningNFT_Two = SALE_NFT_TWO - SALE_MINTED_TWO;
        remaningNFT_Three = SALE_NFT_THREE - SALE_MINTED_THREE;
        console.log("remaning one ",remaningNFT_One)
        console.log("remaning 2 ",remaningNFT_Two)
        console.log("remaning 3 ",remaningNFT_Three)

        if (LimitPerTrx > MintLimit) 
        {
            LimitPerTrx = MintLimit;
        }
        TRANSACTION_LIMIT = LimitPerTrx;

        // Transaction limit update as per remaining NFTs
        if(TRANSACTION_LIMIT > remaningNFT_One ){
            TRANSACTION_LIMIT_ONE = remaningNFT_One;
        }else{
            TRANSACTION_LIMIT_ONE = TRANSACTION_LIMIT;
        }
    
        if(TRANSACTION_LIMIT > remaningNFT_Two ){
            TRANSACTION_LIMIT_TWO = remaningNFT_Two;
        }else{
            TRANSACTION_LIMIT_TWO = TRANSACTION_LIMIT;
        }
    
        if(TRANSACTION_LIMIT > remaningNFT_Three ){
            TRANSACTION_LIMIT_THREE = remaningNFT_Three;
        }else{
            TRANSACTION_LIMIT_THREE = TRANSACTION_LIMIT;
        }
        await userStatsUpdate();
    }

}

async function userStatsUpdate() {
    
        
    var getSaleMinted = await contract_mint.methods.users(userAddress).call();
    getSaleMinted = getSaleMinted[0]
    // MintLimit = parseInt(LimitPerWallet) - parseInt(getSaleMinted.MintedNFT);
    MintLimit = parseInt(MintLimit) - parseInt(getSaleMinted);

    if (0 >= MintLimit) {
        $(".mintNft").html(`<button class="border_btn" disabled="disabled">Already Minted</button>`);
    }
    if (LimitPerTrx > MintLimit) {
        TRANSACTION_LIMIT_ONE = MintLimit;
        TRANSACTION_LIMIT_TWO = MintLimit;
        TRANSACTION_LIMIT_THREE = MintLimit;
    }
    
    if(userStatus){
        if(saleEnableOne){
            type="saleOne";
            if(SALE_NFT_ONE == SALE_MINTED_ONE){
                type = "sold";
                $("#mint-nft-0").html(`<button class="border_btn" disabled="disabled">TIER 1 Sold OUT</button>`);
            }
        }
    
        if(saleEnableTwo){
            type = "saleTwo";
            if(SALE_NFT_TWO == SALE_MINTED_TWO){
                type = "sold";
                $("#mint-nft-1").html(`<button class="border_btn" disabled="disabled">TIER 2 SOLD OUT</button>`);
            }
        }
    
        if(saleEnableThree){
            if(SALE_NFT_THREE == SALE_MINTED_THREE){
                type = "sold";
                $("#mint-nft-2").html(`<button class="border_btn" disabled="disabled">TIER 3 SOLD OUT</button>`);
            }
        }
    }else{
        // $(".mintEnable").show();
        // $(".mintNft").hide();  
        // $(".mintNft").attr("disabled", true);
        if(balanceOf < tokensForMint){
            $(".tokenToMint").html(tokensForMint)
            $(".insufficientBal").show();
        }else{
            if(mintApprove < tokensForMint){
                $(".approveForMint").show();
            }
            else{
                $(".mintEnable").show();
                $(".mintNft").hide();  
                $(".mintNft").attr("disabled", true);
            }
        } 
    }
    priceChnage();
}

function priceChnage() {
    if ($(".inputQuantity").val() == '') {
        $(".inputQuantity").val(1);
    }
    // var count = parseInt($("#input-quantity").val());

    var count0 = parseInt($("#input-quantity-0").val());
    var count1 = parseInt($("#input-quantity-1").val());
    var count2 = parseInt($("#input-quantity-2").val());

    if (TRANSACTION_LIMIT_ONE >= 0 && count0 > TRANSACTION_LIMIT_ONE) {
        if (TRANSACTION_LIMIT_ONE > remaningNFT_One) {
            TRANSACTION_LIMIT_ONE = remaningNFT_One;
        }
        var price0 = (TRANSACTION_LIMIT_ONE * NFTpriceOne);
        $("#input-quantity-0").val(TRANSACTION_LIMIT_ONE < 1 ? 1 : TRANSACTION_LIMIT_ONE);
    } 
    else {
        var price0 = (count0 * NFTpriceOne);
    }

    if (TRANSACTION_LIMIT_TWO >= 0 && count1 > TRANSACTION_LIMIT_TWO) {
        if (TRANSACTION_LIMIT_TWO > remaningNFT_Two) {
            TRANSACTION_LIMIT_TWO = remaningNFT_Two;
        }
        var price1 = (TRANSACTION_LIMIT_TWO * NFTpriceTwo);
        $("#input-quantity-1").val(TRANSACTION_LIMIT_TWO < 1 ? 1 : TRANSACTION_LIMIT_TWO);
    } 
    else {
        var price1 = (count1 * NFTpriceTwo);
    }
    if (TRANSACTION_LIMIT_THREE >= 0 && count2 > TRANSACTION_LIMIT_THREE) {
        if (TRANSACTION_LIMIT_THREE > remaningNFT_Three) {
            TRANSACTION_LIMIT_THREE = remaningNFT_Three;
        }
        var price2 = (TRANSACTION_LIMIT_THREE * NFTpriceThree);
        $("#input-quantity-2").val(TRANSACTION_LIMIT_THREE < 1 ? 1 : TRANSACTION_LIMIT_THREE);
    } 
    else {
        var price2 = (count2 * NFTpriceThree);
    }
    
    $("#ETH_0").html(price0.toFixed(3));
    $("#ETH_1").html(price1.toFixed(3));
    $("#ETH_2").html(price2.toFixed(3));
}

async function mintOne() {
    try {
            let count = parseInt($("#input-quantity-0").val());
            $("#error-0").html('');

            if (count <= 0) {
                $("#error-0").html('Mint Atleast 1 NFT');
            } else if (count > remaningNFT_One) {
                $("#error-0").html("Can't Mint More Than Remaning NFT");
            } else if (count > MintLimit) {
                $("#error-0").html("Can't Mint More Than " + MintLimit + " NFT");
            } else {
                    let price = count * SALE_PRICE_ONE * 10**18;
                    if (count > TRANSACTION_LIMIT) {
                        $("#error-0").html("Can't Mint More Than " + TRANSACTION_LIMIT + " NFT");
                    } else {
                        contract_mint.methods.mintSaleNFTTierOne(count).estimateGas({
                            from: userAddress,
                            value: price
                        }).then(function (gasAmount) {
                            contract_mint.methods.mintSaleNFTTierOne(count).send({
                                from: userAddress,
                                value: price
                            }, function (error, tx) {
                                if (error) {
                                    swal({
                                        title: "Error Found",
                                        text: error.message,
                                        type: "error",
                                        showCancelButton: false,
                                        confirmButtonClass: "btn-danger",
                                        confirmButtonText: "Ok",
                                        closeOnConfirm: false
                                    });
                                } else {
                                    swal({
                                        title: "Mint Request Submitted Successfully",
                                        text: "Please Wait For Wallet Confirmation",
                                        type: "success",
                                        showCancelButton: false,
                                        confirmButtonClass: "btn-danger",
                                        confirmButtonText: "Ok",
                                        closeOnConfirm: false
                                    });
                                }
                            });
                        }).catch(function (error) {
                            swal({
                                title: "Error Found",
                                // text: 'Insufficient Funds For Transaction in Wallet',
                                text: error.message,
                                type: "error",
                                showCancelButton: false,
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Ok",
                                closeOnConfirm: false
                            });
                        });
                }
            }
    } catch (error) {
        swal({
            title: "Error Found",
            text: error,
            type: "error",
            showCancelButton: false,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
    }
}
async function mintTwo() {
    try {
            let count = parseInt($("#input-quantity-1").val());
            $("#error-1").html('');

            if (count <= 0) {
                $("#error-1").html('Mint Atleast 1 NFT');
            } else if (count > remaningNFT_One) {
                $("#error-1").html("Can't Mint More Than Remaning NFT");
            } else if (count > MintLimit) {
                $("#error-1").html("Can't Mint More Than " + MintLimit + " NFT");
            } else {
                    let price = count * SALE_PRICE_TWO * 10**18;
                    if (count > TRANSACTION_LIMIT) {
                        $("#error-1").html("Can't Mint More Than " + TRANSACTION_LIMIT + " NFT");
                    } else {
                        contract_mint.methods.mintSaleNFTTierTwo(count).estimateGas({
                            from: userAddress,
                            value: price
                        }).then(function (gasAmount) {
                            contract_mint.methods.mintSaleNFTTierTwo(count).send({
                                from: userAddress,
                                value: price
                            }, function (error, tx) {
                                if (error) {
                                    swal({
                                        title: "Error Found",
                                        text: error.message,
                                        type: "error",
                                        showCancelButton: false,
                                        confirmButtonClass: "btn-danger",
                                        confirmButtonText: "Ok",
                                        closeOnConfirm: false
                                    });
                                } else {
                                    swal({
                                        title: "Mint Request Submitted Successfully",
                                        text: "Please Wait For Wallet Confirmation",
                                        type: "success",
                                        showCancelButton: false,
                                        confirmButtonClass: "btn-danger",
                                        confirmButtonText: "Ok",
                                        closeOnConfirm: false
                                    });
                                }
                            });
                        }).catch(function (error) {
                            swal({
                                title: "Error Found",
                                text: 'Insufficient Funds For Transaction in Wallet',
                                type: "error",
                                showCancelButton: false,
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Ok",
                                closeOnConfirm: false
                            });
                        });
                }
            }
    } catch (error) {
        swal({
            title: "Error Found",
            text: error,
            type: "error",
            showCancelButton: false,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
    }
}
async function mintThree() {
    try {
            let count = parseInt($("#input-quantity-2").val());
            $("#error-2").html('');

            if (count <= 0) {
                $("#error-2").html('Mint Atleast 1 NFT');
            } else if (count > remaningNFT_Three) {
                $("#error-2").html("Can't Mint More Than Remaning NFT");
            } else if (count > MintLimit) {
                $("#error-2").html("Can't Mint More Than " + MintLimit + " NFT");
            } else {
                    let price = count * SALE_PRICE_THREE * 10**18;
                    if (count > TRANSACTION_LIMIT) {
                        $("#error-2").html("Can't Mint More Than " + TRANSACTION_LIMIT + " NFT");
                    } else {
                        contract_mint.methods.mintSaleNFTTierThree(count).estimateGas({
                            from: userAddress,
                            value: price
                        }).then(function (gasAmount) {
                            contract_mint.methods.mintSaleNFTTierThree(count).send({
                                from: userAddress,
                                value: price
                            }, function (error, tx) {
                                if (error) {
                                    swal({
                                        title: "Error Found",
                                        text: error.message,
                                        type: "error",
                                        showCancelButton: false,
                                        confirmButtonClass: "btn-danger",
                                        confirmButtonText: "Ok",
                                        closeOnConfirm: false
                                    });
                                } else {
                                    swal({
                                        title: "Mint Request Submitted Successfully",
                                        text: "Please Wait For Wallet Confirmation",
                                        type: "success",
                                        showCancelButton: false,
                                        confirmButtonClass: "btn-danger",
                                        confirmButtonText: "Ok",
                                        closeOnConfirm: false
                                    });
                                }
                            });
                        }).catch(function (error) {
                            swal({
                                title: "Error Found",
                                text: 'Insufficient Funds For Transaction in Wallet',
                                type: "error",
                                showCancelButton: false,
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Ok",
                                closeOnConfirm: false
                            });
                        });
                }
            }
    } catch (error) {
        swal({
            title: "Error Found",
            text: error,
            type: "error",
            showCancelButton: false,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
    }
}

async function mintEnable(){
    contract_mint.methods.mintEnable().estimateGas({
        from: userAddress
    }).then(function (gasAmount) {
        contract_mint.methods.mintEnable().send({
            from: userAddress
        }, function (error, tx) {
            if (error) {
                swal({
                    title: "Error Found",
                    text: error.message,
                    type: "error",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            } else {
                swal({
                    title: "Request Submitted Successfully",
                    text: "Please Wait For Wallet Confirmation",
                    type: "success",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            }
        });
    }).catch(function (error) {
        swal({
            title: "Error Found",
            // text: 'Insufficient Funds For Transaction in Wallet',
            text: error.message,
            type: "error",
            showCancelButton: false,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
    });
}

async function approveForMint(){
    const web3 = new Web3(provider);
    const contract_token = new web3.eth.Contract(abi_token, contractAddress_token);
     let approveTokensForMint = web3.utils.toWei(tokensForMint.toString(), 'ether');
    contract_token.methods.approve(contractAddress_mint, approveTokensForMint).estimateGas({
        from: userAddress
    }).then(function (gasAmount) {
        contract_token.methods.approve(contractAddress_mint, approveTokensForMint).send({
            from: userAddress
        }, function (error, tx) {
            if (error) {
                swal({
                    title: "Error Found",
                    text: error.message,
                    type: "error",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            } else {
                swal({
                    title: "Request Submitted Successfully",
                    text: "Please Wait For Wallet Confirmation",
                    type: "success",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            }
        });
    }).catch(function (error) {
        swal({
            title: "Error Found",
            // text: 'Insufficient Funds For Transaction in Wallet',
            text: error.message,
            type: "error",
            showCancelButton: false,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
    });
}

async function withdraw(){
    contract.methods.withdraw().estimateGas({
        from: userAddress
    }).then(function (gasAmount) {
        contract.methods.withdraw().send({
            from: userAddress
        }, function (error, tx) {
            if (error) {
                swal({
                    title: "Error Found",
                    text: error.message,
                    type: "error",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            } else {
                swal({
                    title: "Withdraw Request Submitted Successfully",
                    text: "Please Wait For Wallet Confirmation",
                    type: "success",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            }
        });
    }).catch(function (error) {
        swal({
            title: "Error Found",
            text: 'Insufficient Funds For Transaction in Wallet',
            type: "error",
            showCancelButton: false,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
    });
}

async function withdrawAll(){
    contract.methods.withdrawAll().estimateGas({
        from: userAddress
    }).then(function (gasAmount) {
        contract.methods.withdrawAll().send({
            from: userAddress
        }, function (error, tx) {
            if (error) {
                swal({
                    title: "Error Found",
                    text: error.message,
                    type: "error",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            } else {
                swal({
                    title: "Withdraw Request Submitted Successfully",
                    text: "Please Wait For Wallet Confirmation",
                    type: "success",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            }
        });
    }).catch(function (error) {
        swal({
            title: "Error Found",
            text: 'Insufficient Funds For Transaction in Wallet',
            type: "error",
            showCancelButton: false,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
    });
}

async function withdrawReward(){
    contract.methods.withdrawReward().estimateGas({
        from: userAddress
    }).then(function (gasAmount) {
        contract.methods.withdrawReward().send({
            from: userAddress
        }, function (error, tx) {
            if (error) {
                swal({
                    title: "Error Found",
                    text: error.message,
                    type: "error",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            } else {
                swal({
                    title: "Withdraw Reward Request Submitted Successfully",
                    text: "Please Wait For Wallet Confirmation",
                    type: "success",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
            }
        });
    }).catch(function (error) {
        swal({
            title: "Error Found",
            text: error.message,
            type: "error",
            showCancelButton: false,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
    });
}