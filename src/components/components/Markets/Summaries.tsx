import { useSelector } from 'react-redux'
import { Pressable, Text, FlatList, Image, HStack } from 'native-base'
import { RootState } from '@Stores/index'
import { IMAGE_URL } from '@env'

const Summaries = () => {
  const summaries = useSelector((state: RootState) => state.market.summaries)

  return (
    <FlatList
      data={summaries}
      renderItem={({ item }) => {
        const currencyName = item?.market.split('-')[1]
        const imageUrl = `${IMAGE_URL}${currencyName.toLowerCase()}.png`

        return (
          <Pressable
            w='95%'
            my='2'
            mx='3'
            py='2'
            rounded='6'
            key={item?.marketId}
            bg='white'
            _pressed={{ bg: 'buttonBlue.600' }}
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <HStack alignItems="center" space={3}>
              <Image
                source={{ uri: imageUrl }}
                alt={currencyName}
                height={10}
                width={10}
              />
              <Text>{currencyName}</Text>
            </HStack>
          </Pressable>
        )
      }}
      keyExtractor={(item) => item?.marketId}
    />
  )
}

export default Summaries
