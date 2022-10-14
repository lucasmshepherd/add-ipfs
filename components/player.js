import React, { useState, useEffect } from "react"
// state
import { useSelector } from 'react-redux'
// style
//import styles from '../styles/components/player.module.sass'

export default function Player() {

  return (
    <> 
        <audio id="music" preload="auto" controls>
          <source src="/assets/audio/delec.ogg" type="audio/ogg"/>
          <source src="/assets/audio/delec.aac" type="audio/aac"/>
          <source src="/assets/audio/delec.mp3" type="audio/mpeg"/>
          <source src="/assets/audio/delec.m4a" type="audio/mp4"/>
          Your browser does not support the audio tag.
        </audio>
    </>
  )
}