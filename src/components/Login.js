import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    };

    const name = useRef(null);
    const email= useRef(null);
    const password = useRef(null);

    const handleButtonClick = () =>{
        const message = checkValidData(email.current.value,password.current.value);

        setErrorMessage(message);

        if(message) return;

        // SignIn / signUp
        if(!isSignInForm){
            //SignUp logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                        }).then(() => {
                        // Profile updated!
                        // ...
                        }).catch((error) => {
                         setErrorMessage(error.message);
                        });
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    setErrorMessage(errorCode + "-" + errorMessage);
                    // ..
                });
        }else{
            //SignIn Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });

        }    
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_large.jpg" alt="background"/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-4/12 absolute p-12 bg-black my-36 left-0 right-0 mx-auto text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm && (<input ref={name} type="text" placeholder='Full Name' className="p-2 my-4 w-full bg-gray-800 bg-opacity-70 border-2 rounded"/>)}

            <input ref={email} type="text" placeholder='Email address' className="p-2 my-4 w-full bg-gray-800 bg-opacity-70 border-2 rounded"/>
            
            <input ref={password} type="password" placeholder='Password' className="p-2 my-4 w-full bg-gray-800 bg-opacity-70 border-2 rounded"/>
            {}
            <p className='py-2 font-bold text-lg text-red-500'>{errorMessage}</p>

            <button className='p-4 my-6 bg-red-700 w-full rounded' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

            <p className=' text-center'>OR</p>

            <p className=' p-2 my-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login
