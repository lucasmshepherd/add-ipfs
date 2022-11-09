import React, { useState, useEffect } from 'react'
import styles from '../styles/components/donations.module.sass'
//Claim Requirements
import Web3EthContract from "web3-eth-contract";
import Web3 from 'web3'
import swal from 'sweetalert';
import StakeContract from './integration/stake.json'
import { useWeb3React } from "@web3-react/core";
import moment from 'moment';
moment().format();

export default function Donater() {
  let accent = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.96 3.72"><path d="M54.96,2.98h-15.7v.74h15.7v-.74Z"/><path d="M35.33,2.98H0v.74H35.33v-.74Z"/><path d="M54.95,1.48H0v.74H54.95v-.74Z"/><path d="M54.96,0H23.56V.74h31.4V0Z"/><path d="M19.63,0h-3.92V.74h3.92V0Z"/><path d="M11.78,0h-3.92V.74h3.92V0Z"/><path d="M3.92,0H0V.74H3.92V0Z"/></svg>)

  const {
    active,
    account
  } = useWeb3React();
  
  const [pendingReward, setPendingReward] = useState(0);
  const [tokensStaked, setTokensStaked] = useState(0);
  const [claimAfter, setClaimAfter] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const [storage, setStorage] = useState(0)

  const getPendingReward = async() => {
    // const web3 = new Web3(SACN_LINK_PROVIDER);
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);
    const contract = new Web3EthContract(StakeContract.abi, StakeContract.STAKE_CONTRACT_ADDRESS);
    
    let claimInterval = await contract.methods.claimInterval().call();
    setClaimAfter(claimInterval / 86400); // 86400 seconds in a day, diving by seconds set in contract will return number of days from seconds 

    // setInterval(async()=>{
    //   let claimPeriodLeft = await contract.methods.claimPeriodLeft(account).call();
    //   const formatted = moment.utc(claimPeriodLeft*1000).format('DD:HH:mm:ss');
    //   // setDaysLeft(claimPeriodLeft/86400)
    //   // setHoursLeft(claimPeriodLeft/168)
    //   // setMinLeft(claimPeriodLeft/60)
    //   setTimeRemaining(formatted);
    //   console.log("running here",formatted.slice(9,11))
    // },12000)

    let userInfo = await contract.methods.getUserInfo(account).call();
    setTokensStaked((userInfo[0])/10**18);

    if(tokensStaked > 0){

      setPendingReward(await contract.methods.pendingreward(account).call()/10**18);
    }
  }

  useEffect(()=>{
    const getTimeRemaining = async() => {
      const { ethereum } = window;
      Web3EthContract.setProvider(ethereum);
      const contract = new Web3EthContract(StakeContract.abi, StakeContract.STAKE_CONTRACT_ADDRESS);

      let claimPeriodLeft = await contract.methods.claimPeriodLeft(account).call();
      
      // const formatted = moment.utc(claimPeriodLeft*1000).format('DD:HH:mm:ss');
      // setTimeRemaining(formatted);

      var countDownDate = claimPeriodLeft * 1000;
      setInterval(function() {
        console.log("countDownDate",countDownDate)
        
  //      var now = new Date().getTime();
  //        console.log("now time",now)
        // var distance = countDownDate - now;
        var distance = (countDownDate - 1);
        setStorage(distance)

        distance = moment.utc(distance).format('DD:HH:mm:ss');
        setTimeRemaining(distance);
        // localStorage.setItem('A', distance)
      },1000);

    }

    if(active){
      getTimeRemaining();
    }
  },[active,account])

  function mytimecountdown(unixtime)
  {   
      var countDownDate = unixtime * 1000;
      var x = setInterval(function() {
  
          var now = new Date().getTime();
        
          var distance = countDownDate - now;
        
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
          //document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
          if(typeof(document.getElementById("nextRebase")) != 'undefined' && document.getElementById("nextRebase")!=null){
               document.getElementById("nextRebase").innerHTML = ('0' + hours).slice(-2)+':'+('0' + minutes).slice(-2)+':'+('0' + seconds).slice(-2);
          }
          if (distance < 0) {
            clearInterval(x);
           // document.getElementById("demo").innerHTML = "EXPIRED";
           if(typeof(document.getElementById("nextRebase")) != 'undefined' && document.getElementById("nextRebase")!=null){
            document.getElementById("nextRebase").innerHTML = "00:00:00";
           }
          }
        }, 1000);
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

  useEffect(() => {
    if(active){
      getPendingReward();
    }
  }, [active, account]);

  return (
    <>
      <form className={styles.form}>
          <h3>Claim ADD</h3>
          <p>Claim your <b>earned</b> ADD rewards.  This will not affect your staked ADD balance.</p>
          <p>NOTE : You can claim your rewards once every {claimAfter} days</p>
          <label>claim_rewards</label>
          <input type="text" name="amount" placeholder="0.00 ADD" value={pendingReward + " ADD"} className="eth-input"></input>

          {active ?
            <>
              {pendingReward > 0 ?
                <button type="button" onClick={withdrawReward} className="button-mono push-right">{accent}Claim Rewards</button>
                :
                // <button type="button" onClick={error} className="button-mono push-right" disabled>{accent}Claim Rewards</button>
                // <div style={{color:'red'}}>Cooldown : <span id='nextRebase'></span></div>
                <div style={{color:'red'}}>Cooldown : {timeRemaining}</div>
              }
            </>
            :
            <div style={{color:'red'}}>ERROR: No wallet found</div>

          }
      </form>
    </>
  )
}