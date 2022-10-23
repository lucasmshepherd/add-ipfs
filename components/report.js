import React from 'react'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'

import styles from '../styles/components/report.module.sass'

export default function Report(props) {
  let addPrice, apRate, totalStaked = 0
  let lock = (<svg className="icon-lock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><rect x="15" y="60" width="15" height="75"/><rect x="15" y="120" width="105" height="15"/><rect x="105" y="60" width="15" height="75"/><rect x="15" y="45.1" width="105" height="14.9"/><rect x="30" y="15" width="15" height="30"/><rect x="90" y="15" width="15" height="30"/><rect x="44.82" width="45.18" height="15"/><rect x="60" y="75" width="15" height="30"/></svg>)
  let page = props.page
  const connected = useSelector((state) => state.users.connected)
  if (connected == "true" ) {
    addPrice = "$0.0000000382"
    apRate = "7.1%"
    totalStaked = "23,698,826,140,503"
  }
  return (
    <> 
      <div className={styles.table}>
            {(() => {
              if ( page == "stake" || page == "deposit" || page == "withdrawal" || page == "claim" ) {
                return (
                  <>
                    <div className={styles.row}>
                      <div className={styles.cell}><h4>ADD_price</h4><span>{connected == "true" ? addPrice : lock}</span></div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.cell}><h4>APR</h4><span>{connected == "true" ? apRate : lock}</span></div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.cell}><h4>total_ADD_staked</h4><span>{connected == "true" ? totalStaked : lock}</span></div>
                    </div>
                  </>
                )
              }
            })()}
        { !page == "stake" &&
          <>
            <div className={styles.row}>
              <div className={styles.cell}>days since project launch</div>
              <div className={styles.cell}>0</div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>projects funded in ETH</div>
              <div className={styles.cell}>0</div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>citizen holder wallet count</div>
              <div className={styles.cell}>0</div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>marketcap</div>
              <div className={styles.cell}>{lock}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>total value locked</div>
              <div className={styles.cell}>{lock}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>total ETH sent</div>
              <div className={styles.cell}>{lock}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>treasury balance</div>
              <div className={styles.cell}>{lock}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>ADD burned</div>
              <div className={styles.cell}>{lock}</div>
            </div>
          </>
        }
      </div>
    </>
  )
}