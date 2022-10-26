import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import {providerURL} from './utils'

const SACN_LINK_PROVIDER = providerURL();

const injected = new InjectedConnector({
  supportedChainIds: [1,5]
});

const walletconnect = new WalletConnectConnector({
  rpcUrl: SACN_LINK_PROVIDER,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true
});


const walletlink = new WalletLinkConnector({
  url: SACN_LINK_PROVIDER,
  appName: "web3-react-demo"
});

export const connectors = {
  injected: injected,
  walletConnect: walletconnect,
  coinbaseWallet: walletlink
};
