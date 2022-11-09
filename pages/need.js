import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchist DAO - Video: They Need Us</title>
      </Head>
      <Interface page="need" />
    </>
  )
}

export default Index