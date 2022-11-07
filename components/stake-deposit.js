import React, {useEffect, useState} from 'react'
import styles from '../styles/components/donations.module.sass'
import { Howl } from 'howler'

//Stake Integration Requirements
import { providerURL } from './walletConnect/utils'
import TokenContract from './integration/token.json'
import StakeContract from './integration/stake.json'
import {  useWeb3React } from "@web3-react/core"
import { connectors } from "./walletConnect/connectors"
import Web3EthContract from "web3-eth-contract"
import Web3 from 'web3'
import swal from 'sweetalert'

export default function Donater() {
  let accent = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.96 3.72"><path d="M54.96,2.98h-15.7v.74h15.7v-.74Z"/><path d="M35.33,2.98H0v.74H35.33v-.74Z"/><path d="M54.95,1.48H0v.74H54.95v-.74Z"/><path d="M54.96,0H23.56V.74h31.4V0Z"/><path d="M19.63,0h-3.92V.74h3.92V0Z"/><path d="M11.78,0h-3.92V.74h3.92V0Z"/><path d="M3.92,0H0V.74H3.92V0Z"/></svg>)

  const {
    active,
    account
  } = useWeb3React()


const SACN_LINK_PROVIDER = providerURL()

const [StakeContractAddress, setStakeContractAddress] = useState(StakeContract.STAKE_CONTRACT_ADDRESS)
const [tokenContractAddress, setTokenContractAddress] = useState(TokenContract.TOKEN_CONTRACT_ADDRES)
const [approveStatus, setApproveStatus] = useState(true)
const [stakeStatus, setStakeStatus] = useState(false)
const [minTokensToStake, setMinTokensToStake] = useState(0)
const [tokensStaked, setTokensStaked] = useState(0)
const [balanceOf, setBalanceOf] = useState(0)
const [maxWalletAmount, setMaxWalletAmount] = useState(0)
const [approved, setApproved] = useState(0)
const [tokensToApprove, setTokensToApprove] = useState(0)
const [stakeCount, setStakeCount] = useState(1)
const [errorContract, setErrorContract] = useState('')
const [connected, setConnected] = useState(false)
const [stakeLimit, setStakeLimit] = useState(0)
const [changeInBalanceOf, setChangeInBalanceOf] = useState(0)
const [audio, setAudio] = useState('null')

useEffect(() => {
setAudio([    
    '/assets/audio/gizmo-glitch.mp3', 
    '/assets/audio/gizmo-glitch-2.m4a', 
    '/assets/audio/gizmo-glitch-2.ogg', 
    '/assets/audio/gizmo-glitch-2.aac'
])
},[])

const soundEffect = () => {
    var sound = new Howl({
        src: audio,
        autoplay: false,
        loop: false,
        volume: 0.5
    })
    sound.play()
}
const soundEffectGood = () => {
    var sound = new Howl({
        src: [    
            '/assets/audio/mech-glitch.mp3', 
            '/assets/audio/mech-glitch.m4a', 
            '/assets/audio/mech-glitch.ogg', 
            '/assets/audio/mech-glitch.aac'
        ],
        autoplay: false,
        loop: false,
        volume: 0.5
    })
    sound.play()
}

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
}, [account, active, changeInBalanceOf]);

useEffect(()=>{
    if(active){
        const interval = setInterval(() => {
            changeInBalance()
        }, 2000);

          return () => clearInterval(interval);
    }else{
        setConnected(false)
    }
  },[active])

const changeInBalance = async() => {
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);
    const contract_token = new Web3EthContract(TokenContract.abi, tokenContractAddress);
    setChangeInBalanceOf(await contract_token.methods.balanceOf(account).call()/10**18);
}

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
                setErrorContract(`Stake ${numberWithCommas(minTokensToStake.toFixed(2))} Minimum Tokens`);

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
            if(stakeCount > balanceOf){
                setStakeCount(balanceOf)
            }
        }else{
            setErrorContract("");
        }
}, [active, stakeCount, approved, account]);

async function approveTokens(){
    soundEffectGood()
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
                    confirmButtonText: "Close",
                    closeOnConfirm: false
                });
            } else {
                swal({
                    title: "Approve Request Submitted Successfully",
                    text: "Please wait for wallet confirmation.",
                    type: "success",
                    showCancelButton: false,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Close",
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
                confirmButtonText: "Close",
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
        soundEffect()
        swal({
            title: "Minimum Staking",
            text: `Stake ${numberWithCommas(minTokensToStake.toFixed(2))} Minimum Tokens`,
            type: "error",
            showCancelButton: false,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Close",
            closeOnConfirm: false
        });
        setStakeCount(minTokensToStake);
    }
    else{
        soundEffectGood()
        var countStake = web3.utils.toWei(String(stakeCount), 'ether');

        contract.methods.deposit(countStake).estimateGas({
            from: account
        }).then(function (gasAmount) {
            contract.methods.deposit(countStake).send({
                from: account
            }, function (error, tx) {
                if (error) {
                    swal({
                        title: "Hold Up",
                        text: error.message,
                        type: "error",
                        showCancelButton: false,
                        confirmButtonClass: "btn-danger",
                        confirmButtonText: "Close",
                        closeOnConfirm: false
                    });
                } else {
                    swal({
                        title: "Stake Request Submitted Successfully",
                        text: "Please wait for wallet confirmation.  It may take a moment.",
                        type: "success",
                        showCancelButton: false,
                        confirmButtonClass: "btn-danger",
                        confirmButtonText: "Close",
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
                confirmButtonText: "Close",
                closeOnConfirm: false
            });
        });
    }

}

let bal = numberWithCommas((balanceOf).toFixed(2))


  return (
    <>
      <form className={styles.form}>
          <h3>Stake ADD</h3>
          <p>{bal} ADD Available</p>
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
            </> : <><div style={{color:'#af3535', fontStyle:'italic'}}>Connect Wallet To Continue</div></>
        }

      </form>
    </>
  )
}


function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
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
        const interval = setInterval(() => {
            getStakedTokens();
        }, 2000);
        
        return () => clearInterval(interval);
    }
  }, [active, account]);

  return(
   <>
    {active ?
      <>
        {tokensStaked > 0 ?
          <ul className="clean-list">
            <li><span>staked_balance:</span><span>{numberWithCommas(tokensStaked.toFixed(2)) + " ADD"}</span></li>
            <hr />
            {/* <li><span>current_cycle:</span><span>+1,452<sup>.12</sup></span></li> */}
            <li><span>claimable_rewards:</span><span>{pendingReward == 0 ? "0.00 ETH" : pendingReward.toFixed(18) + " ETH"}</span></li>
          </ul>
          :
          <div><i>Haven&apos;t staked yet.</i></div>
        }
      </>
      :
      <div><i>No wallet found.</i></div>
    }
   </>
  )
}