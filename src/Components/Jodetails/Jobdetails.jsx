import React from 'react';
import {  Link, useLoaderData, useParams } from 'react-router-dom';

import jobData from '../../../public/chatgpt.json';
import './Jobdetails.css'



function Jobdetails ()  {
 
    // const jobdetailId =useParams();
    // const id =jobdetailId.jobdetailId
     // console.log(jobdetailId.jobdetailId)
    const { jobdetailId } =useParams();
 
    const data =useLoaderData();
   
    const filteredJob = jobData?.filter(job => job._id == jobdetailId);
    console.log(filteredJob[0]._id)

    return (
       <div className='flex flex-row '>
         <div className='boundary'>
            <h3 className='text-center'>Job Details --{jobdetailId} </h3>
            <h3 className='h2'>{filteredJob[0].title}</h3>
            <p><span className='h2'>Job Description:</span>{filteredJob[0].jobDescription}</p>
            <p><span className='h2'>Job Responsibility:</span>{filteredJob[0].jobResponsibilities}</p>
            <p><span className='h2'>Educational Requirement:</span>{filteredJob[0].educationalRequirement}</p>
            <p><span className='h2'>Experience:</span>{filteredJob[0].Experience}</p>

        </div>
        <div className="flex flex-col align-center justify-center">
        <div className='cart'>
        <h3 className='h2'>JOB DETAILS </h3>
            <h3><span className='h2'>Salary: </span>{filteredJob[0].salary}</h3>
            <h3><span className='h2'>Job Title:</span>{filteredJob[0].title}</h3>
            <h2><span className='h2'>Contact Information</span></h2>
            <hr />
            <h3><span className='h2'>Phone:</span>{filteredJob[0].phone}</h3>
            <h3><span className='h2'>Email:</span>{filteredJob[0].email}</h3>
            <h3><span className='h2'>Address:</span>{filteredJob[0].location}</h3>
            
        </div>
        <div>
             <Link to={`/applyjobs/${filteredJob[0]._id}`} > <button className='btn'>Applied Now</button> </Link>
        </div>    
         
         </div>   
       </div>
    );
};

export default Jobdetails;