import Image from 'next/image'
import styles from '../styles/components/page.module.sass'
import Beznos from '../public/assets/images/beznos.jpg'

export default function Page(props) {
  return (
    <>
      <div className={styles.hoodiebg}></div>
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
        
        <a className="glitchme" data-text="// learn more \\" href="https://anarchistdevelopmentdao.gitbook.io/anarchist-development-dao/" rel="noreferrer" target="_blank">/ learn more \</a>
      </div>
    </>
  )
}