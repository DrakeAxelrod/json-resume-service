import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "@styles/global.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
