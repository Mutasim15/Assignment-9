import React, { useState } from 'react';
import List from '../List/List';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
    const [open,setOpen]= useState(false)
    const routes = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Statistics",
            path: "/statistics"
        },
        {
            id: 3,
            name: "Applied Jobs",
            path: "/appliedjobs"
        },
        {
            id: 4,
            name: "Blog",
            path: "/blog"
        },
   
    ];
    return (
        <nav >
        
            <div onClick={()=>setOpen(!open)} className='md:hidden'>
                <span>{open===true?
                // <Bars3Icon className="size-6 text-black-500"></Bars3Icon>:
                <XMarkIcon className="size-6 text-black-500"></XMarkIcon>
                : <Bars3Icon className="size-6 text-black-500"></Bars3Icon>
                }</span>
              
               
            </div>
         <ul className={`md:flex absolute md:static  duration-500 pl-6 pb-2 py-2 ${open? 'top-6' :'-top-40'}`}>
         {
            routes.map(route=><List
            key={route.id}
            route={route}
            ></List>)
          }
         </ul>
        </nav>
    );
};

export default Navbar;