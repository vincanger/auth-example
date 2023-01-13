import React from 'react';
import waspLogo from './waspLogo.png';
import { ImGoogle, ImGithub } from 'react-icons/im';
import Card from './components/Card';
import { Box, Stack } from '@chakra-ui/react';
import SignInForm from './SignInForm.jsx';
import { MouseProvider } from './components/MouseProvider';
import { ChakraProvider, ColorModeScript, useColorMode } from '@chakra-ui/react';
import { theme } from './components/Theme';
import { Link, useHistory } from 'react-router-dom';


import signup from '@wasp/auth/signup';


const Register = () => {

  return (
    <MouseProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode='light' />

        <Stack maxW='xl' margin='0 auto' spacing='sm' mt='5'>
          <Card bg='white' spotlightRadius='0rem' border={'2px solid rgba(0, 0, 0, 0.1)'} >
            <Example handleSignup={signup} />
          </Card>
        </Stack>

      </ChakraProvider>
    </MouseProvider>
  );
}

export default Register;

export function Example({ handleSignup }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = handleSignup({username: username, password: password});
    if (newUser) {
      history.push('/login');
    } else {
      alert('Signup failed');
    }
  };

  return (
    <>
      <div className='flex min-h-full justify-center'>
        <div className='flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <img className='h-12 w-auto shadow-md rounded-full' src={waspLogo} alt='Wasp' />
              <h2 className='mt-6 text-3xl font-bold tracking-tight text-gray-900 ' style={{ textShadow: '#FC0' }}>
                Register your account
              </h2>
            </div>

            <div className='mt-8'>
              <div className='mt-6'>
                <form className='space-y-6'>
                  <div>
                    <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
                      Username
                    </label>
                    <div className='mt-1'>
                      <input
                        id='username'
                        name='username'
                        type='username'
                        autoComplete='username'
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className='block w-full text-gray-900 focus:outline-none focus:ring-yellow-700 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-yellow-700 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                      Password
                    </label>
                    <div className='mt-1'>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='block w-full text-gray-900  focus:outline-none focus:ring-yellow-700 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-yellow-700 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div>
                    <Box boxShadow={'md'} rounded={'0.5rem'}>
                      <Card w={'full'} h={'full'} interactive>
                        <div
                          onClick={handleSubmit}
                          className='flex w-full justify-center py-2 px-4 text-gray-700 font-medium'
                          // className='flex w-full justify-center rounded-md border border-transparent bg-gray-900 py-2 px-4 text-md font-bold text-yellow-500 shadow-sm hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2'
                        >
                          Register
                        </div>
                      </Card>
                    </Box>
                  </div>

                  <div className='flex items-end justify-end'>
                    {/* <p className='pr-1 text-gray-500 '>Not signed up?</p> */}
                    <a href='/login' className='text-gray-500'>
                      Sign in here.
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
