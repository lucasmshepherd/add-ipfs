import {VscChromeClose} from 'react-icons/vsc'
// import { Image } from "@chakra-ui/core";
import Image from 'next/image';
import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors";
import Modal from 'react-modal';
import Web3 from 'web3';
import swal from 'sweetalert';

  export default function SelectWalletModal({ isOpen, closeModal }) {
    const { activate } = useWeb3React();
    const web3 = new Web3();
  
    const setProvider = (type) => {
      window.localStorage.setItem("provider", type);
    };

    const networkCheck = async(walletType) => {
      const chainId = 1;
      // const chainId = 5;

      if (window.ethereum.networkVersion != chainId) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: web3.utils.toHex(chainId) }]
          });
        } catch (err) {
            // This error code indicates that the chain has not been added to MetaMask
          if (err.code === 4902) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainName: 'Goerli Testnet',
                  chainId: web3.utils.toHex(chainId),
                  nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' },
                  rpcUrls: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161']
                  // rpcUrls: ['https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161']
                }
              ]
            });
          }
            swal({
              title: "Network Error",
              text: 'Please Switch To ETH Mainnet',
              icon: "error",
              showCancelbutton: false,
              confirmbuttonClass: "btn-danger",
              confirmbuttonText: "Ok",
              closeOnConfirm: false
          });
        }
      }else{
        if(walletType == 'mm'){
          activate(connectors.injected)
          setProvider("injected");
        }else if(walletType == 'coinbase'){
          activate(connectors.coinbaseWallet);
          setProvider("coinbaseWallet");
        }else if(walletType == 'walletConnect'){
          activate(connectors.walletConnect);
          setProvider("walletConnect");
        }else{
          swal({
            title: "Oops.. !!",
            text: 'Something Went Wrong, Please Try Again',
            icon: "error",
            showCancelbutton: false,
            confirmbuttonClass: "btn-danger",
            confirmbuttonText: "Ok",
            closeOnConfirm: false
        });
        }
      }
    }
    return (
        <Modal
        isOpen={isOpen}
        // onAfterOpen={afterOpenModal}
        ariaHideApp={false}
        onRequestClose={closeModal}
        // style={customStyles}
        className="popupMain"
        >
        {/* <button onClick={closeModal}>close</button> */}
        <div className="popupcenter">
          <div className="popheader">
            <h3>Select Wallet</h3>
            <div className="close_icon"><VscChromeClose onClick={closeModal} /></div>
          </div>
          <div className="popbody">
            <div className="sn_wallet">
              <button
              variant="outline"
              onClick={() => {
                  // activate(connectors.injected);
                  // setProvider("injected");
                  networkCheck('mm');
                  closeModal();
              }}
              w="100%"
              // style={btnCustom}
              className='a_box'
              >
                  <Image
                  src="/mm.png"
                  alt="Metamask Logo"
                  width={25}
                  height={25}
                  // borderRadius="3px"
                  />
                  <p>Metamask</p>
              </button>
            </div>
            <div className="sn_wallet">
              <button
              variant="outline"
              onClick={() => {
                  // activate(connectors.walletConnect);
                  // setProvider("walletConnect");
                  networkCheck('walletConnect');
                  closeModal();
              }}
              w="100%"
              // style={btnCustom}
              className='a_box'
              >
                  <Image
                  src="/wc.png"
                  alt="Wallet Connect Logo"
                  width={26}
                  height={26}
                  // borderRadius="3px"
                  />
                  <p>Wallet Connect</p>
              </button>
            </div>
            <div className="sn_wallet">
              <button
              variant="outline"
              onClick={() => {
                  // activate(connectors.coinbaseWallet);
                  // setProvider("coinbaseWallet");
                  networkCheck('coinbase');
                  closeModal();
              }}
              w="100%"
              // style={btnCustom}
              className='a_box'
              >
                  <Image
                  src="/cbw.png"
                  alt="Coinbase Wallet Logo"
                  width={25}
                  height={25}
                  // borderRadius="3px"
                  />
                  <p>Coinbase Wallet</p>
              </button>
            </div>

          </div>


            {/* <button
            variant="outline"
            onClick={() => {
                activate(connectors.injected);
                setProvider("injected");
                closeModal();
            }}
            w="100%"
            style={btnCustom}
            >
                <Image
                src="/mm.png"
                alt="Metamask Logo"
                width={25}
                height={25}
                borderRadius="3px"
                />
                <p>Metamask</p>
            </button> */}
        </div>
        {/* <div>
            <button
            variant="outline"
            onClick={() => {
                activate(connectors.walletConnect);
                setProvider("walletConnect");
                closeModal();
            }}
            w="100%"
            style={btnCustom}
            >
                <Image
                src="/wc.png"
                alt="Wallet Connect Logo"
                width={26}
                height={26}
                borderRadius="3px"
                />
                <p>Wallet Connect</p>
            </button>
        </div>
        <div>
            <button
            variant="outline"
            onClick={() => {
                activate(connectors.coinbaseWallet);
                setProvider("coinbaseWallet");
                closeModal();
            }}
            w="100%"
            style={btnCustom}
            >
                <Image
                src="/cbw.png"
                alt="Coinbase Wallet Logo"
                width={25}
                height={25}
                borderRadius="3px"
                />
                <p>Coinbase Wallet</p>
            </button>
        </div> */}
      </Modal >
    );
  }
  