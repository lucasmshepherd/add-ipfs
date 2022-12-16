import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchist DAO - Proposals</title>
      </Head>
      <Interface page="adprops" />
    </>
  )
}

export default Index