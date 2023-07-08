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

const Login = () => (
  <Center flex={1}>
    <Stack space={4} w='95%' alignItems='center'>
      <Input
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
    <Button w='95%' mx='2' my='2' colorScheme='primary'>
      SIGN IN
    </Button>
    <Stack direction='row' w='95%' justifyContent='center' alignItems='center'>
      <Text>Don't have an account yet?</Text>
      <Link isUnderlined={false}>SIGN UP</Link>
    </Stack>
  </Center>
)

export default Login
