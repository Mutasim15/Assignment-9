import React from 'react';
// import img from './image/img.png'
import img from './image/Formal.jpg'
import './image/introduction.css'
const Introduction = () => {
    return (
        <div className='md:flex ml-14 mt-10 items-center pr-3'>
            <div className='w-1/2 '>
                  <h3 className='text-6xl w-96 h-48'>One Step Closer To Your <span className='text-violet-400'>Dream Job</span></h3>
                  <p className=' w-80 h-90'>Explore thousands of job opportunities with all the information you need. 
                    Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn'>Get Stated</button>
            </div>
            <div className='w-1/2'>
              <img className='' src={img} alt="" />
            </div>
        </div>
    );
};

export default Introduction;