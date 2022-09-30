// state
import { wrapper } from '../store/store'
// components
import Layout from './_layout'
// style
import '../styles/globals.sass'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)