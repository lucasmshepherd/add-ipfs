import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchist DAO - Manifesto</title>
      </Head>
      <Interface page="manifesto" />
    </>
  )
}

export default Index