
import { Outlet } from 'react-router-dom';
import Navbar from '../compoments/Navbar';

const AuthLayOut = () => {
    return (
        <div className=' font-poppins bg-[#F3F3F3] text-black'>
            <header className='p-3 w-10/12 mx-auto bg-gray-200 rounded-2xl'>
                <Navbar/>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayOut;