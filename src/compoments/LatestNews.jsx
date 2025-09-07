import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className='flex gap-2 bg-base-200 p-2'>
            <p className='bg-[#d72050] px-3 py-1'>Latest</p>
            <Marquee pauseOnHover={true} speed={100} className='space-x-10'>
                <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, soluta.</Link>
                <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, soluta.</Link>
                <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, soluta.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;