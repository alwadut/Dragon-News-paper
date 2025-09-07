import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-semibold'>Login With</h1>
            <div className='flex flex-col gap-2'>
                <button className='btn flex items-center gap-4 border-sky-200'><FaGoogle /> Sign In With Google </button>
                <button  className='btn flex items-center gap-4 border-sky-200'><FaGithub/> Sign In With GitHub</button>
                
                          
            </div>
        </div>
    );
};

export default SocialLogin;