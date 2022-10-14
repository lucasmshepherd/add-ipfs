import Head from 'next/head'
import {useEffect} from 'react'
import Interface from '../components/interface.js'

const Index = (props) => {
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

export default Index