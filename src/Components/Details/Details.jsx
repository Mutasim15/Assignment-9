import React from 'react';
import './Details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
const Details = ({job}) => {
    const {_id,title,name,salary,email,phone,work_type,location,job_Description,logo,educationalRequirements,jobResponsibilities,job_Experience,role}=job
    console.log(title)
    return (
        <div className='border-0 m-2 bg-slate-100 h-80'>
            <h2 id='h2' className='text-xl font-mono mx-4'>{title}</h2>
            <img src={logo} alt="" className='w-32'/>
             <h3 id='h3' className='mx-4'>{name}</h3>
             <button className='button'>Remote</button> <button className='button'>OFfline</button>
             <p className='p-1'></p>
             <span className='pl-4 pt-8'>  <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> {location}</span>
             <p></p>
             {/* <button onClick={ handleNavigation } className='button '>View Details</button> */}
             <Link to={`/jobdetail/${_id}`} > <button className='button'>Show me Details</button> </Link>

        </div>
    );
};

export default Details;