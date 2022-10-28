import React, {useEffect, useState} from 'react';
import styles from '../styles/components/donations.module.sass'

//Stake Integration Requirements
import { providerURL } from './walletConnect/utils';
import TokenContract from './integration/token.json'
import StakeContract from './integration/stake.json'
import {  useWeb3React } from "@web3-react/core";
import { connectors } from "./walletConnect/connectors";
import Web3EthContract from "web3-eth-contract";
import Web3 from 'web3'
import swal from 'sweetalert';

export default function Donater() {
  let accent = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.96 3.72"><path d="M54.96,2.98h-15.7v.74h15.7v-.74Z"/><path d="M35.33,2.98H0v.74H35.33v-.74Z"/><path d="M54.95,1.48H0v.74H54.95v-.74Z"/><path d="M54.96,0H23.56V.74h31.4V0Z"/><path d="M19.63,0h-3.92V.74h3.92V0Z"/><path d="M11.78,0h-3.92V.74h3.92V0Z"/><path d="M3.92,0H0V.74H3.92V0Z"/></svg>)

  const {
    active,
    account
  } = useWeb3React();


const SACN_LINK_PROVIDER = providerURL();

const [StakeContractAddress, setStakeContractAddress] = useState(StakeContract.STAKE_CONTRACT_ADDRESS)
const [tokenContractAddress, setTokenContractAddress] = useState(TokenContract.TOKEN_CONTRACT_ADDRES)

const [approveStatus, setApproveStatus] = useState(true);
const [stakeStatus, setStakeStatus] = useState(false);

const [minTokensToStake, setMinTokensToStake] = useState(0)
const [tokensStaked, setTokensStaked] = useState(0)
const [balanceOf, setBalanceOf] = useState(0)
const [maxWalletAmount, setMaxWalletAmount] = useState(0)
const [approved, setApproved] = useState(0)
const [tokensToApprove, setTokensToApprove] = useState(0)

const [stakeCount, setStakeCount] = useState(10)

const [errorContract, setErrorContract] = useState('');

const [connected, setConnected] = useState(false)

const [stakeLimit, setStakeLimit] = useState(0)

// ONLOAD USE EFFECT 
// ONLOAD USE EFFECT 
// ONLOAD USE EFFECT

useEffect(() => {

    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);

    async function onLoad(){
        await initStake();
        if(active){
            setErrorContract('')
            setConnected(true)
            await initUserStats();
        }else{
            setConnected(false)
        }
            
    }
    onLoad();
}, [account, active]);

const initStake = async() => {
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);

    const contract_token = new Web3EthContract(TokenContract.abi, tokenContractAddress);
    const contract = new Web3EthContract(StakeContract.abi, StakeContractAddress);
    
    setMinTokensToStake(await contract.methods.minStaking().call()/10**18);

    setMaxWalletAmount(await contract_token.methods.maxWalletAmount().call() / 10**18);

    setTokensToApprove(await contract_token.methods.totalSupply().call());
}

const initUserStats = async() => {
    // const web3 = new Web3(SACN_LINK_PROVIDER);
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);

    const contract_token = new Web3EthContract(TokenContract.abi, tokenContractAddress);
    const contract = new Web3EthContract(StakeContract.abi, StakeContractAddress);
    
    let userInfo = await contract.methods.getUserInfo(account).call();
    setTokensStaked((userInfo[0])/10**18);
    // console.log("staked amt ",tokensStaked);
    
    setBalanceOf(await contract_token.methods.balanceOf(account).call()/10**18);
    // console.log("balance ",balanceOf)
    // setStakeCount(balanceOf);
    
    setApproved(await contract_token.methods.allowance(account,StakeContractAddress).call() /10**18);
    setStakeLimit(Number(maxWalletAmount) - Number(tokensStaked))
    
    if(approved > 0){
      if(balanceOf < minTokensToStake){
        setErrorContract("Insufficient Tokens for Staking");
        setStakeStatus(false)
      }else{
        setApproveStatus(false);
        setStakeStatus(true)
      }
    }else{
        setApproveStatus(true);
        setStakeStatus(false)
    }
    
}

useEffect(()=>{
    const onChange = async() => {
        await initUserStats();
    }
    if(active){
        setTimeout(onChange, 1000);
    }
},[stakeCount, approved, active, balanceOf, minTokensToStake, maxWalletAmount, account])


