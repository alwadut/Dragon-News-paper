import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { auth } from '../provider/AuthProvider';

const SocialLogin = e => {
    const provider = new GoogleAuthProvider()
  const signInWithGoogle =()=>{
    signInWithPopup(auth,provider)
    .then(result =>{
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    })
  }

    return (
        <div>
            <h1 className='font-semibold'>Login With</h1>
            <div className='flex flex-col gap-2'>
                <button onClick={signInWithGoogle} className='btn flex items-center gap-4 border-sky-200'><FaGoogle /> Sign In With Google </button>
                <button  className='btn flex items-center gap-4 border-sky-200'><FaGithub/> Sign In With GitHub</button>
                
                          
            </div>
        </div>
    );
};

export default SocialLogin;