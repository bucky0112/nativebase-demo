import { useSelector } from 'react-redux'
import { RootState } from '@Stores/index'
import Login from '@Screens/Login'
import Main from '@Screens/Main'

const Root = () => {
  const token = useSelector((state: RootState) => state.auth.token)

  return token ? <Main title="Markets" /> : <Login />
}

export default Root
