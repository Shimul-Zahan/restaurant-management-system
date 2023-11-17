import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { MyAuthContext } from '../Context/AuthContext';
import { updateProfile } from 'firebase/auth';

const Registration = () => {

    const { createUser, emailLogin } = useContext(MyAuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        const name = data.name;
        const password = data.password;
        const photoURL = data.photoURL;
        const email = data.email;

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                updateProfile((user), {
                    displayName: name,
                    photoURL: photoURL,
                })
                    .then(res => {
                        console.log(user)
                        navigate('/');
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    const hanleGoogle = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <section class="bg-gray-100 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign up to your account
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)} class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input type="text" {...register("name", { required: true })} name="name" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" />
                                    {errors.name && <span className='text-red-600'>Name is required</span>}
                                </div>
                                <div>
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Photo URL</label>
                                    <input type="text" {...register("photoURL", { required: true })} name="photoURL" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://abc.jpg" />
                                    {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" {...register("email", { required: true })} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                    {errors.email && <span className='text-red-600'>Email is required</span>}
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" {...register("password", { required: true })} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {errors.password && <span className='text-red-600'>Password is required</span>}
                                </div>
                                <button type="submit" class="w-full text-black bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <button onClick={hanleGoogle} class="w-full text-black bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in with GOOGLE</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account yet? <Link to='/login' class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Registration