import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchy dApp - My NFTs</title>
      </Head>
      <Interface page="nfts" />
    </>
  )
}

export default Index