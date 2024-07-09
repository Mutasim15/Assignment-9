import React from 'react';
import appliedjob from '../../../public/chatgpt.json'
import { useLoaderData, useParams } from 'react-router-dom';

// console.log(appliedjob)

const Appliedjobs = () => {
// const { jobdetailId }= useParams();
// console.log(appliedjob)
// const apply = useLoaderData();
// console.log(apply[0])
// const addedjob =appliedjob?.filter(job=>job._id==jobdetailId)
// console.log(addedjob)
    return (
        <div>
            <h3>The Job that uou are Applied </h3>
        </div>
    );
};

export default Appliedjobs;