/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            src="https://kit.fontawesome.com/cffc3dadae.js"
            crossOrigin="anonymous"
          ></script>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900"
            rel="stylesheet"
            type="text/css"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900"
            rel="stylesheet"
            type="text/css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
