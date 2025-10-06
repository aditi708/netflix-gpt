import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_large.jpg" alt="background"/>
        </div>
        <form className='w-4/12 absolute p-12 bg-black my-36 left-0 right-0 mx-auto text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (<input type="text" placeholder='Full Name' className="p-2 my-4 w-full bg-gray-800 bg-opacity-70 border-2 rounded"/>)}
            <input type="text" placeholder='Email address' className="p-2 my-4 w-full bg-gray-800 bg-opacity-70 border-2 rounded"/>
            
            <input type="password" placeholder='Password' className="p-2 my-4 w-full bg-gray-800 bg-opacity-70 border-2 rounded"/>
            <button className='p-4 my-6 bg-red-700 w-full rounded'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className=' text-center'>OR</p>
            <p className=' p-2 my-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login
