import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
<<<<<<< HEAD
import { useContext } from 'react'
import Link from 'next/link'
import Search from './Search'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/Header.module.css'

export default function Header() {
  const { user, logout } = useContext(AuthContext)

=======
import Link from 'next/link'
import Search from './Search'
import styles from '@/styles/Header.module.css'

export default function Header() {
>>>>>>> 0a6da37e9dd37502fc57241887a6ab80e2aeeefd
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>DJ Events</a>
        </Link>
      </div>

      <Search />

      <nav>
        <ul>
          <li>
            <Link href='/events'>
              <a>Events</a>
            </Link>
          </li>
<<<<<<< HEAD
          {user ? (
            // if logged in
            <>
              <li>
                <Link href='/events/add'>
                  <a>Add Event</a>
                </Link>
              </li>
              <li>
                <Link href='/account/dashboard'>
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className='btn-secondary btn-icon'
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            // if logged out
            <>
              <li>
                <Link href='/account/login'>
                  <a className='btn-secondary btn-icon'>
                    <FaSignInAlt /> Login
                  </a>
                </Link>
              </li>
            </>
          )}
=======
          <li>
            <Link href='/events/add'>
              <a>Add Event</a>
            </Link>
          </li>
          <li>
            <Link href='/account/login'>
              <a className='btn-secondary btn-icon'>
                <FaSignInAlt /> Login
              </a>
            </Link>
          </li>
>>>>>>> 0a6da37e9dd37502fc57241887a6ab80e2aeeefd
        </ul>
      </nav>
    </header>
  )
}
