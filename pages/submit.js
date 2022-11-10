import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchist DAO - Submit a Proposal</title>
      </Head>
      <Interface page="submit" />
    </>
  )
}

export default Index