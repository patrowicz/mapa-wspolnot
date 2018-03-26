
import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)
firebase.initializeApp({
  databaseURL: "https://mapa-wspolnot.firebaseio.com",
  projectId: "mapa-wspolnot",
})

export const db = firebase.firestore()
