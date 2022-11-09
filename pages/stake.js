import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchy dApp - Staking</title>
      </Head>
      <Interface page="stake" />
    </>
  )
}

export default Index