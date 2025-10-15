import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


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
      <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

      {user && <div className='flex p-2'>
        <img className="w-12 h-12 rounded-lg" alt="usericon" src="https://occ-0-2152-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTvTV1d97HoOuutIG9GUEJgNIhg89JU3EQmtIikzdqolTLHSDqxwytfl61TC-HlrVt7QrzxdB5xR3nD2CPKNL9TF3qKTmcI.png?r=cad"></img>
        
        <button className='p-2 text-white font-bold' onClick={handleSignOut}>(Sign Out)</button>
      </div>}
      
    </div>
  )
}

export default Header
