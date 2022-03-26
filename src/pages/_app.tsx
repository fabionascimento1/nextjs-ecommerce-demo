import React from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyle from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
