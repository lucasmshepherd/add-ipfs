import React, { useState, useEffect } from 'react'
import styles from '../styles/components/donations.module.sass'
//Claim Requirements
import Web3EthContract from "web3-eth-contract";
import Web3 from 'web3'
import swal from 'sweetalert';
import StakeContract from './integration/stake.json'
import { useWeb3React } from "@web3-react/core";

export default function Donater() {
  let accent = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.96 3.72"><path d="M54.96,2.98h-15.7v.74h15.7v-.74Z"/><path d="M35.33,2.98H0v.74H35.33v-.74Z"/><path d="M54.95,1.48H0v.74H54.95v-.74Z"/><path d="M54.96,0H23.56V.74h31.4V0Z"/><path d="M19.63,0h-3.92V.74h3.92V0Z"/><path d="M11.78,0h-3.92V.74h3.92V0Z"/><path d="M3.92,0H0V.74H3.92V0Z"/></svg>)

  const {
    active,
    account
  } = useWeb3React();
  
  const [pendingReward, setPendingReward] = useState(0);

  const getPendingReward = async() => {
    // const web3 = new Web3(SACN_LINK_PROVIDER);
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);
    const contract = new Web3EthContract(StakeContract.abi, StakeContract.STAKE_CONTRACT_ADDRESS);
    
    setPendingReward(await contract.methods.pendingreward(account).call()/10**18);
  }

  async function withdrawReward(){
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);
    const contract = new Web3EthContract(StakeContract.abi, StakeContract.STAKE_CONTRACT_ADDRESS);

    await contract.methods.withdrawReward().estimateGas({
        from: account
    }).then(function (gasAmount) {
        contract.methods.withdrawReward().send({
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
                    title: "Withdraw Reward Request Submitted Successfully",
                    text: "Please wait for wallet confirmation...",
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

  useEffect(() => {
    if(active){
      getPendingReward();
    }
  }, [active, account]);

  return (
    <>
      <form className={styles.form}>
          <h3>Claim ETH Rewards</h3>
          <p>Claim your Anarchist DAO rewards.  Rewards are based on the amount you have staked <a href="" title="DAO FAQ">and more</a>.</p>
          <p><span className="note">NOTE</span> Withdrawal allowed once per week.</p>
          <label>claim_rewards</label>
          <input type="text" name="amount" placeholder="0.00 ETH" value={pendingReward.toFixed(18) + " ETH"} className="eth-input"></input>

        {pendingReward > 0 && active ?
          <button type="button" onClick={withdrawReward} className="button-mono push-right">{accent}Claim Daily Rewards</button>
          :
          // <button type="button" onClick={error} className="button-mono push-right" disabled>{accent}Claim Rewards</button>
          <div style={{color:'red'}}>ERROR: Nothing to Claim Right Now</div>
        }
      </form>
    </>
  )
}