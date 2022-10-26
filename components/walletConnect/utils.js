export const truncateAddress = (address) => {
    if (!address) return "No Account";
    const match = address.match(
      /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
    );
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
  };
  
  export const toHex = (num) => {
    const val = Number(num);
    return "0x" + val.toString(16);
  };
  
  export const userAddress = (address) => {
    return address
  }

  export const providerURL = () => {
    const SCAN_LINK = {
        // rinkeby : 'https://rinkeby.infura.io/v3/84807e24ba43429cbf4912fe7c337dfb',
        testnet : 'https://goerli.infura.io/v3/84807e24ba43429cbf4912fe7c337dfb',
        mainnet : 'https://mainnet.infura.io/v3/84807e24ba43429cbf4912fe7c337dfb'
    }
    return SCAN_LINK.testnet
  }