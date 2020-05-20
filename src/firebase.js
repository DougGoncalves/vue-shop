import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDg_YpCkBroR1YNkCfv1ZJlBgjPNxWqetI',
  authDomain: 'vue-shop-f59f1.firebaseapp.com',
  databaseURL: 'https://vue-shop-f59f1.firebaseio.com',
  projectId: 'vue-shop-f59f1',
  storageBucket: 'vue-shop-f59f1.appspot.com',
  messagingSenderId: '574676510550',
  appId: '1:574676510550:web:f9643bd113c1e7dc3718f7'
}
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig)
