import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { useFirebaseContext } from '../context/firebase'
import { doesUsernameExist } from '../services/firebase'
import * as ROUTES from '../constants/routes'

const Signup = () => {
  const history = useHistory()
  const { firebase } = useFirebaseContext()

  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [fullName, setFullName] = useState('')

  const [error, setError] = useState('')
  const isInvalid = password === '' || emailAddress === ''

  const handleSignup = async (event) => {
    event.preventDefault()

    const usernameExist = await doesUsernameExist(username)

    if (!usernameExist) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password)

        await createdUserResult.user.updateProfile({
          displayName: username,
        })
        await firebase.firestore().collection('users').add({
          userId: createdUserResult.user.uid,
          username: username.toLocaleLowerCase(),
          fullName,
          emailAddress: emailAddress.toLocaleLowerCase(),
          following: [],
          dateCreated: Date.now(),
        })

        history.push(ROUTES.DASHBOARD)
      } catch (error) {
        setUsername('')
        setEmailAddress('')
        setPassword('')

        setError(error.message)
      }
    } else {
      setError('Sorry username already taken !! 😢😢😢')
    }
  }

  useEffect(() => {
    document.title = 'Signup - Insatgram'
    return () => {}
  }, [])
  return (
    <div className='container flex mx-auto max-w-screen-md items-center h-screen'>
      <div className='flex w-3/5'>
        <img
          src='/images/iphone-with-profile.jpg'
          alt='instagram app login pic'
        />
      </div>
      <div className='flex flex-col w-2/5'>
        <div className='flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded'>
          <h1 className='flex justify-center w-full'>
            <img
              src='/images/logo.png'
              alt='Instagram'
              className='mt-2 w-6/12 mb-4'
            />
          </h1>

          {error && <p className='mb-4 text-xs text-red-primary'>{error}</p>}

          <form onSubmit={handleSignup} method='POST'>
            <input
              aria-label='Enter your Username'
              type='text'
              placeholder='Username'
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
            <input
              aria-label='Enter your Full Name'
              type='text'
              placeholder='Full Name'
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
            />
            <input
              aria-label='Enter your email address'
              type='text'
              placeholder='Email address'
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label='Enter your password'
              type='password'
              placeholder='Password'
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type='submit'
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold 
              ${isInvalid && ' opacity-50'}`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className='flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary'>
          <p className='text-sm'>
            You already have an account?{` `}
            <Link to={ROUTES.LOGIN} className='font-bold text-blue-medium'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
