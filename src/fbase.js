
import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'
require('firebase/firestore')

Vue.use(VueFirestore)

var firebaseApp = Firebase.initializeApp({
  databaseURL: "https://mapa-wspolnot.firebaseio.com",
  projectId: "mapa-wspolnot",
})

export const db = firebaseApp.firestore();
//
// Vue.use(VueFire)
// firebase.initializeApp({
//   databaseURL: "https://mapa-wspolnot.firebaseio.com",
//   projectId: "mapa-wspolnot",
// })
//
// export const db = firebase.firestore()
