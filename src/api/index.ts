import { API_URL } from '@env'

const LOGIN_URL = `${API_URL}/mobile-api/auth/login`
const SUMMARIES_URL = `${API_URL}/public/v1/market/get-summaries`
const MARKETS_URL = `${API_URL}/mobile-api/market/getmarkets`

export { LOGIN_URL, SUMMARIES_URL, MARKETS_URL }
