import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories]= useState([])

    useEffect(()=>{
        fetch('https://programming-course-server.vercel.app/course')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className='mt-5  '>
          
            
            {
            categories.map(category=> <p className='shadow-lg p-3 mb-5 bg-body rounded ' key={category._id}>
                <Link className='text-decoration-none fw-bolder'  to={`/course/${category._id}`}>{category.title}</Link>
                   
            </p>)

            }
        </div>
    );
};

export default LeftSide;