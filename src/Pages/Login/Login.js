import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))

    }

    return (
        <section className='bg w-full lg:max-w-screen-2xl mx-auto my-5 p-10'>
            <h2 className='text-center w-1/5 mx-auto mb-5 font-bold text-3xl border border-gray-500 rounded-lg py-4'>LOGIN</h2>
            <form onSubmit={handleLogin}>
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Email
                    </span>
                    <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-xl border-black placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                </label>
                <label className="block my-6">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Password
                    </span>
                    <input type="password" name="password" className="mt-1 px-3 py-2 bg-white border shadow-xl border-black placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="password123456" />
                </label>
                <label className="block">
                    <input type="submit" className="px-3 py-2 shadow-xl block w-2/5 bg-gray-900 text-white font-semibold text-xl hover:bg-gray-500 hover:text-black ease-in duration-300 border border-slate-500 mx-auto rounded-md" value="Login" />
                </label>
            </form>
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400">OR</span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div>
                <button className='bg-white border border-gray-600 hover:bg-green-600 ease-in duration-300 px-4 py-2 rounded-xl font-semibold flex items-center mx-auto'>
                    <img src={google} alt="" />
                    <span className='ml-2'>Google</span>
                </button>
            </div>
            <div className='text-center mt-5'>
                <p>Didn't have any account? <Link to='/signup' className='font-semibold underline underline-offset-4 text-blue-700'>Signup</Link></p>
            </div>
        </section>
    );
};

export default Login;