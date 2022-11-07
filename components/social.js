import React from 'react';
import $ from 'jquery';
import Image from 'next/image'
import styles from '../styles/components/social.module.sass'
import Icon1 from '../public/assets/images/telegram.svg'
import Icon2 from '../public/assets/images/email.svg'
import Icon3 from '../public/assets/images/twitter.svg'
import Icon4 from '../public/assets/images/discord.svg'
import IconBG from '../public/assets/images/shape-bg.svg'

export default class Social extends React.Component {
  
  componentDidMount() {
    $('[seffect="true"]').on('mousedown', function () {     
      playMechGlitch();
    })
    function playMechGlitch () {
      $('#mech-glitch')[0].volume = 0.3;
      $('#mech-glitch')[0].load();
      $('#mech-glitch')[0].play();
    }
  }

  render () {
    return (
      <> 
        <div className={styles.wrapper}>
        <audio id="mech-glitch" preload="auto">
          <source src="/assets/audio/quick-glitch-2.ogg" type="audio/ogg"/>
          <source src="/assets/audio/quick-glitch-2.aac" type="audio/aac"/>
          <source src="/assets/audio/quick-glitch-2.mp3" type="audio/mpeg"/>
          <source src="/assets/audio/quick-glitch-2.m4a" type="audio/mp4"/>
          Your browser does not support the audio tag.
        </audio>
          <div className={styles.social}>
            <a href="mailto:info@fundanarchy.io" rel="noreferrer" seffect="true" className={styles.link}>
              <Image layout="fixed" src={Icon2} priority="true" alt="Reddit" width="100" height="100" />
              <Image layout="fixed" src={IconBG} priority="true" alt="BG" width="100" height="100" />
            </a>
            <a href="https://t.me/anarchistdevelopmentdao" target="_blank" rel="noreferrer" seffect="true" className={styles.link}>
              <Image layout="fixed" src={Icon1} priority="true" alt="Telegram" width="100" height="100" />
              <Image layout="fixed" src={IconBG} priority="true" alt="BG" width="100" height="100" />
            </a>
            <a href="https://twitter.com/fundanarchy" target="_blank" rel="noreferrer" seffect="true" className={styles.link}>
              <Image layout="fixed" src={Icon3} priority="true" alt="Twitter" width="100" height="100" />
              <Image layout="fixed" src={IconBG} priority="true" alt="BG" width="100" height="100" />
            </a>
            <a href="https://discord.gg/anarchist-development-dao" target="_blank" rel="noreferrer" seffect="true" className={styles.link}>
              <Image layout="fixed" src={Icon4} priority="true" alt="Discord" width="100" height="100" />
              <Image layout="fixed" src={IconBG} priority="true" alt="BG" width="100" height="100" />
            </a>
          </div>
        </div>
      </>
    )
  }
}