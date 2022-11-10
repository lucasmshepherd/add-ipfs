import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchy dApp - Proposals</title>
      </Head>
      <Interface page="proposals" />
    </>
  )
}

export default Index