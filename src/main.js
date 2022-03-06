import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import mdiVue from 'mdi-vue/v2'
import * as mdijs from '@mdi/js'
// import VueSnap from 'vue-snap'
// import 'vue-snap/dist/vue-snap.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
// import VueCarousel from 'vue-carousel';
import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'


// Vue.use(VueCarousel);
// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(VueSnap)
Vue.config.productionTip = false
Vue.use(mdiVue, {
  icons: mdijs
}) 

new Vue({
  
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
