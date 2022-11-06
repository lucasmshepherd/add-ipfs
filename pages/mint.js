import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchy dApp - NFT Minting</title>
      </Head>
      <Interface page="mint" />
    </>
  )
}

export default Index