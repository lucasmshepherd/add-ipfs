import Image from 'next/image'
import styles from '../styles/components/page.module.sass'
import Beznos from '../public/assets/images/beznos.jpg'

export default function Manifesto(props) {
  return (
    <>
      <h2>Roadmap</h2>
      <h3>3.2022</h3>
      <ul>
        <li><strike>Established TEK Support entity</strike></li>
      </ul>
      <h3>5.2022</h3>
      <ul>
        <li><strike>First ADD smart contract deployed on Testnet</strike></li>
      </ul>
      <h3>6.2022</h3>
      <ul>
        <li><strike>Establish social media presence</strike></li>
      </ul>
      <h3>10.2022</h3>
      <ul>
        <li><strike>KYC/audit completed by SolidProof.io</strike></li>
      </ul>
      <h3>11.2022</h3>
      <ul><strike>
        <li>ADD Token Contract Stealth Launch on Ethereum</li>
        <li>V1 Website Released</li>
        <li>V2 Website Released </li>
        <li>Utility NFT Collection Released</li>
        <li>V3 Website Released with ETH staking Rewards</li>
        <li>1st Partnership Announcement</li>
        <li>600 TG Members</li>
        <li>Attended Decentralcon Conference</li>
        <li>400+ Twitter Followers</li>
        <li>300+ Holders</li>
        <li>1st Twitter Spaces</li>
        <li>NFT Mint Bot </li>
        <li>Treasury Watch Bot</li></strike>
      </ul>
      <h3>12.2022</h3>
      <ul>
        <li>V4 Website Release w/ NFT Loans and Proposals</li>
        <li>2nd Partnership Announcement</li> 
        <li>Whitepaper Released</li>
        <li>400+ Holders</li>
        <li><strike>Roadmap Released</strike></li>
      </ul>
      <h2>2023</h2>
      <h3>January</h3>
      <ul>
        <li>1st Official DAO proposals</li>
        <li>Continued Development of Phase 2</li>
        <li>CG Listing </li>
        <li>Additional NFT Perks</li>
      </ul>
      <h3>Q-1</h3>
      <ul>
        <li>Prototype of iOS and Android App</li>
        <li>Beta Testing Open for NFT Owners</li>
      </ul>
      <h3>Q-2</h3>
      <ul>
        <li>Full Release of Anarchist DeFi Banking </li>
        <li>Debit Card spending for Staking Rewards</li>
        <li>Direct Fiat On/Off Ramps for Crypto Purchases</li>
      </ul>
    </>
  )
}