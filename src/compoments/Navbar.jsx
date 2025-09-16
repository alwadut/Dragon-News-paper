import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    return (
        <div className='flex justify-between items-center'>
           <div>{user && user.email}</div>
           <div className='nav space-x-5'>
            <Link to={'/'}>Home</Link>
            <Link to={'/career'}>Career</Link>
            <Link to={'/about'}>About</Link>
           </div>
           <div className='signIn flex gap-2 items-center'>
            <div>
                <img className='w-12 rounded-full ' src={user ?user.photoURL:user} alt="" />
            </div>
            {
                user && user?.email? <button onClick={logOut} className='btn btn-primary'>Log Out </button> : (<Link to='/auth/login' className='btn btn-primary'>Sign In </Link>)
            }
            
           </div>
        </div>
    );
};

export default Navbar;