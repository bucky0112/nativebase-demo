import React from 'react'
import { Provider } from 'react-redux'
import {
  NativeBaseProvider,
  extendTheme,
} from 'native-base'
import store from '@Stores/index'
import Root from '@Components/Root'

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark'
}

// extend the theme
export const theme = extendTheme({ config })
type MyThemeType = typeof theme
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Root />
      </NativeBaseProvider>
    </Provider>
  )
}
