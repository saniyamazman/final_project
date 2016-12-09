import { ref, firebaseAuth } from './config'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'


export function auth (email, pw, username) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
    .then(redirectPage)
    .then(function (user) {
        user.updateProfile({
            username: username
        })
    })
    .catch((error) => console.log('Something\'s off, try again!', error))
}

export function logout () {
  return firebaseAuth().signOut()
  .then(redirectHome)
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
  .then(redirectPage)
}

export function redirectHome(){
    browserHistory.push("/login")
}

export function redirectPage(){
  browserHistory.push("/search")
}


export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}
