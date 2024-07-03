import React from 'react';
import Navbar from '../Navbar/Navbar';
import './HeaderTitle.css'
const HeaderTitle = () => {
    return (
        <div className='flex justify-between align-center px-5'>
            <Navbar></Navbar>
            <h2 className='name'>6Sense <span>It</span></h2>
            <button className='btn'>Apply Jobs</button>
          
        </div>
    );
};

export default HeaderTitle;