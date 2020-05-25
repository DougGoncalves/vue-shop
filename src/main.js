import Vue from 'vue'
import App from './App.vue'
import router from './router'
import JQuery from 'jquery'
import 'popper.js'
import 'bootstrap'
import './assets/app.scss'
import { fb } from './firebase'
import VueFirestore from 'vue-firestore'
import Swal from 'sweetalert2'
window.Swal = Swal
window.$ = window.JQuery = JQuery
Vue.component('Navbar', require('./components/Navbar.vue').default)
Vue.config.productionTip = false
Vue.use(VueFirestore)

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

window.Toast = Toast

const app = ''

fb.auth().onAuthStateChanged(function (user) {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
