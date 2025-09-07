import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [catagories,setcategory ] =useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then((res)=> res.json())
        .then((data) => setcategory(data.data.news_category));    
    },[])

    // {
    //     "category_id": "01",
    //     "category_name": "Breaking News"
    //   }
    return (
        <div>
            
            <h2 className='font-semibold mb-2'>All category({catagories.length}) </h2>
            <div className='flex flex-col gap-2'>
                {
                    catagories.map((category) =>(
                        
                        <NavLink to={`/category/${category.category_id}`} className='btn' key={category.category_id}>{category.category_name}</NavLink >
                    ))
                }
            </div>
        </div>
    );
};

export default LeftNavbar;