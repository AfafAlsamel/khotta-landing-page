import LayoutWrapper from '../components/Layout/LayoutWrapper'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  )
  }
export default MyApp
