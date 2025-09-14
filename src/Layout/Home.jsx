import React from 'react';
import Header from '../compoments/Header';
import LatestNews from '../compoments/LatestNews';
import Navbar from '../compoments/Navbar';
import LeftNavbar from '../compoments/Layout Component/leftNavbar';
import RightNav from '../compoments/Layout Component/RightNav';
import { Outlet, useNavigate } from 'react-router-dom';
import Loading from '../pages/Loading';



const Home = () => {
    const {state} = useNavigate();
    return (
        <div className='font-poppins w-10/12 mx-auto'>
            <header>
                <Header></Header>
                {import.meta.env.VITE_name}
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className='w-11/12 mx-auto py-2'>
                <Navbar/>
            </nav>
            <main className='w-11/12 mx-auto pt-2 grid md:grid-cols-12'>
                    <aside className='left col-span-3'>
                        <LeftNavbar>
                            
                        </LeftNavbar>
                    </aside>
                    <section className='main col-span-6'>
                       {state == "loading" ?<Loading></Loading>:<Outlet/>}
                    </section>
                    <aside className='right col-span-3'>
                        <RightNav/>
                    </aside>
            </main>
        </div>
    );
};

export default Home;