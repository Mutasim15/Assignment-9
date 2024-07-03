import React from 'react';
import './Job.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
const Job = ({job}) => {
    const {id,name,title,logo,worktype,location,job_Description ,job_Experience,educationalRequirements,jobResponsibilities}= job
    return (
        <div className='border-0 m-2 bg-slate-100 h-80'>
             <h2 id='h2' className='text-xl font-mono mx-4'>{title}</h2>
             <h3 id='h3' className='mx-4'>{name}</h3>
             <button className='button'>Remote</button> <button className='button'>OFfline</button>
             <p className='p-1'></p>
             <span className='pl-4 pt-8'>  <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> {location}</span>
             <p></p>
             <button className='button '>View Details</button>
             {/* <div className="hidden">
                <div>
                    {job_Description}
                </div>
             </div> */}
            
        </div>
    );
};

export default Job;