import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  token: string | null
}

const initialState: AuthState = {
  token: null
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

export const { setToken } = authSlice.actions

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
