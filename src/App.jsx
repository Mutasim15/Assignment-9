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


function App() {
  

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
     <div className=''>
      <FeaturedJobs></FeaturedJobs>
     </div>
     
    </>
  )
}

export default App
