import Vue from 'vue'
import Vuetify from 'vuetify/lib'

// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: 'white', // #E53935
        secondary: 'black', // #FFCDD2
        accent: "#2978b5", // #3F51B5
        text: "#444"
      },
    },
  },
})