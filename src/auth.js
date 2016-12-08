import { ref, firebaseAuth } from './config'

export function auth (email, pw, username) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
    .then(function (user) {
        user.updateProfile({
            username: username
        })  
    })
    .catch((error) => console.log('Something\'s off, try Again!', error))
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}
