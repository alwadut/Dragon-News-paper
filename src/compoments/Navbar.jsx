import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
           <div></div>
           <div className='nav space-x-5'>
            <Link to={'/'}>Home</Link>
            <Link to={'/career'}>Career</Link>
            <Link to={'/about'}>About</Link>
           </div>
           <div className='signIn flex gap-2 items-center'>
            <div>
                <img src={user} alt="" />
            </div>
            <button>Sign In </button>
           </div>
        </div>
    );
};

export default Navbar;