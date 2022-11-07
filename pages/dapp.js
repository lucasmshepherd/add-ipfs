import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchy dApp</title>
      </Head>
      <Interface page="dapp" />
    </>
  )
}

export default Index