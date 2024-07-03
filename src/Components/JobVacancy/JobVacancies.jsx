import React from 'react';
import Post from '../Post/Post';
import img1 from './images/frontend.png'
const JobVacancies = () => {
    const jobVacancies = [
        {
            id: 1,
            name: "Frontend Developer",
            // icon: "img1",
            designation: "Frontend Developer",
            availablePosts: "30 jobs available" 
        },
        {
            id: 2,
            name: "Backend Developer",
            // icon: "backend.png",
            designation: "Backend Developer",
            availablePosts: "20 jobs available"
        },
        {
            id: 3,
            name: "Full Stack Developer",
            // icon: "fullstack.png",
            designation: "Full Stack Developer",
            availablePosts: "40 jobs available"
        },
        {
            id: 4,
            name: "UI/UX Designer",
            // icon: "ront-end.png",
            designation: "UI/UX Designer",
            availablePosts: "10 jobs available"
        }
    ];
    
    return (
        <div>
             <div >
             <h2 className='text-2xl font-bold py-10 '>Job Category List</h2>
              <p className='pb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
             </div>
              <div className="md:flex" >
              {
                jobVacancies.map(post=><Post
                key={post.id}
                postall={post}
                
                ></Post>)
              }
              </div>
            
        </div>
    );
};

export default JobVacancies;