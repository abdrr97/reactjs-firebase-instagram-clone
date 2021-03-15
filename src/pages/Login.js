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
    document.title = 'Login | FireGrame'
    return () => {}
  }, [])
  return (
    <div>
      <h1>LOGIN</h1>
    </div>
  )
}

export default Login
