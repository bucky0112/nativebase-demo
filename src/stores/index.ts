import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  token: string | null
}

interface MarketState {
  titles: string[]
}

const initialState: AuthState = {
  token: null
}

const initialMarketState: MarketState = {
  titles: []
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload
    }
  }
})

const marketSlice = createSlice({
  name: 'market',
  initialState: initialMarketState,
  reducers: {
    setTitles: (state, action: PayloadAction<string[]>) => {
      state.titles = action.payload
    }
  }
})

export const { setToken } = authSlice.actions
export const { setTitles } = marketSlice.actions

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    market: marketSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
