// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify, ThemeDefinition } from 'vuetify'

const myCostomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#F4F7FB',
    primary: '#00529f',
    accent: '#00756A',
    bgfont: '#3e1915'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCostomLightTheme',
    themes: {
      myCostomLightTheme,
    }
  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
})