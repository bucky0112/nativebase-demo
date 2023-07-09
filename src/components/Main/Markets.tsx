import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Stack } from 'native-base'
import { setTitles, setSummaries, AppDispatch } from '@Stores/index'
import { MARKETS_URL, SUMMARIES_URL } from '@Api/index'
import { Headers, Summaries } from "@Components/Markets"

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
      const data = await response.json()
      if (data.status !== 'success') {
        throw new Error('Login failed')
      }
      const titles = data?.data?.map((item: any) => item?.title)
      dispatch(setTitles(titles))
    } catch (error) {
      console.error('Failed to login:', error)
    }
  }

  const fetchSummaries = async () => {
    try {
      const headers = {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8',
        'user-agent': 'Android;1.15.0',
        'TOK-DEVICE-ID': 'ea278b7741967a5e'
      }

      const response = await fetch(SUMMARIES_URL, { method: 'GET', headers })
      const data = await response.json()
      if (data.status !== 'success') {
        throw new Error('Login failed')
      }
      
      dispatch(setSummaries(data?.data))
    } catch (error) {
      console.error('Failed to login:', error)
    }
  }

  useEffect(() => {
    fetchMarkets()
    fetchSummaries()
  }, [])

  return (
    <Stack>
      <Headers selected={selectedHeader} atClick={setSelectedHeader} />
      <Summaries />
    </Stack>
  )
}

export default Markets
