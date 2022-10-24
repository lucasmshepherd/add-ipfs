import Image from 'next/image'
import Media from '../public/assets/images/nft/21.jpg'
import styles from '../styles/components/nfts.module.sass'

export default function Nft(props) {
  let title = "Anarchist #1"
  let status = "Ready for Anarchy"
  let change = (<select><option>Proposal Submissions</option><option>Available for Loan</option></select>)
  let change2 = (<select><option>Available for Loan</option></select>)

  return (
    <>
      <li className={styles.headings}>
        <span className={styles.media}>
          NFT
        </span>
        <span className={styles.id}>Title</span>
        <span className={styles.id}>Status</span>
        <span className={styles.id}>Stake NFT</span>
      </li>
      <li className={styles.nft}>
        <a href="assets/images/nft/21.jpg" target="_blank" rel="noreferrer nofollower" className={styles.media}>
          <Image src={Media} width="98px" height="98px"  layout="fixed" alt={title} />
        </a>
        <span className={styles.id}>{title}</span>
        <span className={styles.id}>{status}</span>
        <span className={styles.id}>Coming soon!</span>
      </li>
      <li className={styles.nft}>
      <a href="assets/images/nft/21.jpg" target="_blank" rel="noreferrer nofollower" className={styles.media}>
          <Image src={Media} width="98px" height="98px"  layout="fixed" alt={title} />
        </a>
        <span className={styles.id}>{title}</span>
        <span className={styles.id}>{status}</span>
        <span className={styles.id}>Coming soon!</span>
      </li>
      <li className={styles.nft}> 
      <a href="assets/images/nft/21.jpg" target="_blank" rel="noreferrer nofollower" className={styles.media}>
          <Image src={Media} width="98px" height="98px"  layout="fixed" alt={title} />
        </a>
        <span className={styles.id}>{title}</span>
        <span className={styles.id}>{status}</span>
        <span className={styles.id}>Coming soon!</span>
      </li>
      <li className={styles.nft}>
      <a href="assets/images/nft/21.jpg" target="_blank" rel="noreferrer nofollower" className={styles.media}>
          <Image src={Media} width="98px" height="98px"  layout="fixed" alt={title} />
        </a>
        <span className={styles.id}>{title}</span>
        <span className={styles.id}>{status}</span>
        <span className={styles.id}>Coming soon!</span>
      </li>
    </>
  )
}