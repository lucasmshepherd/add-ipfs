import styles from '../styles/components/mint.module.sass'
import Image from 'next/image'
import nftTier1 from '../public/assets/images/nft/21.jpg'
import nftTier2 from '../public/assets/images/nft/22.jpg'
import nftTier3 from '../public/assets/images/nft/23.jpg'
import parse from 'html-react-parser'

export default function MintNft(props) {
  let tier = props.tier
  let image, content, tierText, price
  tierText = "Tier" + props.tier
  if (tier  == "1") {
    image = nftTier1.src
    content = parse("<p><b>500 spots left</b><br/><br/><b>Chaos Theory</b>: The privileged few who attain the Chaos Theory NFTs are essential to the Anarchist Development DAO and its overall ecosystem.</p><p>Chaos Theorists are the embodiment of Defi and hold to the values of the overall betterment of society and crush tyranny within the same breath. Chaos Theorists are not scared to bend the rules to fit the needs of the overall goal.</p><p>We will combine science and philosophy. Our perceived randomness to the masses has underlying patterns of complexity, constant feedback loops, repetition, and self-organization—Chaos Theory at its core.</p>")
    price = ".15"
  }
  else if (tier  == "2") {
    image = nftTier2.src
    content = parse("<p><b>500 spots left</b><br/><br/><b>Anarchy</b>: Every movement needs soldiers. Our Anarchy NFTs are for the soldiers on the front lines uniting like-minded individuals who can perpetuate change on a local or global scale.</p><p>Anarchy is a society being freely constituted without authorities or a governing body. It may also refer to a society or group of people that entirely rejects a set hierarchy.</p><p>We can all get behind that movement.</p><p>Our Anarchists will lead the way, will you join?</p>")
    price = ".25"
  }
  else if (tier  == "3") {
    image = nftTier3.src
    content = parse("<p><b>500 spots left</b><br/><br/><b>Revolution</b>: Revolutions start with a defining catalyst. The American Revolution; Boston Tea Party, Taxation Without Representation. French Revolution; massive taxes across the social spectrum until the people had enough.</p><p>What will be the modern-day catalyst? Our Revolutionaries will help foresee potential conflicts that have no other recourse than revolution.</p><p>Revolution Tier NFT holders will demonstrate the utmost capabilities in organizational skills to bring about regime change, whether it be within our ranks or on a global scale.</p><p>Revolutionaries are the gatekeepers to the DAO.")
    price = ".5"
  }
  return (
    <> 
      <div className={styles.mint}>
        <div data-tier={props.tier} className={styles.nft}>
          <Image src={image} alt="Anarchist NFT"  layout="responsive" priority="true" width="200" height="200" />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}><span className="glitchme" data-text={tierText}>{tierText}</span></h3>
          <div className={styles.price}>
            {price} ETH
          </div>
          <div className={styles.text}>{content}</div>
          <a href="#" className="button-mono button-fill push-right">PURCHASE NFT</a>
        </div>
      </div>
    </>
  )
}