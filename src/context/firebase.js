import { createContext } from 'react'
import { firebase, FieldValue } from '../lib'

const FirebaseContext = createContext(null)

const FirebaseProvider = ({ children }) => {
  const values = { firebase, FieldValue }
  return <FirebaseContext.Provider value={values} children={children} />
}

export { FirebaseContext, FirebaseProvider }
