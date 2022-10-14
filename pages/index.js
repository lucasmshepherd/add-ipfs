import Head from 'next/head'
// components
//import Interface from '../components/interface.js'
import Splash from '../components/splash.js'

const Index = (props) => {
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

export default Index