import React, {useState, useEffect} from 'react'

import styles from '../styles/components/report.module.sass'

// web 3 react
import { providerURL } from './walletConnect/utils'
import Web3EthContract from "web3-eth-contract";
import TokenContract from './integration/token.json'
import StakeContract from './integration/stake.json'
import { useWeb3React } from "@web3-react/core";
import Web3 from 'web3'

export default function Report(props) {
  const {
    active
  } = useWeb3React();
  const SACN_LINK_PROVIDER = providerURL();

  const deadAddress = '0x000000000000000000000000000000000000dEaD';

  const [addPrice, setAddPrice] = useState(0);
  const [apRate, setAprRate] = useState(0);
  const [totalStaked, setTotalStaked] = useState(0);
  const [valueLocked, setValueLocked] = useState(0);
  const [treasuryBalance, setTreasuryBalance] = useState(0);
  const [addBurned, setAddBurned] = useState(0);

  let daySinceLaunch = 0, 
      projectsFunded = 0, 
      walletCount = 0, 
      marketCap = 0.00,
      ethSent = 0.00
  let lock = (<svg className="icon-lock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><rect x="15" y="60" width="15" height="75"/><rect x="15" y="120" width="105" height="15"/><rect x="105" y="60" width="15" height="75"/><rect x="15" y="45.1" width="105" height="14.9"/><rect x="30" y="15" width="15" height="30"/><rect x="90" y="15" width="15" height="30"/><rect x="44.82" width="45.18" height="15"/><rect x="60" y="75" width="15" height="30"/></svg>)
  let page = props.page

  const getReportValues = async() => {
    const web3 = new Web3(SACN_LINK_PROVIDER);
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);
    const contract = new Web3EthContract(StakeContract.abi, StakeContract.STAKE_CONTRACT_ADDRESS);
    const contract_token = new Web3EthContract(TokenContract.abi, TokenContract.TOKEN_CONTRACT_ADDRES);
    
    setTotalStaked(await contract.methods.totalStaked().call()/10**18);
    setValueLocked(await contract.methods.totalStaked().call()/10**18);

    let treasury_account = await contract_token.methods.treasury().call();
    setTreasuryBalance(await web3.eth.getBalance(treasury_account)/10**18);

    setAddBurned(await contract_token.methods.balanceOf(deadAddress).call()/10**18)
  }

  function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
  }

  useEffect(() => {
    if(active){
      getReportValues();
    }
  }, [active]);

  return (
    <> 
      <div className={styles.table}>
            {(() => {
              if ( page == "stake" || page == "deposit" || page == "withdrawal" || page == "claim" ) {
                return (
                  <>
                    {/*<div className={styles.row}>
                      <div className={styles.cell}><h4>ADD_price</h4><span>{active ? addPrice.toFixed(2) : lock}</span></div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.cell}><h4>APR</h4><span>{active ? apRate + "%" : lock}</span></div>
                    </div>*/} 
                    <div className={styles.row}>
                      <div className={styles.cell}><h4>total_staked</h4><span>{active ? numberWithCommas(totalStaked.toFixed(2)) + " ADD" : lock}</span></div>
                    </div>
                  </>
                )
              }
            })()}
        { page == "dapp" &&
          <>
            {/*<div className={styles.row}>
              <div className={styles.cell}><h4>days_since_launch</h4><span>{active ? daySinceLaunch : lock}</span></div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}><h4>projects_funded_in_ETH</h4><span>{active ? projectsFunded : lock}</span></div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}><h4>anarchist_wallet_count</h4><span>{active ? walletCount : lock}</span></div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}><h4>marketcap</h4><span>{active ? marketCap.toFixed(2) : lock}</span></div>
            </div>*/}
            <div className={styles.row}>
              <div className={styles.cell}><h4>total_staked</h4><span>{active ? numberWithCommas(totalStaked.toFixed(2)) + " ADD" : lock}</span></div>
            </div>
            {/*<div className={styles.row}>
              <div className={styles.cell}><h4>total_eth_sent</h4><span>{active ? ethSent : lock}</span></div>
            </div>*/}
            <div className={styles.row}>
              <div className={styles.cell}><h4>treasury_balance</h4><span>{active ? numberWithCommas(treasuryBalance.toFixed(2)) + " ETH" : lock}</span></div>
            </div>
          </>
        }
      </div>
    </>
  )
}