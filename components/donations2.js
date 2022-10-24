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
      <div className={styles.donatebg}><div className={styles.donatebgglitch}>&nbsp;</div></div>
      <div className={styles.donations}>
        <h2 className={styles.heading}>FURTHER THE CAUSE</h2>
      </div>
      {/*<Image src={Banner} layout="responsive" priority="true" alt="Anarchist Computer Center" />*/}
      <div className={styles.sidebyside}>
        <div className={styles.content}>
          <blockquote>0xB1FFA2C89C45C8E865aA80d764aE94E8e880E43C</blockquote>
          <h3 className={styles.title}>How will your donation be used?</h3>
          <p>All donations will be used to help build a more decentralized society; this includes but is not limited to supporting existing causes for decentralization while raising awareness of Anarchist Development DAO through every marketing avenue.</p>
          <p>If you have a preferred cause you would like to support, please let us know by leaving a message in <a href="https://discord.gg/BSaaz73pJD" target="_blank" rel="noreferrer nofollower">discord</a> along with your donation.</p>
          <p>Thank you again for the support,</p>
          <p><b className="glitchme" data-text="Let Anarchy Reign!">Let Anarchy Reign!</b></p>
        </div>
        <Donater />
      </div>
    </>
  )
}