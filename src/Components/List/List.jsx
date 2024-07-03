import React from 'react';
import { Link } from 'react-router-dom';

const List = ({route}) => {
    return (
        <div>
         
       <li className='mr-12 hover:bg-lime-600 text-orange-900 rounded font-bold px-2'>
        {
            <Link to={route.path}>{route.name}</Link>
        }
      </li>
        </div>
     
    );
};

export default List;