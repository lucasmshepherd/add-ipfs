import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Howl } from 'howler'
import styles from '../styles/components/social.module.sass'
import Icon1 from '../public/assets/images/telegram.svg'
import Icon2 from '../public/assets/images/email.svg'
import Icon3 from '../public/assets/images/twitter.svg'
import Icon4 from '../public/assets/images/discord.svg'
import IconBG from '../public/assets/images/shape-bg.svg'

export default function Social(props){
  const [audio, setAudio] = useState('null')

  useEffect(() => {
    setAudio([    
      '/assets/audio/quick-glitch-2.mp3', 
      '/assets/audio/quick-glitch-2.m4a', 
      '/assets/audio/quick-glitch-2.ogg', 
      '/assets/audio/quick-glitch-2.aac'
    ])
  },[])
  
  const soundEffect = () => {
    var sound = new Howl({
      src: audio,
      autoplay: false,
      loop: false,
      volume: 0.3
    })
    sound.play()
  }


  return (
    <> 
      <div className={styles.wrapper}>
        <div className={styles.social}>
          <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x8fead6e1be5af7b5beda08688018d55079e6de35" rel="noreferrer" className={styles.link} onClick={soundEffect}>
            <Image layout="fixed" src={Icon2} priority="true" alt="Reddit" width="100" height="100" />
            <Image layout="fixed" src={IconBG} priority="true" alt="BG" width="100" height="100" />
          </a>
          <a href="https://t.me/fundanarchyportal" target="_blank" rel="noreferrer" className={styles.link} onClick={soundEffect}>
            <Image layout="fixed" src={Icon1} priority="true" alt="Telegram" width="100" height="100" />
            <Image layout="fixed" src={IconBG} priority="true" alt="BG" width="100" height="100" />
          </a>
          <a href="https://twitter.com/fundanarchy" target="_blank" rel="noreferrer" className={styles.link} onClick={soundEffect}>
            <Image layout="fixed" src={Icon3} priority="true" alt="Twitter" width="100" height="100" />
            <Image layout="fixed" src={IconBG} priority="true" alt="BG" width="100" height="100" />
          </a>
          <a href="https://discord.gg/anarchist-development-dao" target="_blank" rel="noreferrer" className={styles.link} onClick={soundEffect}>
            <Image layout="fixed" src={Icon4} priority="true" alt="Discord" width="100" height="100" />
            <Image layout="fixed" src={IconBG} priority="true" alt="BG" width="100" height="100" />
          </a>
        </div>
      </div>
    </>
  )

}