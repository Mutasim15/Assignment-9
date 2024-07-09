import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar/Navbar'
// import Header from './Components/Header/Header'
import Introduction from './Components/Introduction/Introduction'
import './App.css'
import JobVacancies from './Components/JobVacancy/JobVacancies'
import FeaturedJobs from './Components/Featured Jobs/FeaturedJobs'
import HeaderTitle from './Components/HeaderTitle/HeaderTitle'
import { useLoaderData } from 'react-router-dom'
import Details from './Components/Details/Details'



function App() {
  
const data =useLoaderData()
console.log(data);

  return (
    <>
      {/* <div className='layout'>

     <HeaderTitle></HeaderTitle>
     
      </div> */}
      <Introduction></Introduction>
     <div className='text-center'>
     <JobVacancies></JobVacancies>
     {/* <Post></Post> */}
     </div>
     <div className='text-center'> 
            <h2 className='text-2xl font-bold py-10'>Featured Jobs</h2>
            <p className='pb-5 flex-wrap'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
     <div>
      {/* <FeaturedJobs></FeaturedJobs> */}
      <div className='grid grid-cols-2 mx-12'>
      {
        data?.map(job=> <Details
        key={job._id}
        job={job}
        ></Details>)
      }

      </div>
      
     </div>
     <div className='text-center p-4'><button className='btn px-2'>See All Jobs</button></div>
     
    </>
  )
}

export default App
