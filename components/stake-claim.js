import React, { useState, useEffect } from 'react'
import styles from '../styles/components/donations.module.sass'
import { Howl } from 'howler'
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
  
  const [pendingReward, setPendingReward] = useState(0)
  const [tokensStaked, setTokensStaked] = useState(0)
  const [claimAfter, setClaimAfter] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(0)

  const [claimPeriodLeft, setClaimPeriodLeft] = useState(0)

  const [day, setDay] = useState(0)
  const [hour, setHour] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)

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

      
      setClaimPeriodLeft(await contract.methods.claimPeriodLeft(account).call());
      var countDownDate = claimPeriodLeft;

      setInterval(() => {
        countDownDate = countDownDate - 1;
        secondsToDhms(countDownDate);
      },1000); 
    }
    if(active){
      getTimeRemaining();
    }
  },[active,account, claimPeriodLeft])

  function secondsToDhms(seconds) {
      seconds = Number(seconds);
      var d = Math.floor(seconds / (3600*24));
      var h = Math.floor(seconds % (3600*24) / 3600);
      var m = Math.floor(seconds % 3600 / 60);
      var s = Math.floor(seconds % 60);
      
      setDay( d > 0 ? d + (d == 1 ? " day, " : " days, ") : "");
      setHour( h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "");
      setMin( m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "");
      setSec( s > 0 ? s + (s == 1 ? " second" : " seconds") : "");
    }

  async function withdrawReward(){
    soundEffectGood()
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
  }, [active, account, pendingReward]);

  return (
    <>
      <form className={styles.form}>
      <h3>Claim Weekly Rewards</h3>
          <p>Claim your Anarchist DAO rewards!  Payouts are based on the amount you have staked <a href="https://docs.fundanarchy.io/anarchist-development-dao/staking/anarchist-develoment-dao-staking/what-is-the-benefit-to-staking" target="_blank" rel="noreferrer" title="DAO FAQ">and more</a>.</p>
          <p><span className="note">NOTE</span> You can claim your rewards once every ({claimAfter}) days after staking.</p>
          <label>claim_rewards</label>
          <input type="text" name="amount" placeholder="0.00 ETH" value={pendingReward == 0 ? "0.00 ETH" : pendingReward.toFixed(18) + " ETH"} className="eth-input" readOnly />

          {active ?
            <>
              {claimPeriodLeft <= 0 ?
              // {pendingReward > 0 && claimPeriodLeft <= 0 ?
                <button type="button" onClick={withdrawReward} className="button-mono push-right">{accent}Claim Rewards</button>
                :
                // <button type="button" onClick={error} className="button-mono push-right" disabled>{accent}Claim Rewards</button>
                <div><i>Claim again in {day} {hour} {min} {sec}</i></div>
                // <div>Cooldown : {timeRemaining}</div>
              }
            </>
            :
            <div style={{color:'#af3535', fontStyle:'italic'}}>No wallet found</div>

          }
      </form>
    </>
  )
}