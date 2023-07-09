import React from 'react'
import { Provider } from 'react-redux'
import { NativeBaseProvider, extendTheme } from 'native-base'
import store from '@Stores/index'
import Root from '@Components/Root'

const newColorTheme = {
  buttonBlue: {
    500: '#e4e9f9',
    600: '#6992ff'
  },
  mainBackground: '#f7f8fd',
  mainText: '#3d436c',
  subText: '#8e92b2'
}

// extend the theme
export const theme = extendTheme({ colors: newColorTheme })
type MyThemeType = typeof theme
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <Root />
      </NativeBaseProvider>
    </Provider>
  )
}
