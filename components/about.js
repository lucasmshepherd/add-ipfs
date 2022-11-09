import Image from 'next/image'
// components
//import Banner from '../public/assets/images/banner-donations.jpg'
import Donater from './donater.js'
//styles
import styles from '../styles/components/donations.module.sass'
// media

export default function Donations(props) {
  return (
    <>
      <div className={styles.aboutbg}><div className={styles.donatebgglitch}>&nbsp;</div></div>
      <div className={styles.donations}>
        <h2 className={styles.heading}>tek_sup.port</h2>
      </div>
      {/*<Image src={Banner} layout="responsive" priority="true" alt="Anarchist Computer Center" />*/}
      <div className={styles.sidebyside}>
        <div className={styles.content}>
          <p><big><b>The Anarchist Development DAO was founded by a small group of individuals who believe in a more decentralized society.</b></big></p>
          <p>Our core principles are trust, free and open markets, private ownership of property and capital and the complete abolishment of legacy financial systems.</p>
          <p>The Anarchist Development DAO and its contributors have helped execute on this ideology and further the cause of making our mission, not just an idea, but a reality.</p>
          <p>Every individual who has contributed to the Anarchist Development DAO has dedicated most of their professional lives to the advancement of decentralized technologies, activist movements, cryptocurrency, software development or finance.</p>
        </div>
        <Donater />
      </div>
    </>
  )
}