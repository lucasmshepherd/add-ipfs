import React from 'react'
import styles from '../styles/components/donations.module.sass'

export default function Donater() {
  let accent = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.96 3.72"><path d="M54.96,2.98h-15.7v.74h15.7v-.74Z"/><path d="M35.33,2.98H0v.74H35.33v-.74Z"/><path d="M54.95,1.48H0v.74H54.95v-.74Z"/><path d="M54.96,0H23.56V.74h31.4V0Z"/><path d="M19.63,0h-3.92V.74h3.92V0Z"/><path d="M11.78,0h-3.92V.74h3.92V0Z"/><path d="M3.92,0H0V.74H3.92V0Z"/></svg>)

  return (
    <>
      <form className={styles.form}>
          <h3>Withdrawal Staked ADD</h3>
          <p>WARNING: This will remove ADD from your staked ADD balance and extinguish a tiny fire in the heart of a budding Anarchist who may have a massive potential for mayhem.</p>
          <label>withdrawal_amount ( <a href="#">set to maximum</a> )</label>
          <input type="text" name="amount" placeholder="0.00 ADD" className="eth-input"></input>

        <button type="submit" className="button-mono push-right">{accent}Withdraw</button>
      </form>
    </>
  )
}