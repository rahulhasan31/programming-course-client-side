import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
   const courses= useLoaderData()
    return (
        <div>
            <h1>done</h1>
            {
                courses.map(course=> <Course 
                    course={course}
                    key={course._id}
                ></Course> )
            }
        </div>
    );
};

export default Courses;