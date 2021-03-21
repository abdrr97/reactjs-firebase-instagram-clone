import { createContext, useContext } from 'react'
import { firebase, FieldValue } from '../lib'

const FirebaseContext = createContext()

const FirebaseProvider = ({ children }) => {
  const values = { firebase, FieldValue }
  return <FirebaseContext.Provider value={values} children={children} />
}

const useFirebaseContext = () => {
  return useContext(FirebaseContext)
}

export { FirebaseContext, FirebaseProvider, useFirebaseContext }
