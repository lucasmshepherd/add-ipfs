import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchy dApp - Pending Proposals</title>
      </Head>
      <Interface page="pending" />
    </>
  )
}

export default Index