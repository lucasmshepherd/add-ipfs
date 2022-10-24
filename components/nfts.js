import Image from 'next/image'
import Nft from './nft.js'
import styles from '../styles/components/nfts.module.sass'

export default function Nfts(props) {

  return (
    <>
      <ul className={styles.nfts}>
        <Nft />
      </ul>
      <br/>
      <p className={styles.notation}><b className="glitchme" data-text="Thank you for your support.">Thank you for your support.</b></p>
    </>
  )
}