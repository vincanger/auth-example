import React from 'react';
import waspLogo from './waspLogo.png';
import { ImGoogle, ImGithub } from 'react-icons/im';
import Card from './components/Card';
import { Box, Input } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

export default function Example({ handleLogin, googleUrl, githubUrl }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(username, password);
      history.push('/');
    } catch (error) {
      console.error(error);
      alert('Invalid username or password. Please try again.')
    }
  };

  const checkKeyPress = (e) => {
    const { key, keyCode } = e;

    if (keyCode === 13) {
      handleSubmit(e);
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
                Sign in to your account
              </h2>
            </div>

            <div className='mt-8'>
              <div>
                <div>
                  <p className='text-sm font-medium text-gray-700'>Sign in with</p>

                  <div className='mt-1 grid grid-cols-2 gap-3'>
                    <Box boxShadow={'sm'} rounded={'0.5rem'}>
                      <Card w={'full'} h={'full'} interactive>
                        <a
                          href={googleUrl}
                          className='inline-flex w-full justify-center w-full justify-center py-2 px-4 text-gray-500'
                        >
                          <span className='sr-only'>Sign in with Google</span>

                          <ImGoogle size={20} />
                        </a>
                      </Card>
                    </Box>

                    <Box boxShadow={'sm'} rounded={'0.5rem'}>
                      <Card w={'full'} h={'full'} interactive>
                        <a
                          href={githubUrl}
                          className='inline-flex w-full justify-center w-full justify-center py-2 px-4 text-gray-500'
                        >
                          <span className='sr-only'>Sign in with GitHub</span>
                          <ImGithub size={20} />
                        </a>
                      </Card>
                    </Box>
                  </div>
                </div>

                <div className='relative mt-6'>
                  <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                    <div className='w-full border-t border-gray-300' />
                  </div>
                  <div className='relative flex justify-center text-sm'>
                    <span className='bg-white px-2 text-gray-500'>Or continue with</span>
                  </div>
                </div>
              </div>

              <div className='mt-6'>
                <form className='space-y-6'>
                  <div>
                    <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
                      Username
                    </label>
                    <div className='mt-1'>
                      <Input
                        id='username'
                        name='username'
                        type='username'
                        autoComplete='username'
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        fontSize={'sm'}
                        textColor={'gray.600'}
                        borderRadius={'0.5rem'}
                        border={'1px solid gray'}
                        bg='#f5f0ff !important'
                        _focus={{
                          boxShadow: 'none !important',
                          borderColor: 'transparent',
                        }}
                        boxShadow={'sm'}
                      />
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                      Password
                    </label>
                    <div className='mt-1'>
                      <Input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        fontSize={'sm'}
                        textColor={'gray.600'}
                        borderRadius={'0.5rem'}
                        border={'1px solid gray'}
                        bg='#f5f0ff !important'
                        _focus={{
                          boxShadow: 'none !important',
                          borderColor: 'transparent',
                        }}
                        boxShadow={'sm'}
                        onKeyDown={checkKeyPress}
                      />
                      {/* <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='block w-full text-gray-900 focus:outline-none focus:ring-yellow-700 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-yellow-700 sm:text-sm'
                      /> */}
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
                          Sign in
                        </div>
                      </Card>
                    </Box>
                  </div>

                  <div className='flex items-end justify-end'>
                    {/* <p className='pr-1 text-gray-500 '>Not signed up?</p> */}
                    <a href='/register' className='px-2 text-sm text-gray-500'>
                      Register here.
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
