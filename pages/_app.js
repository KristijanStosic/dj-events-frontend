import { AuthProvider } from '@/context/AuthContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
