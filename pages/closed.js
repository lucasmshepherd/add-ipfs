import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchy dApp - Closed Proposals</title>
      </Head>
      <Interface page="closed" />
    </>
  )
}

export default Index