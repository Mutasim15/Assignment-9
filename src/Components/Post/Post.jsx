import React from 'react';


const Post = ({postall}) => {

    const {id,name,icon,designation,availablePosts}=postall
   console.log(id)
    return (
    
        <div className='flex flex-col border-4 bg-slate-300 border-slate-300 h-40 w-60 m-10 justify-center'>
            <img src='img' alt="" />
           <p className='font-medium'>{designation}</p>
           {availablePosts}
          </div>


       
    );
};

export default Post;