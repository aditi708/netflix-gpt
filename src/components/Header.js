import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { USER_AVATAR } from '../utils/constant';
import { LOGO } from '../utils/constant';


const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () =>{
        signOut(auth).then(() => {

        }).catch((error) => {
            navigate("/error");
        });
    }

  return (
    <div className=' w-screen absolute px-8 py-2  bg-gradient-to-b from-black z-10 justify-between flex'>
      <img className="w-44" src={LOGO} alt="logo" />

      {user && <div className='flex p-2'>
        <img className="w-12 h-12 rounded-lg" alt="usericon" src={USER_AVATAR}></img>
        
        <button className='p-2 text-white font-bold' onClick={handleSignOut}>(Sign Out)</button>
      </div>}
      
    </div>
  )
}

export default Header
