import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Howl } from 'howler'
// components
import Source from '../components/source.js'
import Interface from '../components/interface.js'
import Delay from '../components/delay.js'
import Widget from '../components/widget.js'
// dApp
import {  useWeb3React } from "@web3-react/core"

const Index = (props) => {
  const {
    active
  } = useWeb3React();

  const router = useRouter()

  const [audio, setAudio] = useState('null')

  useEffect(() => {
    setAudio([    
      '/assets/audio/button-glitch-2.mp3', 
      '/assets/audio/button-glitch-2.m4a', 
      '/assets/audio/button-glitch-2.ogg', 
      '/assets/audio/button-glitch-2.aac'
    ])
  },[])

  const soundEffect = () => {
    var sound = new Howl({
      src: audio,
      autoplay: true,
      loop: false,
      volume: 0.5
    })
    sound.play()
  }

  return (
    <>
      <canvas id="canvas" className="canvas2"></canvas>
      <Interface page="transition" />
      { active &&
        <Delay waitBeforeShow={2000}>
          <Source />
        </Delay>
      }
      <Delay waitBeforeShow={3000}>
        { active ?
          <div className="granted" onClick={() => router.push('/deposit')}>
            <Widget type="granted" title="access_verify_" icon="globe" scroll="true">
              <span className="glitchme" data-text="Access Granted">Access Granted</span>
              <b>Freedom awaits you...</b>
              <div className="button-mono" onClick={soundEffect}>Enter</div>
            </Widget>
          </div>
        :
          <div className="granted" onClick={() => router.push('/welcome')}>
            <Widget type="granted" title="access_verify_" icon="globe" scroll="true">
              <span className="glitchme" data-text="Access Denied"><i>Access Denied</i></span>
              <b>Please connect a wallet...</b>
              <div className="button-mono btn-warning">Go Back</div>
            </Widget>
          </div>
        }
      </Delay>
    </>
  )
}

export default Index