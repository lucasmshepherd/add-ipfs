import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchist DAO - Further the Cause</title>
      </Head>
      <Interface page="donate" />
    </>
  )
}

export default Index