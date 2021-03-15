import { firebase, FieldValue } from '../lib'

export const doesUsernameExist = async (username) => {
  const users = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get()
  const res = users.docs.map((user) => user.data())
  return res.length > 0
}
