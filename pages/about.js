import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchist DAO - About the Crew</title>
      </Head>
      <Interface page="about" />
    </>
  )
}

export default Index