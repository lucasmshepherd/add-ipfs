//styles
import styles from '../styles/components/donations.module.sass'

export default function Donations(props) {
  return (
    <>
      <div className={styles.aboutbg}><div className={styles.donatebgglitch}>&nbsp;</div></div>
      <div className={styles.donations}>
        <h2 className={styles.heading}>support</h2>
      </div>
      {/*<Image src={Banner} layout="responsive" priority="true" alt="Anarchist Computer Center" />*/}
      <div className={styles.sidebyside}>
        <div className={styles.content}>
          <h3>DAO Structure & Authority</h3>
          <p>There is no structure.</p>
          <h3>dApp Support</h3>
            <p>x1 Dev Mngr: Prime</p>
        </div>
      </div>
    </>
  )
}