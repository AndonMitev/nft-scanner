import 'reset-css'
import 'react-toastify/dist/ReactToastify.css'

import { CacheProvider, EmotionCache } from '@emotion/react'
import { theme, createEmotionCache } from 'styles'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from '@mui/material'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'

import '../styles/react-toastify.scss'

const clientSideEmotionCache = createEmotionCache()

export interface IMyApp {
  emotionCache?: EmotionCache
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}: AppProps & IMyApp) => {
  const router = useRouter()

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
