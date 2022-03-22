import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyle from 'styles/global.styles'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from 'components/Header'

import { Provider } from 'react-redux'
import store from 'store/index'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
