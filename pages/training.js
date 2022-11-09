import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchist DAO - University</title>
      </Head>
      <Interface page="training" />
    </>
  )
}

export default Index