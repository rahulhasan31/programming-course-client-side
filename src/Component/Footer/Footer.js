import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-teal-400 '>
       
       <footer className='px-4 divide-y bg-success p-2 text-dark bg-opacity-50  text-gray-800 drop-shadow-2xl shadow-lg p-3 mb-5 bg-body rounded '>
      <div className='container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0 ' >
        <div className='lg:w-1/3'>
          <Link className=' text-decoration-none flex justify-center space-x-3 lg:justify-start'>
            <div className='flex items-center justify-center w-12 h-12 rounded-full bg-cyan-200'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
                fill='currentColor'
                className='d-flex-shrink-0 w-5 h-5 rounded-full text-cyan-600 text-decoration-non'
              >
                <path d='M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z'></path>
              </svg>
            </div>
            <span className=' text-decoration-non self-center text-2xl font-semibold'>
            Programming Future
            </span>
          </Link>
        </div>
       
      </div>
      <div className='py-6 text-sm text-center text-gray-400'>
        © 2022 Programming Future Inc. All rights reserved.
      </div>
    </footer>
          
        </div>
    );
};

export default Footer;