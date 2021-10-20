<<<<<<< HEAD
import { AuthProvider } from '@/context/AuthContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
=======
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
>>>>>>> 0a6da37e9dd37502fc57241887a6ab80e2aeeefd
}

export default MyApp
