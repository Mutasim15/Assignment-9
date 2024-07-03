import React from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const jobs = [
        {
          id: 1,
          logo: "https://example.com/logo1.png",
          title: "Software Engineer",
          name: "Tech Innovators Ltd.",
          work_type: "Fulltime",
          location: "Dhaka, Bangladesh",
          job_Description:'Develop and maintain the user interface .Optimize web pages for maximum speed and scalability,Ensure the technical feasibility of UI/UX designs. Collaborate with backend developers and web designers to improve usability. Assist in maintaining the companys branding',
          job_Experience: "Proficiency in HTML, CSS, JavaScript, and modern frontend frameworks (e.g., React, Angular, Vue)Experience with responsive and adaptive design,Familiarity with browser testing and debugging,Understanding of key design principles,Knowledge of SEO principles",
          educationalRequirements: "BSC Engineering in Computer Science ",
          jobResponsibilities: "Develop and maintain the user interface ,Optimize web pages for maximum speed and scalability ,Ensure the technical feasibility of UI/UX designs ,Collaborate with backend developers and web designers to improve usability ,Create quality mockups and prototypes ,Assist in maintaining the company's branding"
        
        },
        {
          id: 2,
          logo: "https://example.com/logo2.png",
          title: "Web Developer",
          name: "NextGen Solutions",
          work_type: "Remote",
          location: "Dhaka, Bangladesh",
          job_Description:'Develop and maintain the user interface .Optimize web pages for maximum speed and scalability,Ensure the technical feasibility of UI/UX designs. Collaborate with backend developers and web designers to improve usability. Assist in maintaining the companys branding',
          job_Experience: "Proficiency in HTML, CSS, JavaScript, and modern frontend frameworks (e.g., React, Angular, Vue)Experience with responsive and adaptive design,Familiarity with browser testing and debugging,Understanding of key design principles,Knowledge of SEO principles",
          educationalRequirements: "BSC Engineering in Computer Science ",
          jobResponsibilities: "Develop and maintain the user interface ,Optimize web pages for maximum speed and scalability ,Ensure the technical feasibility of UI/UX designs ,Collaborate with backend developers and web designers to improve usability ,Create quality mockups and prototypes ,Assist in maintaining the company's branding"
        },
        {
          id: 3,
          logo: "https://example.com/logo3.png",
          title: "UX Designer",
          name: "SmartTech Bangladesh",
          work_type: "Fulltime",
          location: "Chittagong, Bangladesh",
          job_Description:'Develop and maintain the user interface .Optimize web pages for maximum speed and scalability,Ensure the technical feasibility of UI/UX designs. Collaborate with backend developers and web designers to improve usability. Assist in maintaining the companys branding',
          job_Experience: "Proficiency in HTML, CSS, JavaScript, and modern frontend frameworks (e.g., React, Angular, Vue)Experience with responsive and adaptive design,Familiarity with browser testing and debugging,Understanding of key design principles,Knowledge of SEO principles",
          educationalRequirements: "BSC Engineering in Computer Science ",
          jobResponsibilities: "Develop and maintain the user interface ,Optimize web pages for maximum speed and scalability ,Ensure the technical feasibility of UI/UX designs ,Collaborate with backend developers and web designers to improve usability ,Create quality mockups and prototypes ,Assist in maintaining the company's branding"
        },
        {
          id: 4,
          logo: "https://example.com/logo4.png",
          title: "Data Analyst",
          name: "Digital Innovators",
          work_type: "Remote",
          location: "Sylhet, Bangladesh",
          job_Description:'Develop and maintain the user interface .Optimize web pages for maximum speed and scalability,Ensure the technical feasibility of UI/UX designs. Collaborate with backend developers and web designers to improve usability. Assist in maintaining the companys branding',
          job_Experience: "Proficiency in HTML, CSS, JavaScript, and modern frontend frameworks (e.g., React, Angular, Vue)Experience with responsive and adaptive design,Familiarity with browser testing and debugging,Understanding of key design principles,Knowledge of SEO principles",
          educationalRequirements: "BSC Engineering in Computer Science ",
          jobResponsibilities: "Develop and maintain the user interface ,Optimize web pages for maximum speed and scalability ,Ensure the technical feasibility of UI/UX designs ,Collaborate with backend developers and web designers to improve usability ,Create quality mockups and prototypes ,Assist in maintaining the company's branding"
        }
      ];
      

    return (
        <>
        <div className='text-center'> 
            <h2 className='text-2xl font-bold py-10'>Geatured Jobs</h2>
            <p className='pb-5 flex-wrap'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className='grid grid-cols-2 mx-12'>
            {
                jobs.map(job=><Job
                key={job.id}
                job={job}
                ></Job>)
            }
        </div>
        
        <div className='text-center p-4'><button className='btn px-2'>See All</button></div>
        </>
    );
};

export default FeaturedJobs;