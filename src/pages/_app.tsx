import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import {theme} from '../styles/theme';
import { AuthProvider } from '../context/authContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
