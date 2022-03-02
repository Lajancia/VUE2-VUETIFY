import Vue from 'vue'
import Vuetify from 'vuetify/lib'

// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#232f34", // #E53935
        secondary: "#f9aa33", // #FFCDD2
        accent: "#344955", // #3F51B5
      },
    },
  },
})