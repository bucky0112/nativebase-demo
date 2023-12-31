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
  subText: '#8e92b2',
  tabText: '#9194bb',
  clickTabText: '#597af4',
  signinBtnBg: '#bdcfff',
  signinBtnText: '#5073f2'
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
