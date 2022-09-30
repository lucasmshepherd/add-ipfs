import Head from 'next/head'
import {useEffect} from 'react'
import { loginUser } from '../store/users/action'
import { wrapper } from '../store/store'
import Interface from '../components/interface.js'

const Welcome = (props) => {
  useEffect(() => {
    if (document.body.classList.contains('entered')) {
      document.body.classList.remove('entered');
    }
  }, []);
  return (
    <>
      <Head>
        <title>Anarchist Development DAO</title>
      </Head>
      <Interface page="welcome" />
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(loginUser())
})

export default Welcome