import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { FirebaseContext } from '../context/firebase'
const Login = () => {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const isInvalid = password === '' || emailAddress === ''
  const handleLogin = () => {}

  useEffect(() => {
    document.title = 'Login | Insatgram'
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
        <p>forms!</p>
      </div>
    </div>
  )
}

export default Login
