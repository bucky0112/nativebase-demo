import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Stack, Text } from 'native-base'
import { setTitles, AppDispatch } from '@Stores/index'
import { MARKETS_URL } from '@Api/index'
import { Headers } from "../Markets"

const Markets = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [selectedHeader, setSelectedHeader] = useState<string>("BTC")

  const fetchMarkets = async () => {
    try {
      const headers = {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8',
        'user-agent': 'Android;1.15.0',
        'TOK-DEVICE-ID': 'ea278b7741967a5e'
      }

      const response = await fetch(MARKETS_URL, { method: 'GET', headers })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      const titles = data?.data?.map((item: any) => item?.title)
      dispatch(setTitles(titles))
    } catch (error) {
      console.error('Failed to login:', error)
    }
  }

  useEffect(() => {
    fetchMarkets()
  }, [])

  return (
    <Stack>
      <Headers selected={selectedHeader} atClick={setSelectedHeader} />
      <Text>Markets</Text>
    </Stack>
  )
}

export default Markets
