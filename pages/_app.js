import React, { useEffect, useState } from 'react'
// state
import { wrapper } from '../store/store'
// components
import Layout from './_layout'
import Loading from '../components/loading'
// style
import '../styles/globals.sass'
// Web 3 React For Wallet Connection
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers"
import '../styles/integration.sass'

export const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider)
  library.pollingInterval = 8000 // Frequency provider is polling
  return library
};

function MyApp({ Component, pageProps }) {
  const [isLoading, setLoading] = useState(false)

  // This will run one time after the component mounts
  useEffect(() => {
    const onPageLoad = () => {
      setLoading(true)
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
        <Web3ReactProvider getLibrary={getLibrary}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Web3ReactProvider>
      </>
    )
}

export default wrapper.withRedux(MyApp)