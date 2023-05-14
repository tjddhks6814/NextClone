import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/styles/global-style'
import { theme } from '../styles/theme'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
        <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
    </React.Fragment>
  )
}
