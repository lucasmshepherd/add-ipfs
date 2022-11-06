import React, {useState, useEffect} from 'react'
import styles from '../styles/components/donations.module.sass'

//Withdraw Requirements
import Web3EthContract from "web3-eth-contract";
import swal from 'sweetalert';
import StakeContract from './integration/stake.json'
import { useWeb3React } from "@web3-react/core";

export default function Donater() {
  let accent = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.96 3.72"><path d="M54.96,2.98h-15.7v.74h15.7v-.74Z"/><path d="M35.33,2.98H0v.74H35.33v-.74Z"/><path d="M54.95,1.48H0v.74H54.95v-.74Z"/><path d="M54.96,0H23.56V.74h31.4V0Z"/><path d="M19.63,0h-3.92V.74h3.92V0Z"/><path d="M11.78,0h-3.92V.74h3.92V0Z"/><path d="M3.92,0H0V.74H3.92V0Z"/></svg>)
  let balance
  const {
    active,
    account
  } = useWeb3React();
  
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  const getPendingReward = async() => {
    // const web3 = new Web3(SACN_LINK_PROVIDER);
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);
    const contract = new Web3EthContract(StakeContract.abi, StakeContract.STAKE_CONTRACT_ADDRESS);
    
    let userInfo = await contract.methods.getUserInfo(account).call();
    setWithdrawAmount((userInfo[0])/10**18);
  }

  function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
  }

  async function withdraw(){
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);
    const contract = new Web3EthContract(StakeContract.abi, StakeContract.STAKE_CONTRACT_ADDRESS);

    await contract.methods.withdraw().estimateGas({
        from: account
    }).then(function (gasAmount) {
        contract.methods.withdraw().send({
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
          <h3>Withdrawal Staked ADD</h3>
          <p><span className="warning">WARNING</span> This will remove all of your staked ADD balance and extinguish a tiny fire in the heart of a budding Anarchist who may have a massive potential for mayhem.</p>
          <label>withdrawal_amount</label>
          <input type="text" name="amount" placeholder="0.00 ADD" className="eth-input" value={numberWithCommas(withdrawAmount.toFixed(2)) + " ADD"} readOnly></input>
        {active && withdrawAmount > 0 ?
            <button type="button" onClick={withdraw} className="button-mono push-right">{accent}Withdraw</button>
          :
            <div style={{color:'#af3535', fontStyle:'italic'}}>Nothing to withdraw right now.</div>
        }
      </form>
    </>
  )
}