import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/components/loan.module.sass'
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
  }

  useEffect(() => {
    if (nftOwned.length > 0) {
      {
        nftOwned.map((token_id, index) => {
          //console.log("already present ", nftList)
          if (nftList.length > 0 && token_id == nftList[token_id].key) {
            //console.log("already present ", token_id)
          } else {
            //console.log("nftList ===> ", nftList)
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
      <>
        <li className={styles.nft} key={num}>
          <span className={styles.media}>

              <Image src={img} layout="fixed" width="200" height="200" alt={name} />
            
          </span>
          <span className={styles.name}><b>per day</b>.1 ETH</span>
          <span className={styles.name}><b>for</b>7 Days</span>

          <div className={styles.staking}>
            <div className={styles.stakerow}>
              <a href="#" className="button-mono btn-outline btn-sm disabled">Borrow</a>
            </div>
          </div>

        </li>

      </>
    )
    rows.push(item)
  }
  // } else {
  //   rows.push(<p className={styles.notation} style={{ color: 'red' }}>Wallet Not Connected</p>)
  // }
  if(nftList.length > 0) {
    return <>{rows}</>
  } else {
    return <><center><i>Please connect to a wallet with NFTs or...</i><br/><br/><Link href="mint"><a className="button-mono">Mint a fresh NFT</a></Link></center></>
  }
}

export default function Nfts(props) {
  return (
    <>
      <div className={styles.mintbg}><div className={styles.mintbgglitch}>&nbsp;</div></div>
      <div className={styles.minty}>
        <h2 className={styles.heading}>NFT Lending</h2>
      </div>
      <ul className={styles.nfts}>
        {/*<li className={styles.headings}>
          <span className={styles.nfthead}>NFT</span>
          <span className={styles.namehead}>Title</span>
          <span className={styles.status}>Status</span>
          <span className={styles.proposal}>Availability</span>
        </li>*/}
        <MyList />
      </ul>
    </>
  )
}