import Head from 'next/head.js'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchist DAO - Admin Panel</title>
      </Head>
      <Interface page="admin" />
    </>
  )
}

export default Index