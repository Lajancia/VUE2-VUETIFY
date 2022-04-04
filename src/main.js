import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import mdiVue from 'mdi-vue/v2'
import * as mdijs from '@mdi/js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'

Vue.use(VueSnap)
Vue.use(VueAwesomeSwiper)
Vue.use(VueAxios, axios)
Vue.use(VueAxios)
Vue.config.productionTip = false
Vue.use(mdiVue, {
  icons: mdijs
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
