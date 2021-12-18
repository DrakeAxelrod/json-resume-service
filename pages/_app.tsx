import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from "@styles/theme"
import "@fontsource/roboto-condensed";
import "@styles/global.scss"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}


export default App
