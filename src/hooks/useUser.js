import { useState, useEffect } from 'react'
import { useFirebaseContext } from '../context/firebase'
import { useUserContext } from '../context/user'
import { getUserByUserId } from '../services/firebase'
const useUser = () => {
  const [activeUser, setActiveUser] = useState({})
  const { firebase } = useFirebaseContext()
  const { user } = useUserContext()

  useEffect(() => {
    const getUserObjByUserId = async () => {
      const [response] = await getUserByUserId(user?.uid)
      setActiveUser(response)
    }

    if (user?.uid) {
      getUserObjByUserId()
    }
    return () => {}
  }, [user])

  return { user: activeUser }
}
export default useUser
