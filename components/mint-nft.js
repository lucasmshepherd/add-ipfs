import React, { useState, useEffect } from "react"
import styles from '../styles/components/mint.module.sass'
import Image from 'next/image'
import nftTier1 from '../public/assets/images/nft/21.jpg'
import nftTier2 from '../public/assets/images/nft/22.jpg'
import nftTier3 from '../public/assets/images/nft/23.jpg'
import parse from 'html-react-parser'

//For Integration
import NFTContractJSON from './integration/nft.json'
import TokenContract from './integration/token.json'
import swal from 'sweetalert';
import Web3EthContract from "web3-eth-contract";
import {  useWeb3React } from "@web3-react/core";

export default function MintNft(props) {

  const {
    active,
    account
  } = useWeb3React();
  
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const [approveTokensBtn, setApproveTokensBtn] = useState(true)
  const [mintEnable, setMintEnable] = useState(true)

  const [saleEnableOne, setSaleEnaleOne] = useState(false)
  const [saleEnableTwo, setSaleEnaleTwo] = useState(false)
  const [saleEnableThree, setSaleEnaleThree] = useState(false)
  const [userStatus, setUserStatus] = useState(false)
  const [mintApprove, setMintApprove] = useState(0)
  const [tokensForMint, setTokensForMint] = useState(0)
  const [balancoOf, setBalanceOf] = useState(0)
  const [limitPerWallet, setLimitPerWallet] = useState(2)
  const [limitPerTrx, setLimitPerTrx] = useState(2)

  const [TRANSACTION_LIMIT, setTRANSACTION_LIMIT] = useState(2)
  const [TRANSACTION_LIMIT_ONE, setTRANSACTION_LIMIT_ONE] = useState(2)
  const [TRANSACTION_LIMIT_TWO, setTRANSACTION_LIMIT_TWO] = useState(2)
  const [TRANSACTION_LIMIT_THREE, setTRANSACTION_LIMIT_THREE] = useState(2)

  const [mintButton_1, setMintButton_1] = useState(false)
  const [mintStatus_1, setMintStatus_1] = useState("Mint NFT")
  
  const [mintButton_2, setMintButton_2] = useState(false)
  const [mintStatus_2, setMintStatus_2] = useState("Mint NFT")
  
  const [mintButton_3, setMintButton_3] = useState(false)
  const [mintStatus_3, setMintStatus_3] = useState("Mint NFT")

  const [SALE_NFT_ONE, setSALE_NFT_ONE] = useState(0)
  const [SALE_NFT_TWO, setSALE_NFT_TWO] = useState(0)
  const [SALE_NFT_THREE, setSALE_NFT_THREE] = useState(0)

  const [SALE_MINTED_ONE, setSALE_MINTED_ONE] = useState(0)
  const [SALE_MINTED_TWO, setSALE_MINTED_TWO] = useState(0)
  const [SALE_MINTED_THREE, setSALE_MINTED_THREE] = useState(0)

  const [SALE_PRICE_ONE, setSALE_PRICE_ONE] = useState(0)
  const [SALE_PRICE_TWO, setSALE_PRICE_TWO] = useState(0)
  const [SALE_PRICE_THREE, setSALE_PRICE_THREE] = useState(0)

  const [remainingNFT_One, setRemainingNFT_One] = useState(500)
  const [remainingNFT_Two, setRemainingNFT_Two] = useState(500)
  const [remainingNFT_Three, setRemainingNFT_Three] = useState(500)

  const [count_1, setCount_1] = useState(1)
  const [count_2, setCount_2] = useState(1)
  const [count_3, setCount_3] = useState(1)

  const [PRICE_ONE, setPRICE_ONE] = useState(0)
  const [PRICE_TWO, setPRICE_TWO] = useState(0)
  const [PRICE_THREE, setPRICE_THREE] = useState(0)

  const [refresh, setRefresh] = useState(false);

  // ONLOAD USE EFFECT 
  // ONLOAD USE EFFECT 
  // ONLOAD USE EFFECT 
  useEffect(() => {
    async function onLoad(){
        setLoading(true);
        await init();
        if(active){
          await init();
          await userInitFun();
        }
    }
    

    fetch(`https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD`)
        .then((res) => res.json())
        .then((data) => {
            let USD_ETH = data.USD;
            setUSD_ETH_ONE((USD_ETH * SALE_PRICE_ONE).toFixed(2));
            setUSD_ETH_TWO((USD_ETH * SALE_PRICE_TWO).toFixed(2));
            setUSD_ETH_THREE((USD_ETH * SALE_PRICE_THREE).toFixed(2));
        })
        .catch(error => console.error(error));

        onLoad();
  }, [active, account, refresh]);

useEffect(async()=>{
  if(active){
    await userInitFun()
  }
},[account,active])

  const init = async() => {

    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);
    const nftContract = new Web3EthContract(NFTContractJSON.abi, NFTContractJSON.NFTContractAddress);
  
    setLimitPerWallet(parseInt(await nftContract.methods.MAX_MINT_SALE().call()));
    setLimitPerTrx(parseInt(await nftContract.methods.MAX_BY_MINT_IN_TRANSACTION_SALE().call()));

    setSaleEnaleOne(await nftContract.methods.saleEnableTierOne().call());
    setSaleEnaleTwo(await nftContract.methods.saleEnableTierTwo().call());
    setSaleEnaleThree(await nftContract.methods.saleEnableTierThree().call());
    
    if(!saleEnableOne){
      setMintStatus_1("Minting Paused")
    }
    if(!saleEnableTwo){
      setMintStatus_2("Minting Paused")
    }
    if(!saleEnableThree){
      setMintStatus_3("Minting Paused")
    }
    

    setSALE_NFT_ONE(parseInt(await nftContract.methods.SALE_NFT_TIER_ONE().call()))
    setSALE_NFT_TWO(parseInt(await nftContract.methods.SALE_NFT_TIER_TWO().call()))
    setSALE_NFT_THREE(parseInt(await nftContract.methods.SALE_NFT_TIER_THREE().call()))

    setSALE_MINTED_ONE(parseInt(await nftContract.methods.NFT_MINTED_TIER_ONE().call()))
    setSALE_MINTED_TWO(parseInt(await nftContract.methods.NFT_MINTED_TIER_TWO().call()))
    setSALE_MINTED_THREE(parseInt(await nftContract.methods.NFT_MINTED_TIER_THREE().call()))

    setSALE_PRICE_ONE(await nftContract.methods.SALE_PRICE_TIER_ONE().call() / 10**18)
    setSALE_PRICE_TWO(await nftContract.methods.SALE_PRICE_TIER_TWO().call() / 10**18)
    setSALE_PRICE_THREE(await nftContract.methods.SALE_PRICE_TIER_THREE().call() / 10**18)

    setPRICE_ONE(await nftContract.methods.SALE_PRICE_TIER_ONE().call() / 10**18)
    setPRICE_TWO(await nftContract.methods.SALE_PRICE_TIER_TWO().call() / 10**18)
    setPRICE_THREE(await nftContract.methods.SALE_PRICE_TIER_THREE().call() / 10**18)

    setRemainingNFT_One(SALE_NFT_ONE - SALE_MINTED_ONE)
    setRemainingNFT_Two(SALE_NFT_TWO - SALE_MINTED_TWO)
    setRemainingNFT_Three(SALE_NFT_THREE - SALE_MINTED_THREE)

    if(limitPerTrx > limitPerWallet){
      setLimitPerTrx(limitPerWallet)
    }
    setTRANSACTION_LIMIT(await nftContract.methods.MAX_BY_MINT_IN_TRANSACTION_SALE().call());
    setTRANSACTION_LIMIT_ONE(await nftContract.methods.MAX_BY_MINT_IN_TRANSACTION_SALE().call())
    setTRANSACTION_LIMIT_TWO(await nftContract.methods.MAX_BY_MINT_IN_TRANSACTION_SALE().call())
    setTRANSACTION_LIMIT_THREE(await nftContract.methods.MAX_BY_MINT_IN_TRANSACTION_SALE().call())

    if(TRANSACTION_LIMIT > remainingNFT_One){
      setTRANSACTION_LIMIT_ONE(remainingNFT_One)
    }
    if(TRANSACTION_LIMIT > remainingNFT_Two){
      setTRANSACTION_LIMIT_TWO(remainingNFT_Two)
    }
    if(TRANSACTION_LIMIT > remainingNFT_Three){
      setTRANSACTION_LIMIT_THREE(remainingNFT_Three)
    }

    setLoading(false);
    setRefresh(true)
  }

  const userInitFun = async() => {
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);
    const nftContract = new Web3EthContract(NFTContractJSON.abi, NFTContractJSON.NFTContractAddress);
    const tokenContract = new Web3EthContract(TokenContract.abi, TokenContract.TOKEN_CONTRACT_ADDRES);

    setUserStatus((await nftContract.methods.users(account).call())[1]);
    console.log("user status ==> ",userStatus)

    setMintApprove(await tokenContract.methods.allowance(account, NFTContractJSON.NFTContractAddress).call() /10**18);
    console.log("mint approve here =>> ",mintApprove)
    setBalanceOf(await tokenContract.methods.balanceOf(account).call() / 10**18)
    console.log('balacnce of ', balancoOf)

    setTokensForMint(await nftContract.methods.TOKEN_REQUIRED_FOR_MINT().call() / 10**18);

    // const userMintedNft = (await nftContract.methods.users(account).call())[0];

    if(userStatus && balancoOf >= tokensForMint){
      console.log("user Info ==>> ",userStatus)
      setMintEnable(false)
      if(saleEnableOne){
        setMintButton_1(true)
      }else{
        setMintStatus_1("Minting Paused")
      }
      if(saleEnableTwo){
        setMintButton_2(true)
      }else{
        setMintStatus_2("Minting Paused")
      }
      if(saleEnableThree){
        setMintButton_3(true)
      }else{
        setMintStatus_3("Minting Paused")
      }
    }else{
      if(balancoOf < tokensForMint){
        setError("Insufficient Tokens")
      }else{
        if(mintApprove < tokensForMint){
            setApproveTokensBtn(true)
          }else{
            setApproveTokensBtn(false)
            setMintEnable(true)
          }
        // setMintEnable(true)
        // if(mintEnable){
        //   setMintEnable(false)
        // }else if(mintApprove < tokensForMint){
        //   setApproveTokensBtn(false)
        // }else{
        //   setApproveTokensBtn(true)
        // }
      }
    }
    await userStatsUpdate();
  }

  // USERSTATS UPDATE FUNCTION
  // USERSTATS UPDATE FUNCTION
  // USERSTATS UPDATE FUNCTION
  const userStatsUpdate = async() => {
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);
    const nftContract = new Web3EthContract(NFTContractJSON.abi, NFTContractJSON.NFTContractAddress);

    const getSaleMinted = (await nftContract.methods.users(account).call())[0];
    setLimitPerWallet(limitPerWallet - getSaleMinted);

    if(limitPerWallet == 0){
      setMintButton_1(false)
      setMintButton_2(false)
      setMintButton_3(false)

      setMintStatus_1("Already Minted")
      setMintStatus_2("Already Minted")
      setMintStatus_3("Already Minted")
    }
    if(SALE_MINTED_ONE === SALE_NFT_ONE){
      setMintButton_1(false)
      setMintStatus_1("SOLD OUT")
    }
    if(SALE_MINTED_TWO === SALE_NFT_TWO){
      setMintStatus_2("SOLD OUT")
      setMintButton_2(false)
    }
    if(SALE_MINTED_THREE === SALE_NFT_THREE){
      setMintButton_3(false)
      setMintStatus_3("SOLD OUT")
    }
    // priceChnage();
    // setSALE_PRICE_ONE(count_1 * PRICE_ONE)
    // setSALE_PRICE_TWO(count_2 * PRICE_TWO)
    // setSALE_PRICE_THREE(count_3 * PRICE_THREE)
  }

  // PRICE CHANGE FUNCTION
  // PRICE CHANGE FUNCTION
  // PRICE CHANGE FUNCTION

  // const priceChnage = async() => {
  //   const { ethereum } = window;
  //   Web3EthContract.setProvider(ethereum);
  //   const nftContract = new Web3EthContract(NFTContractJSON.abi, NFTContractJSON.NFTContractAddress);

  //   let initPrice1 = await nftContract.methods.SALE_PRICE_TIER_ONE().call() / 10**18;
  //   let initPrice2 = await nftContract.methods.SALE_PRICE_TIER_TWO().call() / 10**18;
  //   let initPrice3 = await nftContract.methods.SALE_PRICE_TIER_THREE().call() / 10**18;

  //   if(TRANSACTION_LIMIT_ONE >= 0 && count_1 > TRANSACTION_LIMIT_ONE){
  //     if (TRANSACTION_LIMIT_ONE > remainingNFT_One) {
  //       setTRANSACTION_LIMIT_ONE(remainingNFT_One);
  //     }
  //     setPRICE_ONE(TRANSACTION_LIMIT_ONE * initPrice1)
  //   }else{
  //     setPRICE_ONE(count_1 * initPrice1)
  //     console.log("new price change ", PRICE_ONE)
  //     console.log("new count change ", count_1)
  //   }

  //   if(TRANSACTION_LIMIT_TWO >= 0 && count_1 > TRANSACTION_LIMIT_TWO){
  //     if (TRANSACTION_LIMIT_TWO > remainingNFT_Two) {
  //       setTRANSACTION_LIMIT_TWO(remainingNFT_Two);
  //     }
  //     setPRICE_TWO(TRANSACTION_LIMIT_TWO * initPrice2)
  //   }else{
  //     setPRICE_TWO(count_2 * initPrice2)
  //   }

  //   if(TRANSACTION_LIMIT_THREE >= 0 && count_1 > TRANSACTION_LIMIT_THREE){
  //     if (TRANSACTION_LIMIT_THREE > remainingNFT_Three) {
  //       setTRANSACTION_LIMIT_THREE(remainingNFT_Three);
  //     }
  //     setPRICE_THREE(TRANSACTION_LIMIT_THREE * initPrice3)
  //   }else{
  //     setPRICE_THREE(count_3 * initPrice3)
  //   }

    
  // }
  
  useEffect(() => {
    console.log("TRANSACTION_LIMIT 1 ",TRANSACTION_LIMIT_ONE)
    setSALE_PRICE_ONE(count_1 * PRICE_ONE)
    
    if(TRANSACTION_LIMIT_ONE >= 0 && count_1 > TRANSACTION_LIMIT_ONE){
        if (TRANSACTION_LIMIT_ONE > remainingNFT_One) {
        setTRANSACTION_LIMIT_ONE(remainingNFT_One);
      }
      setSALE_PRICE_ONE(TRANSACTION_LIMIT_ONE * PRICE_ONE)
    }
    }, [count_1,refresh]);
    
  useEffect(()=>{
    setSALE_PRICE_TWO(count_2 * PRICE_TWO)

    if(TRANSACTION_LIMIT_TWO >= 0 && count_1 > TRANSACTION_LIMIT_TWO){
      if (TRANSACTION_LIMIT_TWO > remainingNFT_Two) {
        setTRANSACTION_LIMIT_TWO(remainingNFT_Two);
      }
      setSALE_PRICE_TWO(TRANSACTION_LIMIT_TWO * PRICE_TWO)
    }
  },[count_2, refresh])
    
  useEffect(()=>{
    setSALE_PRICE_THREE(count_3 * PRICE_THREE)

    if(TRANSACTION_LIMIT_THREE >= 0 && count_1 > TRANSACTION_LIMIT_THREE){
      if (TRANSACTION_LIMIT_THREE > remainingNFT_Three) {
        setTRANSACTION_LIMIT_THREE(remainingNFT_Three);
      }
      setSALE_PRICE_THREE(TRANSACTION_LIMIT_THREE * PRICE_THREE)
    }
  },[count_3, refresh])

  // MINT ENABLE FUNCTION
  // MINT ENABLE FUNCTION
  // MINT ENABLE FUNCTION
  const mintEnableFun = async() => {
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);
    const nftContract = new Web3EthContract(NFTContractJSON.abi, NFTContractJSON.NFTContractAddress);

    if(balancoOf >= tokensForMint){
      await nftContract.methods.mintEnable().estimateGas({
        from: account
      }).then(function (gasAmount) {
          nftContract.methods.mintEnable().send({
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
                      title: "Request Submitted Successfully",
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
              text: 'Insufficient Funds For Transaction in Wallet',
              // text: error.message,
              type: "error",
              showCancelButton: false,
              confirmButtonClass: "btn-danger",
              confirmButtonText: "Ok",
              closeOnConfirm: false
          });
      });
    }else{
      swal({
        title: "Error Found",
        text: 'Insufficient ADD Tokens To Enable Mint',
        // text: error.message,
        type: "error",
        showCancelButton: false,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Ok",
        closeOnConfirm: false
    });
    }
    setRefresh(!refresh)

  }

  // APPROVE TOKENS FOR MINT 
  // APPROVE TOKENS FOR MINT 
  // APPROVE TOKENS FOR MINT 
  const approveFun = async() =>{
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);
    const nftContract = new Web3EthContract(NFTContractJSON.abi, NFTContractJSON.NFTContractAddress);
    const tokenContract = new Web3EthContract(TokenContract.abi, TokenContract.TOKEN_CONTRACT_ADDRES);

    let approveTokensForMint = await nftContract.methods.TOKEN_REQUIRED_FOR_MINT().call();

   await tokenContract.methods.approve(NFTContractJSON.NFTContractAddress, approveTokensForMint).estimateGas({
        from: account
    }).then(function (gasAmount) {
        tokenContract.methods.approve(NFTContractJSON.NFTContractAddress, approveTokensForMint).send({
            from: account
        }, function (error, tx) {
            if (error) {
                swal({
                  title: "Error Found",
                  text: error.message,
                  icon: "error",
                  showCancelButton: false,
                  confirmButtonClass: "btn-danger",
                  confirmButtonText: "Ok",
                  dangerMode: true,
                  closeModal: false
                });
            } else {
                swal({
                  title: "Request Submitted Successfully",
                  text: "Please Wait For Wallet Confirmation",
                  icon: "success",
                  showCancelButton: false,
                  confirmButtonClass: "btn-danger",
                  confirmButtonText: "Ok",
                  dangerMode: true,
                  closeModal: false
                });
            }
        });
    }).catch(function (error) {
        swal({
          title: "Error Found",
          // text: 'Insufficient Funds For Transaction in Wallet',
          text: error.message,
          icon: "error",
          showCancelButton: false,
          confirmButtonClass: "btn-danger",
          confirmButtonText: "Ok",
          dangerMode: true,
          closeModal: false
        });
    });
    setRefresh(!refresh)
  }

  const doMin_1 = () => {
    // var id = $(this).data("id");
    // var inVarID="#input-quantity-"+id;
    // if (isNaN($(inVarID).val() / 1) == false) {
    //     var quantity = $(inVarID).val();
    // } else {
    //     var quantity = 1;
    // }
    // if ($(inVarID).val() > 1) {
    //     $(inVarID).val(parseInt(quantity) - parseInt(1));
    // }
    setCount_1(count_1 - 1) 
    if(count_1 <= 1){
      setCount_1(1)
      setSALE_PRICE_ONE(count_1 * PRICE_ONE)
    }
  }
  
  const doPlus_1 = () => {
    // var id = $(this).data("id");
    // var inVarID="#input-quantity-"+id;
      setCount_1(count_1 + 1) 
      if(count_1 >= limitPerTrx){
        if(limitPerTrx <= 0){
          setCount_1(1)
          setSALE_PRICE_ONE(PRICE_ONE)
        }else{
          setCount_1(limitPerTrx)
          setSALE_PRICE_ONE(limitPerTrx * PRICE_ONE)
        }
      }
    // if (isNaN($(inVarID).val() / 1) == false) {
    //     var quantity = $(inVarID).val();
    // } else {
    //     var quantity = 1;
    // }
    // $(inVarID).val(parseInt(quantity) + parseInt(1));

    // priceChnage();
  }
  
  const doMin_2 = () => {
    setCount_2(count_2 - 1) 
    if(count_2 <= 1){
      setCount_2(1)
      setSALE_PRICE_TWO(PRICE_TWO)
    }
    // priceChnage();
  }
  
  const doPlus_2 = () => {
    setCount_2(count_2 + 1) 
    if(count_2 >= limitPerTrx){
      if(limitPerTrx <= 0){
        setCount_2(1)
        setSALE_PRICE_TWO(PRICE_TWO)
      }else{
        setCount_2(limitPerTrx)
        setSALE_PRICE_TWO(limitPerTrx * PRICE_TWO)
      }
    }
    // priceChnage();
  }

  const doMin_3 = () => {
    setCount_3(count_3 - 1);
    if(count_3 <= 1){
      setCount_3(1)
      setSALE_PRICE_THREE(PRICE_THREE)
    }
    // priceChnage();
  }

  const doPlus_3 = () => {
      setCount_3(count_3 + 1);
      if(count_3 >= limitPerTrx){
        if(limitPerTrx <= 0){
          setCount_3(1)
          setSALE_PRICE_THREE(PRICE_THREE)
        }else{
          setCount_3(limitPerTrx)
          setSALE_PRICE_THREE(limitPerTrx * PRICE_THREE)
        }
      }
      // priceChnage();
  }

  const mintNft1 = async() => {
            const { ethereum } = window;
        Web3EthContract.setProvider(ethereum);
    const nftContract = new Web3EthContract(NFTContractJSON.abi, NFTContractJSON.NFTContractAddress);
    const tokenContract = new Web3EthContract(TokenContract.abi, TokenContract.TOKEN_CONTRACT_ADDRES);
    
    try {
      if (count_1 <= 0) {
          setError('Mint Atleast 1 NFT');
      } else if (count_1 > remainingNFT_One) {
          setError("Can't Mint More Than Remaning NFT");
      } else {
        let price = count_1 * SALE_PRICE_ONE * 10**18;
        console.log("price for minting here ==>> ",price)
        console.log("count 1 for minting here ==>> ",count_1)
              if (count_1 > TRANSACTION_LIMIT) {
                  setError("Can't Mint More Than " + TRANSACTION_LIMIT + " NFT");
              } else {
                 await nftContract.methods.mintSaleNFTTierOne(count_1).estimateGas({
                      from: account,
                      value: price
                  }).then(function (gasAmount) {
                      nftContract.methods.mintSaleNFTTierOne(count_1).send({
                          from: account,
                          value: price
                      }, function (error, tx) {
                          if (error) {
                              swal({
                                  title: "Error Found",
                                  text: error.message,
                                  icon: "error",                                    
                                  showCancelButton: false,
                                  confirmButtonClass: "btn-danger",
                                  confirmButtonText: "Ok",
                                  dangerMode: true,
                                  closeModal: false
                              });
                          } else {
                            swal({
                              title: "Request Submitted Successfully",
                              text: "Please Wait For Wallet Confirmation",
                              icon: "success",
                              showCancelButton: false,
                              confirmButtonClass: "btn-danger",
                              confirmButtonText: "Ok",
                              dangerMode: true,
                              closeModal: false
                            });
                          }
                      });
                  }).catch(function (error) {
                      swal({
                          title: "Error Found",
                          // text: error.message,
                          text: 'Insufficient Funds For Transaction in Wallet',
                          icon: "error",                          
                          showCancelButton: false,
                          confirmButtonClass: "btn-danger",
                          confirmButtonText: "Ok",
                          dangerMode: true,
                          closeModal: false
                      });
                  });
          }
      }
  } catch (error) {
      swal({
          title: "Error Found",
          text: error.message,
          icon: "error",      
          showCancelButton: false,
          confirmButtonClass: "btn-danger",
          confirmButtonText: "Ok",
          dangerMode: true,
          closeModal: false
      });
    }
  }

  const mintNft2 = async() => {
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);
    const nftContract = new Web3EthContract(NFTContractJSON.abi, NFTContractJSON.NFTContractAddress);
    const tokenContract = new Web3EthContract(TokenContract.abi, TokenContract.TOKEN_CONTRACT_ADDRES);

    // let txLimit_2 = await nftContract.methods.MAX_BY_MINT_IN_TRANSACTION_SALE().call()
    try {
      if (count_2 <= 0) {
          setError('Mint Atleast 1 NFT');
      } else if (count_2 > remainingNFT_Two) {
          setError("Can't Mint More Than Remaning NFT");
      } else {
        let price = count_2 * SALE_PRICE_TWO * 10**18;
              if (count_2 > TRANSACTION_LIMIT) {
                  setError("Can't Mint More Than " + TRANSACTION_LIMIT + " NFT");
              } else {
                  nftContract.methods.mintSaleNFTTierTwo(count_2).estimateGas({
                      from: account,
                      value: price
                  }).then(function (gasAmount) {
                      nftContract.methods.mintSaleNFTTierTwo(count_2).send({
                          from: account,
                          value: price
                      }, function (error, tx) {
                          if (error) {
                              swal({
                                  title: "Error Found",
                                  text: error.message,
                                  icon: "error",                                    
                                  showCancelButton: false,
                                  confirmButtonClass: "btn-danger",
                                  confirmButtonText: "Ok",
                                  dangerMode: true,
                                  closeModal: false
                              });
                          } else {
                            swal({
                              title: "Request Submitted Successfully",
                              text: "Please Wait For Wallet Confirmation",
                              icon: "success",
                              showCancelButton: false,
                              confirmButtonClass: "btn-danger",
                              confirmButtonText: "Ok",
                              dangerMode: true,
                              closeModal: false
                            });
                          }
                      });
                  }).catch(function (error) {
                      swal({
                          title: "Error Found",
                          text: 'Insufficient Funds For Transaction in Wallet',
                          icon: "error",                          
                          showCancelButton: false,
                          confirmButtonClass: "btn-danger",
                          confirmButtonText: "Ok",
                          dangerMode: true,
                          closeModal: false
                      });
                  });
          }
      }
  } catch (error) {
      swal({
          title: "Error Found",
          text: error.message,
          icon: "error",      
          showCancelButton: false,
          confirmButtonClass: "btn-danger",
          confirmButtonText: "Ok",
          dangerMode: true,
          closeModal: false
      });
    }
  }

  const mintNft3 = () => {
            const { ethereum } = window;
        Web3EthContract.setProvider(ethereum);
    const nftContract = new Web3EthContract(NFTContractJSON.abi, NFTContractJSON.NFTContractAddress);
    const tokenContract = new Web3EthContract(TokenContract.abi, TokenContract.TOKEN_CONTRACT_ADDRES);


    try {
      if (count_3 <= 0) {
          setError('Mint Atleast 1 NFT');
      } else if (count_3 > remainingNFT_Three) {
          setError("Can't Mint More Than Remaning NFT");
      } else {
        let price = count_3 * SALE_PRICE_THREE * 10**18;
              if (count_3 > TRANSACTION_LIMIT) {
                  setError("Can't Mint More Than " + TRANSACTION_LIMIT + " NFT");
              } else {
                  nftContract.methods.mintSaleNFTTierThree(count_3).estimateGas({
                      from: userAddress,
                      value: price
                  }).then(function (gasAmount) {
                      nftContract.methods.mintSaleNFTTierThree(count_3).send({
                          from: userAddress,
                          value: price
                      }, function (error, tx) {
                          if (error) {
                              swal({
                                  title: "Error Found",
                                  text: error.message,
                                  icon: "error",                                    
                                  showCancelButton: false,
                                  confirmButtonClass: "btn-danger",
                                  confirmButtonText: "Ok",
                                  dangerMode: true,
                                  closeModal: false
                              });
                          } else {
                            swal({
                              title: "Request Submitted Successfully",
                              text: "Please Wait For Wallet Confirmation",
                              icon: "success",
                              showCancelButton: false,
                              confirmButtonClass: "btn-danger",
                              confirmButtonText: "Ok",
                              dangerMode: true,
                              closeModal: false
                            });
                          }
                      });
                  }).catch(function (error) {
                      swal({
                          title: "Error Found",
                          text: 'Insufficient Funds For Transaction in Wallet',
                          icon: "error",                          
                          showCancelButton: false,
                          confirmButtonClass: "btn-danger",
                          confirmButtonText: "Ok",
                          dangerMode: true,
                          closeModal: false
                      });
                  });
          }
      }
} catch (error) {
  swal({
      title: "Error Found",
      text: error.message,
      icon: "error",      
      showCancelButton: false,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Ok",
      dangerMode: true,
      closeModal: false
  });
}
  }

  const [USD_ETH_ONE, setUSD_ETH_ONE] = useState(0)
  const [USD_ETH_TWO, setUSD_ETH_TWO] = useState(0)
  const [USD_ETH_THREE, setUSD_ETH_THREE] = useState(0)



   
  let tier = props.tier
  let image, content, tierText, price, mintbtn, dataId, saleMinted, saleNft, handleInc, handleDec, count, nftPrice, mintLive, mintStatusText, usdPrice, remainingNft
  tierText = "Tier" + props.tier
  if (tier  == "1") {
    image = nftTier1.src
    content = parse("<p><b>Chaos Theory</b>: The privileged few who attain the Chaos Theory NFTs are essential to the Anarchist Development DAO and its overall ecosystem.</p><p>Chaos Theorists are the embodiment of Defi and hold to the values of the overall betterment of society and crush tyranny within the same breath. Chaos Theorists are not scared to bend the rules to fit the needs of the overall goal.</p><p>We will combine science and philosophy. Our perceived randomness to the masses has underlying patterns of complexity, constant feedback loops, repetition, and self-organization—Chaos Theory at its core.</p>")
    price = ".15"
    mintbtn = mintNft1
    dataId = 1
    saleMinted = SALE_MINTED_ONE
    saleNft = SALE_NFT_ONE
    handleInc = doPlus_1
    handleDec = doMin_1
    count = count_1
    nftPrice = SALE_PRICE_ONE
    mintLive = mintButton_1
    mintStatusText = mintStatus_1
    usdPrice = USD_ETH_ONE
    remainingNft = remainingNFT_One
  }
  else if (tier  == "2") {
    image = nftTier2.src
    content = parse("<p><b>Anarchy</b>: Every movement needs soldiers. Our Anarchy NFTs are for the soldiers on the front lines uniting like-minded individuals who can perpetuate change on a local or global scale.</p><p>Anarchy is a society being freely constituted without authorities or a governing body. It may also refer to a society or group of people that entirely rejects a set hierarchy.</p><p>We can all get behind that movement.</p><p>Our Anarchists will lead the way, will you join?</p>")
    price = ".25"
    mintbtn = mintNft2
    dataId = 2
    saleMinted = SALE_MINTED_TWO
    saleNft = SALE_NFT_TWO
    handleInc = doPlus_2
    handleDec = doMin_2
    count = count_2
    nftPrice = SALE_PRICE_TWO
    mintLive = mintButton_2
    mintStatusText = mintStatus_2
    usdPrice = USD_ETH_TWO
    remainingNft = remainingNFT_Two
  }
  else if (tier  == "3") {
    image = nftTier3.src
    content = parse("<p><b>Revolution</b>: Revolutions start with a defining catalyst. The American Revolution; Boston Tea Party, Taxation Without Representation. French Revolution; massive taxes across the social spectrum until the people had enough.</p><p>What will be the modern-day catalyst? Our Revolutionaries will help foresee potential conflicts that have no other recourse than revolution.</p><p>Revolution Tier NFT holders will demonstrate the utmost capabilities in organizational skills to bring about regime change, whether it be within our ranks or on a global scale.</p><p>Revolutionaries are the gatekeepers to the DAO.")
    price = ".5"
    mintbtn = mintNft3
    dataId = 3
    saleMinted = SALE_MINTED_THREE
    saleNft = SALE_NFT_THREE
    handleInc = doPlus_3
    handleDec = doMin_3
    count = count_3
    nftPrice = SALE_PRICE_THREE
    mintLive = mintButton_3
    mintStatusText = mintStatus_3
    usdPrice = USD_ETH_THREE
    remainingNft = remainingNFT_Three
  }
  return (
    <> 
      <div className={styles.mint}>
        <div data-tier={props.tier} className={styles.nft}>
          <Image src={image} alt="Anarchist NFT"  layout="responsive" priority="true" width="200" height="200" />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}><span className="glitchme" data-text={tierText}>{tierText}</span></h3>
          <div className={styles.price}>
            {nftPrice} ETH
          </div>
          <div className={styles.text}>
            <b>{remainingNft} spots left</b><br/><br/>
            {content}
          </div>
          <div className={styles.price}>
            {usdPrice} USD
            {/* {price} ETH */}
          </div>

          <h4 className="text-white text-center">Minted: {saleMinted} / {saleNft}</h4>
            {
              active ? 
                <div>
                  <div className="mint-input-gp">
                    <button type="button" onClick={handleDec} data-id={dataId} className="btn_min_handle do_min">-</button>
                    <input type="text" placeholder="count"  data-id={dataId} 
                      name="quantity" defaultValue={1} value={count} id='input-quantity' className="form-control inputQuantity onlynumeric text-center"  />
                    <button type="button" onClick={handleInc}  data-id={dataId} className="btn_min_handle do_plus">+</button>
                  </div>
                  <div style={{textAlign:'center'}}>
                    <p>{nftPrice} ETH + GAS FEE</p>
                    <p style={{color:'red'}}>{error}</p>
                  </div>
                  {approveTokensBtn ?
                    <a className="button-mono button-fill push-right" onClick={approveFun}>APPROVE TOKENS</a>
                    :
                    <>
                      {mintEnable ? 
                        <a className="button-mono button-fill push-right" onClick={mintEnableFun}>ENABLE MINT</a>
                        :
                        <>
                          {mintLive ? 
                            <a className="button-mono button-fill push-right" onClick={mintbtn}>PURCHASE NFT</a>
                            :
                            <a className="button-mono button-fill push-right" disabled="true">{mintStatusText}</a>
                          }
                        </>
                      }
                    </>
                  }
                </div>
              : <p style={{color:"red"}}>Connect Wallet First</p>
            }


          {/* <a href="#" className="button-mono button-fill push-right">PURCHASE NFT</a> */}
        </div>
      </div>
    </>
  )
}