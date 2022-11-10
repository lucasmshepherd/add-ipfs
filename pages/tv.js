import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchist DAO - Vision</title>
      </Head>
      <Interface page="tv" />
    </>
  )
}

export default Index