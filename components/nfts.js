import { useState, useEffect } from 'react'
import Image from 'next/image'
import Nft from './nft.js'
import styles from '../styles/components/nfts.module.sass'
//For Integration
import NFTContractJSON from './integration/nft.json'
import swal from 'sweetalert';
import Web3EthContract from "web3-eth-contract";
import { useWeb3React } from "@web3-react/core";
import metadata from '../public/assets/json/_metadata.json';

// const nftList = [
//   // {
//   //   "id": "0001",
//   //   "name": "Anarchist #1 Razor",
//   //   "url": "/assets/images/nft/0001 Razor.jpg",
//   //   "purchased": "10/01/22",
//   //   "staked": "",
//   //   "purpose": "",
//   //   "borrowed": [],
//   //   "loaned": [],
//   //   "proposal": [],
//   // },
// ]

function MyList() {
  const {
    active,
    account
  } = useWeb3React();

  const [nftOwned, setNftOwned] = useState(10);
  const [nftList, setNftList] = useState([
    // {
    //   key: -1,
    //   "id": "0001",
    //   "name": "Anarchist #1 Razor",
    //   "url": "/assets/nft/1.jpg",
    //   "purchased": "10/01/22",
    //   "staked": "",
    //   "purpose": "",
    //   "borrowed": [],
    //   "loaned": [],
    //   "proposal": [],
    // }
  ]);

  useEffect(() => {
    async function onLoad() {
      // await init();
      if (active) {
        await userInitFun();
      } else {
        setNftList([])
      }
    }
    onLoad();
  }, [active, account]);

  const userInitFun = async () => {
    const { ethereum } = window;
    Web3EthContract.setProvider(ethereum);
    const nftContract = new Web3EthContract(NFTContractJSON.abi, NFTContractJSON.NFTContractAddress);

    let nftOwnedVar = await nftContract.methods.tokensOfOwner(account).call()
    // let nftOwnedVar = await nftContract.methods.tokensOfOwner('0xAE4380884911451cf8708B958fAc7A5AE3504800').call()
    setNftOwned(nftOwnedVar);
    console.log("owners nft ", nftOwned)
  }

  useEffect(() => {
    if (nftOwned.length > 0) {
      {
        nftOwned.map((token_id, index) => {
          console.log("already present ", nftList)
          if (nftList.length > 0 && token_id == nftList[token_id].key) {
            console.log("already present ", token_id)
          } else {
            console.log("nftList ===> ", nftList)
            setNftList(current => [...current,
            {
              key: token_id,
              "id": `${metadata[token_id].edition}`,
              "name": `Anarchist  #${metadata[token_id].edition} ${metadata[token_id].name}`,
              "url": `/assets/images/nft/${token_id}.jpg`,
              "purchased": "2022/10",
              "staked": "",
              "purpose": "",
              "borrowed": [],
              "loaned": [],
              "proposal": [],
            }
            ])
          }
        })
      }

    }
  }, [nftOwned])


  let list = nftList
  let rows = []
  // if (active) {
  for (let i = 0; i < list.length; i++) {
    let current = list[i]
    let name = current.name
    let img = current.url
    let purchase = current.purchased
    let stake = current.staked
    let borrow = current.borrowed
    let loan = current.loaned
    let proposal = current.proposal
    let purpose = current.purpose
    let item = (
      <li className={styles.nft}>
        <span className={styles.media}>
          <Image src={img} layout="fixed" width="100" height="100" alt={name} />
        </span>
        <span className={styles.name}>{name}</span>
        <span className={styles.status}>
          {(() => {
            if (borrow.length > 0) {
              return (
                <>
                  <p className="clean highlight">Deadline {borrow[0].return}</p>
                  <p className="clean">Borrowed {borrow[0].date}</p>
                  <p className="clean">Rate: {borrow[0].interest} ADD per day</p>
                </>
              )
            } else if (loan.length > 0) {
              return (
                <>
                  <p className="clean highlight">Returning {loan[0].return}</p>
                  <p className="clean">Loaned {loan[0].date}</p>
                  <p className="clean">Rate: {loan[0].interest} ADD per day</p>
                  <p className="clean">Borrower: {loan[0].borrower}</p>
                </>
              )
            } else if (stake) {
              return (
                <>
                  <p className="clean highlight">Staked {stake}</p>
                </>
              )
            } else {
              return (
                <>
                  <p className="clean highlight"><b>Not Staked</b></p>
                </>
              )
            }
          })()}
        </span>
        <span className={styles.proposal}>
          {(() => {
            if (loan.length > 0) {
              return (
                <>
                  <p className="clean highlight">Not Available</p>

                </>
              )
            } else if (proposal.length > 0) {
              return (
                <>
                  <p className="clean highlight">Not Available</p>
                  <p className="clean">Proposal {proposal[0].id}</p>
                </>
              )
            } else if (borrow.length > 0) {
              return (
                <>
                  <p className="clean highlight">Available until {borrow[0].return}</p>
                </>
              )
            } else if (purpose) {
              return (
                <>
                  <p className="clean highlight">Available for <b>{purpose}</b></p>
                </>
              )
            } else if (stake) {
              return (
                <>
                  <p className="clean highlight">Available</p>
                </>
              )
            } else {
              return (
                <>
                  <p className="clean highlight">Available for <b>staking</b></p>
                </>
              )
            }
          })()}
        </span>
        <span className={styles.stake}>Coming Soon</span>
      </li>
    )
    rows.push(item)
  }
  // } else {
  //   rows.push(<p className={styles.notation} style={{ color: 'red' }}>Wallet Not Connected</p>)
  // }
  return rows
}

export default function Nfts(props) {
  return (
    <>
      <ul className={styles.nfts}>
        <li className={styles.headings}>
          <span className={styles.nfthead}>NFT</span>
          <span className={styles.namehead}>Title</span>
          <span className={styles.status}>Status</span>
          <span className={styles.proposal}>Availability</span>
          <span className={styles.stake}>Stake NFT</span>
        </li>
        <MyList />
      </ul>
      <br />
      <p className={styles.notation}><b className="glitchme" data-text="Thank you for your support.">Thank you for your support.</b></p>
    </>
  )
}