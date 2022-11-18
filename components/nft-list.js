import Image from "next/image";
import { nftList } from "../lib/nfts"
import styles from '../styles/components/nfts.module.sass'


export default function Feed() {

  return (
    <>
      <h2>My NFTs</h2>
      <ul className={styles.nfts}>
        {nftList.map((nft) => (
          <li key={nft.id}>
            <a key={nft.id} className={styles.nft} href={`/nft/${nft.slug}`}>
              {/*nft media*/}
              <div className={styles.media}>
                <Image src={nft.url} layout="fixed" width="100" height="100" alt={nft.name} />
              </div>
              <div className={styles.name}>
                <p className={styles.subtitle}>
                  Anarchist #{nft.id}
                </p>
                <h2>{nft.name}</h2>
              </div>
              <div className={styles.status}>
                <p className="clean">
                  Purchased: {nft.purchased}<br/>
                  Staked: {nft.staked.date}<br/>
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}