import React from 'react'
//import Link from 'next/link'
// state
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../store/users/action'
//style
import styles from '../styles/components/header.module.sass'

export default function Balance() {
  let balance = "Connect"
  const dispatch = useDispatch()
  const connected = useSelector((state) => state.users.connected)

  

  function loginUserNow() {
    dispatch(loginUser());
  }

  if (connected == "true") {
    balance = "1,078,234,519.34"
  }

  return (
    <> 
      <div data-connected={connected} onClick={loginUserNow} className={styles.balance}>
        <span>{balance}</span>
      </div>
    </>
  )
}