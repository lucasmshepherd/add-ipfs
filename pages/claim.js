import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchy dApp - Claim Rewards</title>
      </Head>
      <Interface page="claim" />
    </>
  )
}

export default Index