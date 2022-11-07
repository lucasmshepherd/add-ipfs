import Image from 'next/image'
import Link from 'next/link'
// state
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch} from 'react-redux'
import { playMusic, stopMusic } from '../store/music/action'
// components
import Container from './container.js'
import Balance from './balance.js'
// style
import styles from '../styles/components/header.module.sass'
// media
import Logo from '../public/assets/images/logo.svg'
import LogoIcon from '../public/assets/images/logo-icon.svg'
//import LogoIconHighlight from '../public/assets/images/logo-icon-highlight-01.svg'
import AudioOnIcon from '../public/assets/images/audio-on-icon.svg'
import AudioOffIcon from '../public/assets/images/audio-off-icon.svg'
//Account Address
import { useWeb3React } from "@web3-react/core";

export default function Header() {
  const {
    account,
    active
  } = useWeb3React();

  let audioIconSource = AudioOffIcon
  const dispatch = useDispatch()
  // state
  const playing = useSelector((state) => state.music.playing)

  if(playing == "true") {
    audioIconSource = AudioOnIcon
    audioPlaying = "true"
  } else {
    audioIconSource = AudioOffIcon
  }

  // audio
  const isFirefox = typeof InstallTrigger !== 'undefined';
  const AUDIO_SRC = "/assets/audio/delec.mp3";
  const [audioFile, setAudioFile] = useState(null);
  const [audioIsLoading, setAudioIsLoading] = useState(true);
  const [audioIsPlaying, setAudioIsPlaying] = useState(false);
  const [audioAnimationFrame, setAudioAnimationFrame] = useState(null);

  function handlePlay() {
    // if audio hasn't been started
    if (!audioAnimationFrame) {
      handleVisualizerStart();
    }
    // any time the play button is hit
    audioFile.play();
    dispatch(playMusic());
    setAudioIsPlaying(true);
  }
  
  function handlePause() {
    audioFile.pause();
    dispatch(stopMusic());
    setAudioIsPlaying(false);
    // stop the animation
    window.cancelAnimationFrame(audioAnimationFrame);
    setAudioAnimationFrame(null);
  }

  function handleVisualizerStart() {
    // display settings
    let repeat_char = '/';
    const filler_char = '-';
    const char_across = 25;

    // get the stream from the audio file
    if(isFirefox){
      var audioStream = audioFile.mozCaptureStream();
    } else {
      var audioStream = audioFile.captureStream();
    }
    
    // forked web audio context
    let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // different audio nodes
    let analyser = audioCtx.createAnalyser();
    analyser.minDecibels = -70;
    analyser.maxDecibels = -3;
    analyser.smoothingTimeConstant = 0.8;
    let distortion = audioCtx.createWaveShaper();
    let gainNode = audioCtx.createGain();
    let biquadFilter = audioCtx.createBiquadFilter();
    let convolver = audioCtx.createConvolver();
    
    const source = audioCtx.createMediaStreamSource(audioStream);
    source.connect(analyser);
    analyser.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(convolver);
    convolver.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    visualize();
    
    function visualize() {
      analyser.fftSize = 128;
      let bufferLength = analyser.frequencyBinCount;
      let dataArray = new Uint8Array(bufferLength);
      let dataArray2 = new Uint8Array([dataArray[3],dataArray[16],dataArray[27]]);

      //Update the UI
      const draw = function () {
        setAudioAnimationFrame(requestAnimationFrame(draw));
        analyser.getByteFrequencyData(dataArray2);
        let ascii_visualizer = document.querySelector('.visualizer---row-container');

        if (ascii_visualizer) {
          ascii_visualizer.innerHTML = '';

          // where the magic happens
          dataArray2.forEach((level, index) => {
            let levelFloor = Math.floor(level / 10); // lower number equals great amplitude
            if (levelFloor > char_across) { levelFloor = char_across; } // ensure it doesn't exceed our limit
            
            let repeatChars = repeat_char.repeat(levelFloor);
            if (repeatChars < 0) { repeatChars = 0; }
            
            const REMAINING_CHARS = char_across - levelFloor;
            let fillerChars = filler_char.repeat(REMAINING_CHARS);
            
            ascii_visualizer.innerHTML += `<div class="visualizer--row"><span style="color: #47731b ">${repeatChars}</span><span>${fillerChars}</span></div>`
          });
        }
      };
        
      draw();
    }
  }

  useEffect(() => {
    setAudioFile(new Audio(AUDIO_SRC));
  }, [])

  useEffect(() => {
    setAudioIsLoading(false);
  }, [audioFile])

  return (
    <> 
      {/*<Player />*/}
      <header className={styles.header} data-connected={active}>
        <div className={styles.bar}>
          { active &&
            <span className={styles.identity}>{account}</span>
          }
          <div className={styles.tab}>
            <svg className={styles.tabg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.17 50.89"><g id="Layer_1-2"><path d="M255.17,0c-4.01,0-9.62,2.35-12.44,5.21l-40,40.47c-2.84,2.87-8.44,5.21-12.44,5.21H64.88c-4.01,0-9.61-2.35-12.44-5.21L12.44,5.21C9.61,2.34,4,0,0,0H255.17Z"/></g></svg>
            <a className={styles.mobicon}>
              OPEN<br/>MENU
            </a>
            <Link href="/"> 
              <a className={styles.icon}>
                <Image layout="fixed" src={LogoIcon} priority="true" alt="ADD" width="48" height="48" />
              </a> 
            </Link>
          </div>
        </div>
        <Container>
          <div className={styles.addbar}>
            <h1 className={styles.logo}>
            <Link href="/welcome"> 
              <a>
                <Image layout="fixed" src={Logo} priority="true" alt="Anarchist Development DAO" width="140" />
              </a>
            </Link>
            <div id="audio" className={styles.audio} onClick={audioIsPlaying ? handlePause: handlePlay }>
              <Image layout="fixed" src={audioIconSource} priority="true" alt="ADD" width="14" height="14" />
              <div id="visualizer" className={styles.visualizer} data-playing={playing}>
                <div className={styles.vwrapper}>
                  <div className="visualizer---row-container">
                    {
                      [...Array(3),]
                      .map((value, index) => {
                        return (
                          <div className='visualizer--row' key={index}>
                            <span>-------------------------</span>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
            </h1>
            <Balance />
          </div>
        </Container>
      </header>
    </>
  )
}