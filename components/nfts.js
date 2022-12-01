import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

    let checkMinted = await nftContract.methods.users(account).call()
    if (checkMinted.salemint > 0) {
      let nftOwnedVar = await nftContract.methods.tokensOfOwner(account).call()
      // let nftOwnedVar = await nftContract.methods.tokensOfOwner('0xAE4380884911451cf8708B958fAc7A5AE3504800').call()
      setNftOwned(nftOwnedVar);
    }
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
              "name": `${metadata[token_id].name}`,
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
    let num = current.id
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
          <a href={img} target="_blank" rel="noreferrer">
            <Image src={img} layout="fixed" width="200" height="200" alt={name} />
          </a>
        </span>
        <span className={styles.name}><b>Anarchist #{num}</b>{name}</span>
        <span className={styles.status}>
          {(() => {
            if (borrow.length > 0) {
              return (
                <>
                  <p className="clean">Borrowed {borrow[0].date}</p>
                  <p className="clean highlight">Returning {borrow[0].return}</p>
                  <p className="clean">Rate: {borrow[0].interest} ADD per day</p>
                </>
              )
            } else if (loan.length > 0) {
              return (
                <>
                  <p className="clean highlight">Loaned {loan[0].date}</p>
                  <p className="clean highlight">Returning {loan[0].return}</p>
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
                  <p className="clean highlight"><b>Not staked yet. Coming soon!</b></p>
                </>
              )
            }
          })()}
        </span>
        <span className={styles.proposal}>
          {(() => {
            if (loan.length > 0 && loan[0].claimable) {
              return (
                <>
                  <p className="clean highlight">Reward: 0.00 ETH (<a href="$">claim</a>)</p>
                </>
              )
            } else if (loan.length > 0) {
              return (
                <>
                  <p className="clean">Rate: {loan[0].interest} ADD per day</p>
                  <p className="clean">Borrower: {loan[0].borrower}</p>
                </>
              )
            } else if (proposal.length > 0) {
              return (
                <>
                  <p className="clean highlight">Currently submitted with</p>
                  <p className="clean">Proposal {proposal[0].id}</p>
                </>
              )
            } else if (borrow.length > 0) {
              return (
                <>
                  <a href="#" className="button-mono btn-secondary btn-sm">Submit Proposal</a>
                </>
              )
            } else if (purpose) {
              return (
                <>
                  <a href="#" className="button-mono btn-secondary btn-sm">Submit Proposal</a><br />
                  <a href="#" className="button-mono btn-sm btn-outline pretitled">Loans</a>
                </>
              )
            } else if (stake) {
              return (
                <>
                  <a href="#" className="button-mono btn-sm btn-outline pretitled">Proposals</a><br />
                  <a href="#" className="button-mono btn-sm btn-outline pretitled">Loans</a>
                </>
              )
            } {/*} else {
              return (
                <>
                  <a href="#" className="button-mono btn-sm">Stake Now</a>
                </>
              )
            }*/}
          })()}
        </span>
      </li>
    )
    rows.push(item)
  }
  // } else {
  //   rows.push(<p className={styles.notation} style={{ color: 'red' }}>Wallet Not Connected</p>)
  // }
  if (nftList.length > 0) {
    return <>{rows}</>
  } else {
    return <><center><i>{
      active ?
        <>
          No NFTs owned
        </>
        :
        <>Please connect to a wallet with NFTs or...</>
    }</i><br /><br /><Link href="mint"><a className="button-mono">Mint a fresh NFT</a></Link></center></>
  }
}

export default function Nfts(props) {
  return (
    <>
      <center><h2>My NFTs</h2></center>
      <ul className={styles.nfts}>
        {/*<li className={styles.headings}>
          <span className={styles.nfthead}>NFT</span>
          <span className={styles.namehead}>Title</span>
          <span className={styles.status}>Status</span>
          <span className={styles.proposal}>Availability</span>
        </li>*/}
        <MyList />
      </ul>
      <br />
      <center>
        <h2>My Borrowed NFTs</h2>
        <p><i>NFT loan marketplace coming soon!</i></p>
      </center>
      <br />
      <br />
      <blockquote className={styles.notation}><b className="glitchme" data-text="Thank you for contributing to Anarchist DAO">Thank you for contributing to Anarchist DAO</b></blockquote>
      <br />
      <ul className={styles.roadmap}>
        <li><b>Coming soon:</b></li>
        <li>NFT Loans<br /><br /></li>
        <li><b>Additional Features:</b></li>
        <li><strike>400x sold: NFT List</strike></li>
        <li><b>300x sold: </b> NFT Single Pages</li>
        <li><b>200x sold: </b> Revealed when reach previous sales mark</li>
      </ul>
    </>
  )
}