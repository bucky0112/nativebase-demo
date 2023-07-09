import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
  Input,
  Stack,
  Flex,
  Checkbox,
  Link,
  Button,
  Text,
} from 'native-base'
import { setToken, AppDispatch } from '@Stores/index'
import { LOGIN_URL } from '@Api/index'
import Background from '@Assets/svg/login-bg.svg'
import { Logo, Email, Password, Eye } from '@Components/Icons'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch<AppDispatch>()

  const handleLogin = useCallback(async () => {
    try {
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

      const response = await fetch(LOGIN_URL, { method: 'POST', headers, body })

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
    <Flex flex={1} justifyContent='space-between' alignItems='center'>
      <Background
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
      <Flex flex={1} justifyContent='flex-end' alignItems='center'>
        <Logo />
        <Text fontSize='2xl' fontWeight='bold' color='white' mt='5' mb='2'>
          Sign in
        </Text>
        <Text fontSize='lg' color='white'>
          Please sign in to continue
        </Text>
      </Flex>
      <Flex flex={1} justifyContent='center' my={4}>
        <Stack space={4} w='95%' alignItems='center'>
          <Input
            value={email}
            onChangeText={setEmail}
            InputLeftElement={
              <Email style={{ marginLeft: 10, marginTop: 4 }} />
            }
            placeholder='Email'
            type='email'
            alignItems='center'
            py='3'
            backgroundColor='rgba(255, 255, 255, 0.1)'
            placeholderTextColor='#d6e1ff'
            _focus={{
              borderColor: 'white',
              color: 'white'
            }}
            fontSize={16}
            fontWeight={600}
          />

          <Input
            value={password}
            onChangeText={setPassword}
            InputLeftElement={<Password style={{ marginLeft: 10 }} />}
            InputRightElement={<Eye style={{ marginRight: 10 }} />}
            placeholder='Password'
            type='password'
            py='3'
            backgroundColor='rgba(255, 255, 255, 0.1)'
            placeholderTextColor='#d6e1ff'
            _focus={{
              borderColor: 'white',
              color: 'white'
            }}
            fontSize={16}
            fontWeight={600}
          />

          <Stack
            direction='row'
            w='100%'
            justifyContent='space-between'
            alignItems='center'
          >
            <Flex direction='row' alignItems='center'>
              <Checkbox
                value='remember'
                my='2'
                mx='4'
                _text={{ color: 'white' }}
                backgroundColor='rgba(255, 255, 255, 0.1)'
                borderColor='rgba(255, 255, 255, 0.2)'
              />
              <Text color='white' ml={-2} fontWeight='bold'>Remember me</Text>
            </Flex>
            <Link
              isUnderlined={false}
              _text={{ color: 'white', fontWeight: 'bold' }}
              mr={-2}
            >
              Forgot your Password?
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} justifyContent='flex-start' w='100%'>
        <Button
          onPress={handleLogin}
          mx='2'
          mt='4'
          py='3'
          bgColor='signinBtnBg'
          _text={{ color: 'signinBtnText', fontSize: 'md', fontWeight: 'bold' }}
        >
          SIGN IN
        </Button>
        <Stack
          direction='row'
          w='95%'
          justifyContent='center'
          alignItems='center'
          mt='4'
        >
          <Text color='white' pr='1'>
            Don't have an account yet?
          </Text>
          <Link
            isUnderlined={false}
            _text={{ color: 'white', fontWeight: 'bold' }}
          >
            SIGN UP
          </Link>
        </Stack>
      </Flex>
    </Flex>
  )
}

export default Login
