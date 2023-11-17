import React, { useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { MyAuthContext } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const { googleLogin, emailLogin } = useContext(MyAuthContext);
  const [data, setData] = useState("");
  const [disable, setDisable] = useState(true);
  const { register, handleSubmit, formState: { errors }, } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    emailLogin(email, password)
      .then(res => {
        console.log(res.user)
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    loadCaptchaEnginge(6); 
  }, [])

  const handleCaptcha = (captchaText) => {
    const user_captcha_value = captchaText;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisable(!disable)
    }
    else {
      console.log('Captcha Does Not Match');
    }
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
                Sign in to your account
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" {...register("email", { required: true })} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                  {errors.email && <span className='text-red-600'>Email is required</span>}
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" {...register("password", { required: true })} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  {errors.password && <span className='text-red-600'>Password is required</span>}
                </div>
                <div>
                  <label class="">
                    <LoadCanvasTemplate />
                  </label>
                  <input onBlur={(e)=> handleCaptcha(e.target.value)} type="text" name="captcha" id="password" placeholder="Type the captcha text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""  />
                </div>
                <button disabled={disable} type="submit" class="w-full text-black bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                <button onClick={hanleGoogle} class="w-full text-black bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in with GOOGLE</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <Link to='/register' class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login