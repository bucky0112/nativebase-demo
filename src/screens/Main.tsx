import { FC, useState } from 'react'
import { Heading, View, VStack } from 'native-base'
import {
  Home,
  Markets,
  Wallets,
  Portfolio,
  BottomNavigator
} from '@Components/components/Main'

type ScreenNames = 'Home' | 'Markets' | 'Wallets' | 'Portfolio'

interface MainProps {
  title: ScreenNames
}

const Main: FC<MainProps> = ({ title }) => {
  const [selected, setSelected] = useState(title)

  const screenComponents = {
    Home: <Home />,
    Markets: <Markets />,
    Wallets: <Wallets />,
    Portfolio: <Portfolio />
  }

  return (
    <VStack flex={1} safeArea>
      <Heading>{title.toUpperCase()}</Heading>
      <View flex={1}>{screenComponents[selected]}</View>
      <BottomNavigator selected={selected} setSelected={setSelected} />
    </VStack>
  )
}

export default Main
