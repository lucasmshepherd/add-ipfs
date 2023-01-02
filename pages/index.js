import Head from 'next/head'
// components
import Interface from '../components/interface.js'
import Splash from '../components/splash.js'

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