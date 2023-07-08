import React from 'react'
import { Provider } from 'react-redux'
import store from '@Stores/index'
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box
} from 'native-base'
import NativeBaseIcon from '@Components/components/NativeBaseIcon'
import Login from '@Screens/Login'

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
        <Login />
      </NativeBaseProvider>
    </Provider>
  )
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack space={2} alignItems='center'>
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  )
}