useEffect(() => { 
        if(active){
            if(approved < minTokensToStake){
                setErrorContract("Approve Tokens To Enter Staking");
                setStakeStatus(false)
                setApproveStatus(true)
            }else if(stakeCount < minTokensToStake){
                if(balanceOf < minTokensToStake){
                  setErrorContract("Insufficient Tokens for Staking");
                  setStakeStatus(false)
              }else{
                setErrorContract(`Stake ${minTokensToStake} Minimum Tokens`);

              }
            }
            else{
                setApproveStatus(false)
                if(balanceOf < minTokensToStake){
                    setErrorContract("Insufficient Tokens for Staking");
                    setStakeStatus(false)
                }else{
                    setErrorContract("");
                    setStakeStatus(true)

                }
            }
            if(stakeCount > stakeLimit){
                setStakeCount(stakeLimit)
            }
        }else{
            setErrorContract("");
        }
}, [active, stakeCount, approved, account]);

async function approveTokens(){
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);

    const contract_token = new Web3EthContract(TokenContract.abi, tokenContractAddress);
    
   await contract_token.methods.approve(StakeContractAddress, tokensToApprove).estimateGas({
        from: account
    }).then(function (gasAmount) {
       contract_token.methods.approve(StakeContractAddress, tokensToApprove).send({
            from: account
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
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);
    // console.log("ethe ", ethereum)

    const web3 = new Web3(SACN_LINK_PROVIDER);
    const contract = new Web3EthContract(StakeContract.abi, StakeContractAddress);

    // countStake = web3.utils.toWei(countStake, 'ether');
    // countStake = countStake * 1000000000000000000;
    // console.log("count stake", countStake)
    
    if(stakeCount < minTokensToStake){
        swal({
            title: "Oops!!",
            text: `Stake ${minTokensToStake} Minimum Tokens`,
            type: "error",
            showCancelButton: false,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
        setStakeCount(minTokensToStake);
    }
    else{
        var countStake = web3.utils.toWei(String(stakeCount), 'ether');

        contract.methods.deposit(countStake).estimateGas({
            from: account
        }).then(function (gasAmount) {
            contract.methods.deposit(countStake).send({
                from: account
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
                        title: "Stake Request Submitted Successfully",
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

}

  return (
    <>
      <form className={styles.form}>
          <h3>Stake ADD</h3>
          <p>{(balanceOf).toFixed(2)} ADD Available</p>
          <label>stake_amount</label>
          <input value={stakeCount} onChange={(e) => setStakeCount(e.target.value)} type="number" name="amount" placeholder="0.00 ADD" className="eth-input"></input>

          <div className="col-sm-12" id="error-stake" style={{color: "red"}}>{errorContract}</div>

          {
            connected ? 
            <>
                {approveStatus ? 
                    // <button type='button' onClick={approveTokens} className="button-mono push-right">{accent}APPROVE</button>
                    <>
                        {balanceOf == 0 ?
                            <></>
                            :
                            <button type='button' onClick={approveTokens} className="button-mono push-right">{accent}APPROVE</button>
                        }
                    </>
                    :
                    <>
                        {stakeStatus ? 
                            <button type='button' onClick={StakeCall} className="button-mono push-right">{accent}DEPOSIT</button>

                            :
                            // <a className="border_btn" type='button' onClick={connect}>CONNECT</a>
                            <></>
                        }
                    </>
                }
            </> : <>Connect Wallet To Continue</>
        }

      </form>
    </>
  )
}

export function StakeInfo() {

  const {
    active,
    account
  } = useWeb3React();

  const [tokensStaked,setTokensStaked] = useState(0);
  const [pendingReward, setPendingReward] = useState(0);

  const getStakedTokens = async() => {
    // const web3 = new Web3(SACN_LINK_PROVIDER);
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);
    const contract = new Web3EthContract(StakeContract.abi, StakeContract.STAKE_CONTRACT_ADDRESS);
    
    let userInfo = await contract.methods.getUserInfo(account).call();
    setTokensStaked((userInfo[0])/10**18);   
    
    setPendingReward(await contract.methods.pendingreward(account).call()/10**18);
  }

  useEffect(() => {
    if(active){
      getStakedTokens();
    }
  }, [active, account]);

  return(
   <>
    {active ?
      <>
        {tokensStaked > 0 ?
          <ul className="clean-list">
            <li><span>staked_add:</span><span>{tokensStaked}</span></li>
            <hr />
            {/* <li><span>current_cycle:</span><span>+1,452<sup>.12</sup></span></li> */}
            <li><span>claimable_add:</span><span>{pendingReward}</span></li>
          </ul>
          :
          <div>ERROR: Haven&apos;t Staked Yet</div>
        }
      </>
      :
      <div>ERROR: No wallet found</div>
    }
   </>
  )
}