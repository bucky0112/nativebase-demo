import { useSelector } from 'react-redux'
import { Pressable, Text, FlatList, Image, HStack, VStack } from 'native-base'
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
        const lastPrice = item?.lastPrice || 0
        const openPrice = item?.openPrice || 0
        const priceChangePercentage =
          ((lastPrice - openPrice) / openPrice) * 100
        const priceChangeColor =
          priceChangePercentage >= 0 ? 'green.500' : 'red.500'
        const priceChangeSymbol = priceChangePercentage > 0 ? '+' : ''

        return (
          <Pressable
            w='95%'
            my='1.5'
            mx='3'
            p='4'
            rounded='6'
            key={item?.marketId}
            bg='white'
            _pressed={{ bg: 'buttonBlue.600' }}
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <HStack alignItems='center' space={3}>
              <Image
                source={{ uri: imageUrl }}
                alt={currencyName}
                height={10}
                width={10}
              />
              <Text color='mainText' fontWeight='700'>{currencyName}</Text>
            </HStack>

            <VStack alignItems='flex-end'>
              <Text fontWeight='500'>{`$${lastPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}`}</Text>
              <Text fontSize='sm' fontWeight='500' color={priceChangeColor}>
                {`${priceChangeSymbol}${priceChangePercentage.toFixed(2)}%`}
              </Text>
            </VStack>
          </Pressable>
        )
      }}
      keyExtractor={(item) => item?.marketId}
    />
  )
}

export default Summaries
