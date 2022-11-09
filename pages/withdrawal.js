import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchist DAO - Withdrawal</title>
      </Head>
      <Interface page="withdrawal" />
    </>
  )
}

export default Index