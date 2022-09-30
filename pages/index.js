import Head from 'next/head'
import { useEffect } from 'react'
// state
import { loginUser } from '../store/users/action'
import { wrapper } from '../store/store'
// components
import Interface from '../components/interface.js'
import Splash from '../components/splash.js'
// style
import styles from '../styles/pages/index.module.sass'

const Index = (props) => {
  useEffect(() => {
    if (!document.body.classList.contains('entered')) {
      document.body.classList.add('entered');
    }
  }, []);
  return (
    <>
      <Head>
        <title>Anarchist Development DAO</title>
        <meta name="description" content="Let anarchy reign." />
      </Head>
      <Splash />
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(loginUser())
})

export default Index