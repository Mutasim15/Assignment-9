import React from 'react';
import img from '../../Components/JobVacancy/images/frontend.png'

const Post = ({postall}) => {

    const {id,name,icon,designation,availablePosts}=postall
   console.log(postall?.icon)
    return (
    
        <div className='flex flex-col border-4 bg-slate-300 border-slate-300 h-40 w-60 m-10 justify-center'>
            <img src={postall.icon} alt="" />
           <p className='font-medium'>{designation}</p>
           {availablePosts}
          </div>


       
    );
};

export default Post;