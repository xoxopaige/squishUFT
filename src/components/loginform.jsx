import { Link } from 'react-router-dom';

const LoginForm = () => {

    return(
    <div className='shadow-lg rounded-xl p-12 pt-7 pb-7 bg-white'>
        <div className="font-bold text-4xl">
            <p>Sign In</p>
        </div>
        <form className='mt-5'>
            <label>
                Username:
                <input type="text" name="name" />
            </label>
            <label>
                Password:
                <input type="password" name="name" />
            </label>
            <div className='w-1/2 m-auto'>
                <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 border mt-3 w-full h-full p-2 rounded-full text-white'>Sign in</button>
            </div>
        </form>
        <div className='text-center mt-3'>
            Don't have an account yet? 
            <Link to={'/register'} style={{ color: '#a39fe1' }}> Sign Up </Link>
        </div>
    </div>
    )
}

export default LoginForm;