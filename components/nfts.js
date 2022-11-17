import Image from 'next/image'
import styles from '../styles/components/nfts.module.sass'

const nftList = [
  {
    "id": "0001",
    "name": "Anarchist #1 Razor",
    "url": "/assets/images/nft/t1e.png",
    "purchased": "10/01/22",
    "staked": "",
    "purpose": "",
    "borrowed": [],
    "loaned": [],
    "proposal": []
  },
  {
    "id": "0002",
    "name": "Anarchist #2 Razor2",
    "url": "/assets/images/nft/t1e.png",
    "purchased": "10/01/22",
    "staked": "10/01/22",
    "purpose": "",
    "borrowed": [],
    "loaned": [],
    "proposal": []
  },
  {
    "id": "0002",
    "name": "Anarchist #2 Razor2",
    "url": "/assets/images/nft/t1e.png",
    "purchased": "10/01/22",
    "staked": "10/01/22",
    "purpose": "proposals",
    "borrowed": [],
    "loaned": [],
    "proposal": []
  },
  {
    "id": "0003",
    "name": "Anarchist #2 Razor2",
    "url": "/assets/images/nft/t1e.png",
    "purchased": "10/01/22",
    "staked": "10/01/22",
    "purpose": "proposals",
    "borrowed": [],
    "loaned": [],
    "proposal": [{
      "id": "PA000178"
    }]
  },
  {
    "id": "0004",
    "name": "Anarchist #0087 Firefly",
    "url": "/assets/images/nft/t1e.png",
    "purchased": "10/01/22",
    "staked": "10/01/22",
    "purpose": "loans",
    "borrowed": [],
    "loaned": [{
      "date": "10/01/22",
      "return": "10/06/22",
      "interest": ".02",
      "borrower": "WALLET_ID",
      "claimable": ""
    }],
    "proposal": []
  },
  {
    "id": "0005",
    "name": "Anarchist #501 Static",
    "url": "/assets/images/nft/t1e.png",
    "purchased": "",
    "staked": "",
    "purpose": "proposals",
    "borrowed": [{
      "date": "10/01/22",
      "return": "10/06/22",
      "interest": ".02",
      "owner": "WALLET_ID"
    }],
    "loaned": [],
    "proposal": [{
      "id": "PA000084"
    }]
  },
  {
    "id": "0006",
    "name": "Anarchist #501 Static",
    "url": "/assets/images/nft/t1e.png",
    "purchased": "",
    "staked": "",
    "purpose": "proposals",
    "borrowed": [{
      "date": "10/01/22",
      "return": "10/06/22",
      "interest": ".02",
      "owner": "WALLET_ID"
    }],
    "loaned": [],
    "proposal": []
  },
  {
    "id": "0007",
    "name": "Anarchist #501 Static",
    "url": "/assets/images/nft/t1e.png",
    "purchased": "",
    "staked": "",
    "purpose": "loans",
    "borrowed": [],
    "loaned": [{
      "date": "10/01/22",      
      "claimable": "0.00"
    }],
    "proposal": []
  }
]

function MyList() {
  let list = nftList
  let rows = []
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
            if ( borrow.length > 0 ) {
              return (
                <>
                  <p className="clean">Borrowed {borrow[0].date}</p>
                  <p className="clean highlight">Returning {borrow[0].return}</p>
                  <p className="clean">Rate: {borrow[0].interest} ADD per day</p>
                </>
              )
            } else if ( loan.length > 0 ) {
              return (
                <>
                  <p className="clean highlight">Loaned {loan[0].date}</p>
                  <p className="clean highlight">Returning {loan[0].return}</p>
                </>
              )
            } else if ( stake ) {
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
            if ( loan.length > 0 && loan[0].claimable ) {
              return (
                <>
                  <p className="clean highlight">Reward: 0.00 ETH (<a href="$">claim</a>)</p>
                </>
              )
            } else if ( loan.length > 0 ) {
              return (
                <>
                  <p className="clean">Rate: {loan[0].interest} ADD per day</p>
                  <p className="clean">Borrower: {loan[0].borrower}</p>
                </>
              )
            } else if ( proposal.length > 0 ) {
              return (
                <>
                  <p className="clean highlight">Currently submitted with</p>
                  <p className="clean">Proposal {proposal[0].id}</p>
                </>
              )
            } else if ( borrow.length > 0 ) {
              return (
                <>
                  <a href="#" className="button-mono btn-secondary btn-sm">Submit Proposal</a>
                </>
              )
            } else if (purpose) {
              return (
                <>
                  <a href="#" className="button-mono btn-secondary btn-sm">Submit Proposal</a><br/>
                  <a href="#" className="button-mono btn-sm btn-outline pretitled">Loans</a>
                </>
              )
            } else if (stake) {
              return (
                <>
                  <a href="#" className="button-mono btn-sm btn-outline pretitled">Proposals</a><br/>
                  <a href="#" className="button-mono btn-sm btn-outline pretitled">Loans</a>
                </>
              )
            } else {
              return (
                <>
                  <a href="#" className="button-mono btn-sm">Stake Now</a>
                </>
              )
            }
          })()}
        </span>
      </li>
    )
    rows.push(item)
  }
  return rows
}

export default function Nfts(props) {

  return (
    <>
      <ul className={styles.nfts}>
        {/*<li className={styles.headings}>
          <span className={styles.nfthead}>NFT</span>
          <span className={styles.namehead}>Title</span>
          <span className={styles.status}>Status</span>
          <span className={styles.proposal}>Availability</span>
        </li>*/}
        <MyList />
      </ul>
      <br/>
      <p className={styles.notation}><b className="glitchme" data-text="Thank you for contributing to Anarchist DAO">Thank you for contributing to Anarchist DAO</b></p>
    </>
  )
}