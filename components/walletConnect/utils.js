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
        testnet : 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        mainnet : 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
    }
    return SCAN_LINK.testnet
    // return SCAN_LINK.mainnet
  }