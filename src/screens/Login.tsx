import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Input,
  Icon,
  Stack,
  Center,
  Checkbox,
  Link,
  Button,
  Text
} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { setToken, AppDispatch, RootState } from '@Stores/index'
import { API_URL } from "@env"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const token = useSelector((state: RootState) => state.auth.token)
  console.log('token', token)

  const dispatch = useDispatch<AppDispatch>()

  const handleLogin = useCallback(async () => {
    try {
      const url = API_URL
      const headers = {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8',
        'user-agent': 'Android;1.15.0',
        'TOK-DEVICE-ID': 'ea278b7741967a5e'
      }
      const captcha = 'yWOEjZMIhY'
      const captchaBypass = 'yWOEjZMIhY'
      const body = JSON.stringify({
        email,
        password,
        captcha,
        captchaBypass
      })

      const response = await fetch(url, { method: 'POST', headers, body })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const { data } = await response.json()
      dispatch(setToken(data?.token))
    } catch (error) {
      console.error('Failed to login:', error)
    }
  }, [email, password])

  return (
    <Center flex={1}>
      <Stack space={4} w='95%' alignItems='center'>
        <Input
          value={email}
          onChangeText={setEmail}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name='person' />}
              size={5}
              ml='2'
              color='muted.400'
            />
          }
          placeholder='Email'
        />

        <Input
          value={password}
          onChangeText={setPassword}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name='lock' />}
              size={5}
              ml='2'
              color='muted.400'
            />
          }
          placeholder='Password'
          type='password'
        />
      </Stack>
      <Stack
        direction='row'
        w='95%'
        justifyContent='space-between'
        alignItems='center'
      >
        <Checkbox value='remember' my='2' mx='4'>
          Remember me
        </Checkbox>
        <Link isUnderlined={false}>Forgot your Password?</Link>
      </Stack>
      <Button onPress={handleLogin} w='95%' mx='2' my='2' colorScheme='primary'>
        SIGN IN
      </Button>
      <Stack
        direction='row'
        w='95%'
        justifyContent='center'
        alignItems='center'
      >
        <Text>Don't have an account yet?</Text>
        <Link isUnderlined={false}>SIGN UP</Link>
      </Stack>
    </Center>
  )
}

export default Login
