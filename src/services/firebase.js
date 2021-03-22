import { firebase, FieldValue } from '../lib'

export const doesUsernameExist = async (username) => {
  const users = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get()
  return users.docs.map((user) => user.data()).length > 0
}

export const getUserByUserId = async (userId) => {
  const users = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get()
  return users.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }))
}
