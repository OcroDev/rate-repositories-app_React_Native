import { Platform } from "react-native"

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    white: '#fefefe'
  },
  fontSizes: {
    body: 18,
    subHeading: 20,
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default:'System'
    }),
  },
  fontWeights: {
    normal: '400',
    bold:'700'
  },
  appBar:{
    primary: '#24292e',
    textPrimary: '#fff',
    textSecondary: '#949191'
  }
}

export default theme