import { useState, useEffect } from 'react'
import { useFirebaseContext } from '../context/firebase'
import { useUserContext } from '../context/user'

const useUser = () => {
  const [activeUser, setActiveUser] = useState({})
  const { firebase } = useFirebaseContext()
  const { user } = useUserContext()
  useEffect(() => {
    return () => {}
  }, [])
}

export default useUser
