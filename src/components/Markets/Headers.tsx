import { FC } from 'react'
import { useSelector } from 'react-redux'
import { HStack, Pressable, Text, Center } from 'native-base'
import { RootState } from '@Stores/index'

interface HeadersProps {
  selected: string
  atClick: (selected: string) => void
}

const Headers: FC<HeadersProps> = ({ selected, atClick }) => {
  const titles = useSelector((state: RootState) => state.market.titles)

  return (
    <HStack px="3" mb='2' justifyContent="space-between">
      {titles?.map((title: string) => (
        <Pressable
          w={`${(100 / titles.length) - 2}%`}
          py="2"
          rounded='6'
          key={title}
          bg={selected === title ? 'buttonBlue.600' : 'buttonBlue.500'}
          _pressed={{ bg: 'buttonBlue.600' }}
          onPress={() => atClick(title)}
        >
          <Center>
            <Text fontWeight='500' color={selected === title ? 'white' : 'subText'}>{title}</Text>
          </Center>
        </Pressable>
      ))}
    </HStack>
  )
}

export default Headers
