import React, { useCallback, useRef, useState, useEffect } from "react"
import styles from '../styles/components/visualizer.module.sass'


export default function Visualizer() {

  return (
    <>
      <div id="visualizer" className={styles.visualizer}>


          <div className="visualizer--click-target">
            <div className="visualizer---row-container">
              {
                [...Array(3),]
                .map((value, index) => {
                  return (
                    <div className='visualizer--row' key={index}>
                      <span style={{ color:'#767676'}}>--------------------</span>
                    </div>
                  )
                })
              }
            </div>
          </div>

      </div>
    </>
  )
}