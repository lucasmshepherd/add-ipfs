//styles
import styles from '../styles/components/donations.module.sass'
// media

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
            <p><b>Anarchist Prime</b> / dev_mngr / ceo+cmo roles</p>
            <p><b>Anarchist Kenji</b> / dev_mngr / coo+cfo roles</p>
            <p><b>Anarchist Dream</b> / lead_dev / cto+cio roles <span className=""></span></p>
            <p>x1 blockchain_integration_engineer</p>
            <p>x1 smart_contract_engineer</p>
            <p>x2 smart_contract_dev</p>
            <p>x1 w3js_engineer</p>
            <h3>Doxxed Lead Developer</h3>
            <div className="doxxed">
              <p>Lucas M. Shepherd / in<a href="#" rel="noreferrer" target="_blank">@lucasmshepherd</a> / tw+tg<a href="#" rel="noreferrer" target="_blank">@leoblackdotcom</a></p>
              <p>I have been design and developing complex web systems on record since 2009.  I have been building web apps and websites since I was 11 years old.  I have worked as a contractor through online markets including Upwork (formerly oDesk), Freelancer, Elance (Merged with oDesk) and Gun with consistent feedback and over 90% satisfaction rate.</p>
              <p>Why have I remained a contractor for so long?</p>
              <p><i>I can get higher hourly rates by working in a special forces role and I get to pick which projects I work on.  I have always strived to remain on the bleeding edge of technological evolution including ipfs, blockchain and web3.</i></p>
              <h3>Notable clients include...</h3>
              <p><b>Intel + NYC3</b><br/>Worked on cyber security application design and development / js / 2022</p>
              <p><b>Adobe</b><br/>Illustrator page dev & page manager / creator of Beebly pseudo brand / js / 2021</p>
              <p><b>EZ-Pass</b><br/>Designed and developed the current Ohio Turnpike (OTIC) EZ-Pass application which includes communication with physical transponders / js php / 2020</p>
              <p><b>Staples</b><br/>Developed the Staples Connection site and designed the database architecture for splitting consumers, businesses and b2b functionality / js php headless / 2019 2020 </p>
            </div>
        </div>
      </div>
    </>
  )
}