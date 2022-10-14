import React from 'react'
// state
import { useSelector, useDispatch } from 'react-redux'
import { playMusic, stopMusic } from '../store/music/action'
//style
import styles from '../styles/components/visualizer.module.sass'

export default function Visualizer() {
  let audioPlaying
  const dispatch = useDispatch()
  const playing = useSelector((state) => state.music.playing)

  function playMusicNow() {
    dispatch(playMusic());
  }

  function stopMusicNow() {
    dispatch(stopMusic());
  }

  if (playing == "true") {
    audioPlaying = "true"
  }

  return (
    <> 
      <div data-playing={playing}>
        <div id="visualizer" className={styles.visualizer} onClick={audioPlaying ? stopMusicNow : playMusicNow}>
          <div className="visualizer--click-target">
            <div className="visualizer---row-container">
              {
                [...Array(3),]
                .map((value, index) => {
                  return (
                    <div className='visualizer--row' key={index}>
                      <span style={{ color:'#767676'}}>----------------------------------------</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}