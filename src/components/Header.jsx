import React from 'react'
import { useUserContext } from '../context/user'
import { useFirebaseContext } from '../context/firebase'
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom'

const Header = () => {
  const { firebase } = useFirebaseContext()
  const { user } = useUserContext()
  const SignOut = () => {
    firebase.auth().signOut()
  }

  return (
    <header className='h-16 bg-white border-b border-gray-primary mb-8'>
      <div className='container mx-auto max-w-screen h-full'>
        <div className='flex justify-between h-full'>
          <div className=' text-gray-700 text-center flex items-center  cursor-pointer'>
            <h1 className='flex justify-center w-full'>
              <Link to={ROUTES.DASHBOARD}>
                <img
                  src='/images/logo.png'
                  alt='instagram'
                  className='mt-2 w-6/12'
                />
              </Link>
            </h1>
          </div>
          <div className='text-gray-700 text-center flex items-center'>
            {user ? (
              <>
                <Link title='Home' to={ROUTES.DASHBOARD}>
                  {/* <svg
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='w-8 mr-6 text-black-light cursor-pointer'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg> */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    className='w-8 mr-6 text-black-light cursor-pointer'
                    fill='currentColor'
                  >
                    <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                  </svg>
                </Link>
                <button
                  onClick={SignOut}
                  className='outline-none'
                  title='Log Out'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='w-8 mr-6 text-black-light cursor-pointer'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                    />
                  </svg>
                </button>
                <div className='flex items-center cursore-pointer'>
                  <Link to={`/p/${user.displayName}`}>
                    <img
                      src={`images/avatars/${user.displayName}.jpg`}
                      alt={`${user.displayName} profile`}
                      className='rounded-full h-8 w-8 flex'
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button className='bg-blue-medium font-bold text-sm items-center text-white w-20 h-8 rounded'>
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <button className='text-blue-medium font-bold text-sm items-center w-20 h-8 rounded'>
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
