import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchist DAO - Video: Freedom</title>
      </Head>
      <Interface page="freedom" />
    </>
  )
}

export default Index