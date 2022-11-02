import Head from 'next/head'
import {useEffect} from 'react'
import Interface from '../components/interface.js'

const Index = (props) => {
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