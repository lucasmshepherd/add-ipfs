import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchy dApp - Stake ADD</title>
      </Head>
      <Interface page="deposit" />
    </>
  )
}

export default Index