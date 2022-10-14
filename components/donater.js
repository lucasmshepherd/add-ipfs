import React from 'react'

import styles from '../styles/components/donations.module.sass'

export default function Donater() {
  return (
    <>
      <form className={styles.form}>
        <p>
          <label>ETH Donation Amount</label>
          <input type="text" name="amount" placeholder="0"></input>
        </p>
        <p>
          <label>Donation Notes</label>
          <textarea rows="4" name="notes" placeholder="Optional Message"></textarea>
        </p>
        <button type="submit" className="button">Pledge Donation</button>
      </form>
    </>
  )
}