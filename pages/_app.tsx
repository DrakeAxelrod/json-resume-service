import type { AppProps } from 'next/app'
import "../styles/style.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


export default MyApp
