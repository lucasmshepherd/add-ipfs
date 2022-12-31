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
          <p>$ADD tokenholders are the collective authority whom make decisions for the DAO <strike>through voting</strike>. </p>
          <h3>History</h3>
          <p><big><b>The Anarchist Development DAO was founded by one guy who believes in a more decentralized society because DYOR is transparency.</b></big></p>
          <p>Our core principles are <strike>trust</strike>, free and open markets, private ownership of property and capital, and the complete abolishment of legacy financial systems.</p>
          <p>The Anarchist Development DAO and its contributors alone have helped execute on this ideology and further the cause of making our mission not just an idea but a reality when I'm not too busy to finish the project.</p>
          <p>Every individual who has contributed to the Anarchist Development DAO has dedicated most of their professional lives to the advancement of decentralized technologies, activist movements, cryptocurrency, software development or finance which is why I feel terrible for ghosting the entire community.</p>

          <h3>dApp Support</h3>
            <p>x1 Dev Mngr: Prime <span className="note">doxxed</span></p>
        </div>
      </div>
    </>
  )
}