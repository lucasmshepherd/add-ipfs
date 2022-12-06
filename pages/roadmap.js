import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchist DAO - Roadmap</title>
      </Head>
      <Interface page="roadmap" />
    </>
  )
}

export default Index