import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/AuthForm.module.css'
import 'react-toastify/dist/ReactToastify.css'
<<<<<<< HEAD
import AuthContext from '@/context/AuthContext'
=======
>>>>>>> 0a6da37e9dd37502fc57241887a6ab80e2aeeefd

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

<<<<<<< HEAD
  const { login, error } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ email, password })
=======
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password })
>>>>>>> 0a6da37e9dd37502fc57241887a6ab80e2aeeefd
  }

  return (
    <Layout title='User Login'>
      <div className={styles.auth}>
        <h1>
          <FaUser /> Log In
        </h1>
        <ToastContainer theme='colored' autoClose='2500' />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type='submit' value='Login' className='btn' />
        </form>
        <p>
          Don't have an account? <Link href='/account/register'>Register</Link>
        </p>
      </div>
    </Layout>
  )
}
