import { FC, useState } from 'react'
import {
  Heading,
  HStack,
  Pressable,
  Center,
  Icon,
  Text,
  View,
  VStack
} from 'native-base'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Home, Markets, Wallets, Portfolio } from '@Components/components/Main'

type ScreenNames = 'Home' | 'Markets' | 'Wallets' | 'Portfolio';

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
      <HStack
        bg='indigo.600'
        alignItems='center'
        justifyContent='space-between'
        safeAreaBottom
        shadow={6}
      >
        <Pressable
          opacity={selected === 'Home' ? 1 : 0.5}
          py='3'
          flex={1}
          onPress={() => setSelected('Home')}
        >
          <Center>
            <Icon
              mb='1'
              as={
                <MaterialCommunityIcons
                  name={selected === 'Home' ? 'home' : 'home-outline'}
                />
              }
              color='white'
              size='sm'
            />
            <Text color='white' fontSize='12'>
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 'Markets' ? 1 : 0.5}
          py='2'
          flex={1}
          onPress={() => setSelected('Markets')}
        >
          <Center>
            <Icon
              mb='1'
              as={<MaterialIcons name='search' />}
              color='white'
              size='sm'
            />
            <Text color='white' fontSize='12'>
              Markets
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 'Wallets' ? 1 : 0.6}
          py='2'
          flex={1}
          onPress={() => setSelected('Wallets')}
        >
          <Center>
            <Icon
              mb='1'
              as={
                <MaterialCommunityIcons
                  name={selected === 'Wallets' ? 'cart' : 'cart-outline'}
                />
              }
              color='white'
              size='sm'
            />
            <Text color='white' fontSize='12'>
              Wallets
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 'Portfolio' ? 1 : 0.5}
          py='2'
          flex={1}
          onPress={() => setSelected('Portfolio')}
        >
          <Center>
            <Icon
              mb='1'
              as={
                <MaterialCommunityIcons
                  name={
                    selected === 'Portfolio' ? 'account' : 'account-outline'
                  }
                />
              }
              color='white'
              size='sm'
            />
            <Text color='white' fontSize='12'>
              Portfolio
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </VStack>
  )
}

export default Main
