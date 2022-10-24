import Image from 'next/image'
import styles from '../styles/components/page.module.sass'
import Beznos from '../public/assets/images/beznos.jpg'

export default function Manifesto(props) {
  return (
    <>
      <div className={styles.hoodiebg}><div className={styles.bgglitch}>&nbsp;</div></div>
      <div className={styles.manifesto}>
        <h2 className={styles.title}>Anarchy</h2>
        <p className={styles.subtitle}>{"an ¬ ar ¬ chy  |  ˈa-nər-kē , -ˌnär-"}</p>
        <hr className={styles.divider} />
        <ul className={styles.definitions}>
          <li>Absence of government</li>
          <li>A state of lawlessness or political disorder due to the absence of governmental authority, city&apos;s descent into anarchy</li>
          <li>A utopian society of individuals who enjoy complete freedom without government</li>
          <li>Absence or denial of any authority or established order anarchy prevailed in the war zone</li>
          <li>Absence of order: DISORDER - not manicured plots but wild anarchy of nature - Israel Shenker</li>
        </ul>
      </div>
      <div className={styles.split}>
        <Image src={Beznos}  layout="fixed" priority="true" alt="Beznos" width="468" height="946" />
        <div className={styles.content}>
          <h3>Manifesto</h3>

          <p>How did we get here?  Many years of government abuse trickling down to the people. We must bear the brunt of the financial follies created intentionally and unintentionally.</p>

          <p>The most recent of these follies stems from the COVID-19 pandemic that forced you and your loved ones inside, unable to develop financial stability to provide for yourself or your family.</p>

          <p>The government stood idly by while millions of hardworking individuals suffered.</p>
          
          <p><b>All the while, the rich got richer.</b></p>

          <blockquote>Billionaires got <span>54% richer</span> during pandemic, sparking calls for &apos;wealth tax&apos;.<hr/>The world&apos;s <i>2,365 billionaires</i> enjoyed a <span>$4 trillion</span> boost to their fortunes the past 12 months, even as poverty surged.</blockquote>
        </div>
      </div>
      <div className={styles.manifoot}>
        <p>These billionaires could care less about you; their bottom line is their only concern; they will outsource your work to the lowest bidder, making your jobs obsolete.</p> 

        <p>Why can&apos;t Apple be manufactured in the US? Simple, it isn&apos;t profitable. &quot;LEARN TO CODE,&quot; they said. Let&apos;s learn to produce our form of currency that true believers have faith in.</p> 

        <p>Let us rise above the financial norms and standards set since childhood and break free from the chains of fiat currency. This movement is worldwide; we can shape our future for the betterment of society.</p>
        
        <blockquote>We believe that there is a path forward. It requires us ALL to cause a little bit of anarchy. We must be vigilant in our mission; we must trust the process.<br/><br/>Join our DAO. We would love to hear from you.</blockquote>
        
        <h3 className="glitchme" data-text="Anarchist Development DAO">Anarchist Development DAO</h3>
        
        <p><i>The Anarchist Development DAO is here to accelerate the creation of a more decentralized society through direct fundraising and activism.</i></p>

        <p>This is a new age. The State has failed. Corruption, violence, and oppression run rampant across the globe, from fascist dictatorships to so-called democracies. It is time to build something new…and now we finally have the right tools.</p>

        <p>Where has centralization gotten us? To the edge of planetary oblivion. Anarchy speaks to the piece of us that wants to stand up against stagnant and tyrannical governments—and stand apart from the mainstream narratives of society.</p>

        <p>The philosophy of anarchy has nested in the shadows for generations, but both proponents and potential anarchists alike lacked a true organizing and actionable process on a global scale—until now.</p>

        <p>Decentralized Autonomous Organizations, DAOs, are already emulating a model of the anarchist philosophy. The Anarchist Development DAO brings together like-minded individuals who are using the technology of DeFi and crypto to escape institutional capture and implement real-world change.</p>

        <h3 className="glitchme" data-text="The goals are radically simple:">The goals are radically simple:</h3>

        <p>Generate and direct funding for oppressed, marginalized, or otherwise important movements or causes without the censorship of any central authority.</p>

        <p>Educate and unite sovereign individuals in solidarity with causes around the world.</p>

        <p>Build out the toolset of Web3, from cryptocurrencies & blockchain to smart contracts and communal governance, and provide an alternative to institutional forces.</p>

        <h3 className="glitchme" data-text="Forget Occupy Wall Street. We are here to Occupy the Blockchain.">Forget Occupy Wall Street. We are here to Occupy the Blockchain.</h3>

        <p>Already traders within the DeFi space already practice an unrealized form of Anarchism by defying the supremacy of archaic fiat currencies. The Anarchist Development DAO is ready to harness and hone this instinct and to fulfill the promise of ultimate freedom that Bitcoin and crypto first unleashed upon the world.</p>

        <p>Enter the Anarchist Development Protocol protocol: the backbone of our cause. DAO members can submit proposals to fund new technology, investigations, protest movements, or other worthy causes in the pursuit of a more decentralized and healthy society.</p>

        <p>While the DAO will eventually become <i>completely autonomous</i> in all aspects of governance and decision-making, the core ADD development team believes that real change starts with individuals taking action. This team will establish momentum, impact, and initial revenue streams to fund the DAO treasury in conjunction with community proposals.</p>

        <h3 className="glitchme" data-text="Time to Begin">Time to Begin</h3>

        <p>The DAO encourages all to do their own research. Join us if you are genuinely down with the mission of breaking free from centralized entities such as banks, state-sponsored violence, and monopolistic corporations.</p>
 
        <p>From those who have been waiting their entire lives, to the skeptics who doubt it would ever be possible…</p>
        
        <p>Important ideas persist across time and anarchy’s time has finally come.</p>
        
        <p>While it may sometimes seem as if our world is ending, through collective effort we can redefine this moment as a new beginning.</p>
        <br/>
        <p><i>Let Anarchy Reign!</i></p>

      </div>
    </>
  )
}