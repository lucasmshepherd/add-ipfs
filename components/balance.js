import React from 'react'
//import Link from 'next/link'
// state
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, logoutUser } from '../store/users/action'
//style
import styles from '../styles/components/header.module.sass'

export default function Balance() {
  let balance = "Connect"
  let logged
  const dispatch = useDispatch()
  const connected = useSelector((state) => state.users.connected)

  function loginUserNow() {
    dispatch(loginUser());
  }

  function logoutUserNow() {
    dispatch(logoutUser());
  }

  if (connected == "true") {
    logged = "true"
    balance = "1,078,234,519.34"
  }

  return (
    <> 
      <div data-connected={connected} onClick={logged ? logoutUserNow : loginUserNow} className={styles.balance}>
        <span>{balance}</span>
      </div>
    </>
  )
}