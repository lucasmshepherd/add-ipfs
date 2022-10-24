import React from 'react'
import styles from '../styles/components/donations.module.sass'

export default function Donater() {
  let accent = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.96 3.72"><path d="M54.96,2.98h-15.7v.74h15.7v-.74Z"/><path d="M35.33,2.98H0v.74H35.33v-.74Z"/><path d="M54.95,1.48H0v.74H54.95v-.74Z"/><path d="M54.96,0H23.56V.74h31.4V0Z"/><path d="M19.63,0h-3.92V.74h3.92V0Z"/><path d="M11.78,0h-3.92V.74h3.92V0Z"/><path d="M3.92,0H0V.74H3.92V0Z"/></svg>)

  return (
    <>
      <div id="donation">
        <form className={styles.form}>
            <h3>How to Donate</h3>
            <p>Connect your wallet and enter the amount of ETH you would like to donate.</p>
            <div className={styles.status} id="status"></div>
            <label>pledge_amount</label>
            <input id="Amount" type="number" name="amount" placeholder="Enter Amount" className="eth-input"></input>

            <label>note_content</label>
            <textarea rows="4" name="notes" placeholder="Optional Message"></textarea>

            <button type="submit" className="button-mono">{accent}Pledge Donation</button>
            
        </form>
      </div>
    </>
  )
}