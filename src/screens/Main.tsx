import { FC, useState } from 'react'
import { Heading, View, VStack, HStack, Icon } from 'native-base'
import { Feather } from '@expo/vector-icons'
import {
  Home,
  Markets,
  Wallets,
  Portfolio,
  BottomNavigator
} from '@Components/Main'

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
    <VStack flex={1} safeArea bg='mainBackground'>
      <HStack justifyContent='space-between' pl='7' pr='3' my='5'>
        <Heading color='mainText' fontSize='lg' fontWeight='700'>
          {title.toUpperCase()}
        </Heading>
        <Icon as={Feather} name='search' size='6' color='mainText' />
      </HStack>
      <View flex={1}>{screenComponents[selected]}</View>
      <BottomNavigator selected={selected} setSelected={setSelected} />
    </VStack>
  )
}

export default Main
