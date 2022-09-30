import React, { useCallback, useRef, useState, useEffect } from "react"
import Image from 'next/image'
import Link from 'next/link'
// state
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../store/users/action'
// components
import Container from './container.js'
import Balance from './balance.js'
import ReactAudioPlayer from 'react-audio-player';
// style
import styles from '../styles/components/header.module.sass'
// media
import Logo from '../public/assets/images/logo.svg'
import LogoIcon from '../public/assets/images/logo-icon.svg'
import LogoIconHighlight from '../public/assets/images/logo-icon-highlight-01.svg'

export default function Header() {
  // state
  const dispatch = useDispatch();
  const connected = useSelector((state) => state.users.connected);

  function loginUserNow() {
    dispatch(loginUser());
  };
 
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
    setAudioIsPlaying(true);
  }
  
  function handlePause() {
    audioFile.pause();
    setAudioIsPlaying(false);

    // stop the animation
    window.cancelAnimationFrame(audioAnimationFrame);
    setAudioAnimationFrame(null);
  }

  function handleVisualizerStart() {
    // display settings
    let repeat_char = '/';
    const filler_char = '-';
    const char_across = 20;

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
            let levelFloor = Math.floor(level / 14); // lower number equals great amplitude
            if (levelFloor > char_across) { levelFloor = char_across; } // ensure it doesn't exceed our limit
            
            let repeatChars = repeat_char.repeat(levelFloor);
            if (repeatChars < 0) { repeatChars = 0; }
            
            const REMAINING_CHARS = char_across - levelFloor;
            let fillerChars = filler_char.repeat(REMAINING_CHARS);
            
            ascii_visualizer.innerHTML += `<div class="visualizer--row"><span style="color: #8dc927;">${repeatChars}</span><span style="color:#767676">${fillerChars}</span></div>`
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
      <header className={styles.header} data-connected={connected}>
        <div className={styles.bar}>
          <div className={styles.tab}>
            <svg className={styles.tabg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.17 50.89"><g id="Layer_1-2"><path d="M255.17,0c-4.01,0-9.62,2.35-12.44,5.21l-40,40.47c-2.84,2.87-8.44,5.21-12.44,5.21H64.88c-4.01,0-9.61-2.35-12.44-5.21L12.44,5.21C9.61,2.34,4,0,0,0H255.17Z"/></g></svg>
            <a onClick={ audioIsPlaying ? handlePause : handlePlay } className={styles.icon}>
              <Image layout="fixed" src={ audioIsPlaying ? LogoIconHighlight : LogoIcon } priority="true" alt="ADD" width="48" height="48" />
            </a>
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
            </h1>
            <div>
              {/*{audioIsPlaying ? "[stop music]" : "[play music]" }*/}
            </div>
            <Balance />
          </div>
        </Container>
        <Link href="/welcome"><div className="button close-splash" onClick={handlePlay}>Press Enter</div></Link>
      </header>
    </>
  )
}