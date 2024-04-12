import { Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Login = () => {
    const navigate = useNavigate();

    const { loginWithGoogle } = useAuth();

    const { getItem } = useLocalStorage;

    const handleLogin = async () => {
        await loginWithGoogle();
        const accessToken = getItem('accessToken');

        if (accessToken) {
            navigate('');
        }
    };
    return (
        <Col
            className='flex items-center justify-center h-screen px-5 sm:px-0'
            style={{ backgroundColor: '#001F3F' }}>
            <Col className='flex flex-col items-center bg-[#233044] rounded-lg shadow-lg border overflow-hidden max-w-md w-full sm:w-2/3 md:w-1/2'>
                <Col className='w-full p-8'>
                    <p className='text-xl text-gray-300 text-center'>
                        Welcome!
                    </p>
                    <Col className='mt-4 flex flex-col justify-between'>
                        <Col className='flex justify-between'>
                            <label className='block text-gray-300 text-sm font-bold mb-2'>
                                Email Address
                            </label>
                        </Col>
                        <input
                            className='text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700'
                            type='email'
                            required
                        />
                    </Col>
                    <Col className='mt-4 flex flex-col justify-between'>
                        <Col className='flex justify-between'>
                            <label className='block text-gray-300 text-sm font-bold mb-2'>
                                Password
                            </label>
                        </Col>
                        <input
                            className='text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700'
                            type='password'
                        />
                        <a
                            href='#'
                            className='text-xs text-gray-300 hover:text-gray-300 text-end w-full mt-2'>
                            Forget Password?
                        </a>
                    </Col>
                    <Col className='mt-8'>
                        <button className='bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600'>
                            Login
                        </button>
                    </Col>
                    <a
                        href='#'
                        className='flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100'>
                        <Col className='flex px-5 justify-center w-full py-3'>
                            <Col className='min-w-[30px]'>
                                <svg className='h-6 w-6' viewBox='0 0 40 40'>
                                    <path
                                        d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                        fill='#FFC107'
                                    />
                                    <path
                                        d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                                        fill='#FF3D00'
                                    />
                                    <path
                                        d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                                        fill='#4CAF50'
                                    />
                                    <path
                                        d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                        fill='#1976D2'
                                    />
                                </svg>
                            </Col>
                            <Col className='flex w-full justify-center '>
                                <Col
                                    className='whitespace-nowrap text-gray-300 font-bold'
                                    onClick={handleLogin}>
                                    Sign in with Google
                                </Col>
                            </Col>
                        </Col>
                    </a>
                    <Col className='mt-4 flex items-center w-full text-center'>
                        <a
                            href='#'
                            className='text-xs text-gray-300 capitalize text-center w-full'>
                            Don&apos;t have any account yet?
                            <span className='text-gray-300'> Sign Up</span>
                        </a>
                    </Col>
                </Col>
            </Col>
        </Col>
    );
};

export default Login;
