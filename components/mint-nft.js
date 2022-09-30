import styles from '../styles/components/mint.module.sass'
import Image from 'next/image'
import nftTier1 from '../public/assets/images/nft/2.jpg'
import nftTier2 from '../public/assets/images/nft/3.jpg'
import nftTier3 from '../public/assets/images/nft/4.jpg'

export default function MintNft(props) {
  const tier = props.tier
  let image
  if (tier  == "1") {
    image = nftTier1.src
  }
  else if (tier  == "2") {
    image = nftTier2.src
  }
  else if (tier  == "3") {
    image = nftTier3.src
  }
  return (
    <> 
      <div className={styles.mint}>
        <div data-tier={props.tier} className={styles.nft}>
          <Image src={image} alt="Anarchist NFT"  layout="responsive" priority="true" width="200" height="200" />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>Tier {props.tier}</h3>
          <p className={styles.text}>Maecenas sed erat id interdum vestibulum bibendum.</p>
          <div className={styles.price}>
            .15 ETH
          </div>
          <div className={styles.usd}>
            $1879.00
          </div>
          <a href="#" className="button">PURCHASE NFT</a>
        </div>
      </div>
    </>
  )
}