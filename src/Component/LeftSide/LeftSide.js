import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/course')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h2>{categories.length}</h2>
            
            {
            categories.map(category=> <p key={category._id}>
                <Link to={`/course/${category._id}`}>{category.title}</Link>
                   
            </p>)

            }
        </div>
    );
};

export default LeftSide;