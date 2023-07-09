import { FC } from 'react'
import { HStack, Pressable, Center, Text } from 'native-base'
import { Home, Markets, Wallets, Portfolio, More } from '@Components/Icons'

type ScreenNames = 'Home' | 'Markets' | 'Wallets' | 'Portfolio'

interface BottomNavigatorProps {
  selected: ScreenNames
  setSelected: (selected: ScreenNames) => void
}

const BottomNavigator: FC<BottomNavigatorProps> = ({
  selected,
  setSelected
}) => {
  return (
    <HStack
      bg='white'
      alignItems='center'
      justifyContent='space-between'
      safeAreaBottom
      shadow={3}
    >
      <Pressable
        opacity={selected === 'Home' ? 1 : 0.5}
        py='3'
        flex={1}
        onPress={() => setSelected('Home')}
      >
        <Center>
          <Home width={24} height={24} />
          <Text color='tabText' fontWeight='500'>
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
          <Markets width={24} height={24} />
          <Text color={selected === 'Markets' ? 'clickTabText' : 'tabText'} fontWeight='500'>
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
          <Wallets width={24} height={24} />
          <Text color='tabText' fontWeight='500'>
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
          <Portfolio width={24} height={24} />
          <Text color='tabText' fontWeight='500'>
            Portfolio
          </Text>
        </Center>
      </Pressable>
      <Pressable
        opacity={selected === 'Portfolio' ? 1 : 0.5}
        py='2'
        flex={1}
        onPress={() => {}}
      >
        <Center>
          <More width={24} height={24} />
          <Text color='tabText' fontWeight='500'>
            More
          </Text>
        </Center>
      </Pressable>
    </HStack>
  )
}

export default BottomNavigator
