import React, { useEffect, useState } from 'react'
// state
import { wrapper } from '../store/store'
// components
import Layout from './_layout'
import Loading from '../components/loading'
// style
import '../styles/globals.sass'

function MyApp({ Component, pageProps }) {
  const [isLoading, setLoading] = useState(false);


  // This will run one time after the component mounts
  useEffect(() => {
    const onPageLoad = () => {
      setLoading(true);
    }

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad()
    } else {
      window.addEventListener('load', onPageLoad)
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad)
    }
  }, [])

  if(!isLoading) 
    return <Loading />
  else
    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
}

export default wrapper.withRedux(MyApp)