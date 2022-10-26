import React,{ useEffect, useState } from 'react'
//import Link from 'next/link'
// state
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, logoutUser } from '../store/users/action'
//style
import styles from '../styles/components/header.module.sass'

//Wallet Connect Requirements
import SelectWalletModal from "./walletConnect/modal";
import {  useWeb3React } from "@web3-react/core";
import { networkParams } from "./walletConnect/networks";
import { connectors } from "./walletConnect/connectors";
import { toHex, truncateAddress, userAddress } from "./walletConnect/utils";

//Contract Import for Add Balance
import Web3EthContract from "web3-eth-contract";
import { providerURL } from './walletConnect/utils';
import TokenContract from './integration/token.json'
import Web3 from 'web3'

export default function Balance() {
  //Wallet Connection 
  const {
    library,
    chainId,
    account,
    activate,
    deactivate,
    active
  } = useWeb3React();
  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");
  const [network, setNetwork] = useState(undefined);
  const [message, setMessage] = useState("");
  const [signedMessage, setSignedMessage] = useState("");
  const [verified, setVerified] = useState();
  const [isOpen , setIsOpen] = useState(false)

  useEffect(()=>{
    localStorage.setItem("userAddress",account)
  },[account])

  const onOpen = (e) => {
    setIsOpen(true)
  };
  const onClose = (e) => {
    setIsOpen(false)
  };

  const refreshState = () => {
    window.localStorage.setItem("provider", undefined);
    setNetwork("");
    setMessage("");
    setSignature("");
    setVerified(undefined);
  };

  const disconnect = () => {
    refreshState();
    deactivate();
    // localStorage.setItem("userAddress",null)
  };

  useEffect(() => {
    const provider = window.localStorage.getItem("provider");
    if (provider) {
      setNetwork(Number(5));
      activate(connectors[provider])
    };
  }, [activate]);
  //Wallet Connection 

  let text = "Connect"
  // let balance, change = 0
  let logout, login, add
  const dispatch = useDispatch()
  const connected = useSelector((state) => state.users.connected)
  logout = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><rect x="90" y="30" width="15" height="15" transform="translate(135 -60) rotate(90)"/><polygon points="135 60 135 75 120 75 120 90 105 90 105 75 45 75 45 60 105 60 105 45 120 45 120 60 135 60"/><rect x="90" y="90" width="15" height="15" transform="translate(194.99 195) rotate(-180)"/><rect y="60" width="15" height="15"/><rect x="15" y="45" width="15" height="15"/><rect x="30" y="30" width="15" height="15"/><rect x="45" y="15" width="15" height="15"/><rect x="60" width="15" height="15"/><rect x="60" y="120" width="15" height="15" transform="translate(134.99 255) rotate(-180)"/><rect x="45" y="105" width="15" height="15"/><rect x="30" y="90" width="15" height="15" transform="translate(-60.01 135) rotate(-90)"/><rect x="15" y="75" width="15" height="15" transform="translate(-60.01 105) rotate(-90)"/></svg>)
  login = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><rect x="75" y="90" width="15" height="15" transform="translate(-15 180) rotate(-90)"/><polygon points="45 75 45 60 60 60 60 45 75 45 75 60 135 60 135 75 75 75 75 90 60 90 60 75 45 75"/><rect x="75" y="30" width="15" height="15"/><rect y="60" width="15" height="15"/><rect x="15" y="45" width="15" height="15"/><rect x="30" y="30" width="15" height="15"/><rect x="45" y="15" width="15" height="15"/><rect x="60" width="15" height="15"/><rect x="60" y="120" width="15" height="15" transform="translate(134.99 255) rotate(-180)"/><rect x="45" y="105" width="15" height="15"/><rect x="30" y="90" width="15" height="15" transform="translate(-60.01 135) rotate(-90)"/><rect x="15" y="75" width="15" height="15" transform="translate(-60.01 105) rotate(-90)"/></svg>)
  add = (<svg className={styles.add} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><rect y="30" width="15" height="75"/><rect x="30.62" width="74.38" height="15"/><rect x="120" y="30" width="15" height="75"/><rect x="30.34" y="120" width="74.66" height="15"/><rect x="105" y="105" width="15" height="15"/><rect x="105" y="15" width="15" height="15"/><rect x="15" y="15" width="15" height="15"/><rect x="15" y="105" width="15" height="15"/><rect x="30" y="75" width="15" height="30"/><rect x="90" y="75" width="15" height="30"/><rect x="45" y="45" width="15" height="30"/><rect x="60" y="30" width="15" height="45"/><rect x="75" y="45" width="15" height="30"/></svg>)

  function loginUserNow() {
    dispatch(loginUser());
  }

  function logoutUserNow() {
    dispatch(logoutUser());
  }

  // if (connected == "true") {
  //   logged = "true"
  //   balance = "1,927,365,091"
  //   change = ".12"
  // } else {
  //   balance = (<a href='#' onClick={onOpen}>Connect Your Wallet</a>)
  // }

  // if (balance == 0) {
  //   balance = (<a href='#' target='_blank' rel='nofollower'>Purchase ADD</a>)
  // }

  const [logged, setLogged] = useState(false)
  const [balance, setBalance] = useState(0)

  const getAddBalance = async() => {
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);
    const contract_token = new Web3EthContract(TokenContract.abi, TokenContract.TOKEN_CONTRACT_ADDRES);

    let userAddBal = (await contract_token.methods.balanceOf(account).call()/10**18).toFixed(2)
    setBalance(userAddBal);
  }

  useEffect(() => {
    if (active) {
        setLogged(true)
        getAddBalance();
      } else {
        setLogged(false)
      }
  }, [active, account, balance]);

  return (
    <> 
      <div className="flex-fill"></div>
      <div data-connected={connected} className={styles.balance}>
        <label>ADD Balance</label>
        <span title="ADD Balance">
          {active ? 
            <>
              {balance <= 0 ?
                <a href='#' target='_blank' rel='nofollower'>Purchase ADD</a>
                :
                balance
              }
            </>
            :
            <a href='#' onClick={onOpen}>Connect Your Wallet</a>
          }
          {/* {balance} */}
          {/* { change > 0 && <sup>{change}</sup>} */}
        </span>
      </div>
      <div onClick={logged ? disconnect : onOpen} className={logged ? styles.logout : styles.login}>
        <span title={logged ? "Disconnect" : "Connect"}>{logged ? logout : login}</span>
      </div>
      <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
    </>
  )
}