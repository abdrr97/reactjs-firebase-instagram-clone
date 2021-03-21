import { createContext, useContext } from 'react'
import useAuthListener from '../hooks/useAuthListener'
const UserContext = createContext()

const UserProvider = ({ children }) => {
  const { user } = useAuthListener()
  return <UserContext.Provider value={{ user }} children={children} />
}

const useUserContext = () => {
  return useContext(UserContext)
}

export { UserContext, UserProvider, useUserContext }
