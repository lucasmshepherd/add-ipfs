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
          <p>There is no central authority.</p>
          <p>$ADD tokenholders are the collective authority whom make decisions for the DAO through voting. </p>
          <h3>History</h3>
          <p><big><b>The Anarchist Development DAO was founded by a small group of individuals who believe in a more decentralized society.</b></big></p>
          <p>Our core principles are trust, free and open markets, private ownership of property and capital, and the complete abolishment of legacy financial systems.</p>
          <p>The Anarchist Development DAO and its contributors have helped execute on this ideology and further the cause of making our mission, not just an idea, but a reality.</p>
          <p>Every individual who has contributed to the Anarchist Development DAO has dedicated most of their professional lives to the advancement of decentralized technologies, activist movements, cryptocurrency, software development or finance.</p>

          <h3>dApp Support</h3>
            <p>x2 dev_mngr</p>
            <p>x1 lead_dev / artist <span className="note">doxxed</span></p>
            <p>x1 blockchain_integration_engineer</p>
            <p>x1 smart_contract_engineer</p>
            <p>x2 smart_contract_dev</p>
            <p>x1 w3js_engineer</p>
        </div>
      </div>
    </>
  )
}