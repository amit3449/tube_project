import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler= ()=>{
    dispatch(toggleMenu());
  };
  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg '>
      <div className='flex col-span-1'>
        <img 
          onClick={()=>toggleMenuHandler()}
          className='h-8 cursor-pointer'
          alt='menu' src='https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg'
        />
        <img
         className='h-9 mx-1'
         alt='logo' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg'
        />
      </div>
      <div className='col-span-10 ml-14'>
        <input type='text' placeholder='Search' className='w-1/2 border border-gray-700 p-1 rounded-l-full'/>
        <button className='border border-gray-700 px-2 py-1 rounded-r-full bg-gray-100'>
          search
        </button>
      </div>
      <div className='col-span-1'>
        <img
         className='h-8'
         alt= "user " src='https://cdn-icons-png.freepik.com/256/64/64572.png?semt=ais_hybrid'
        />
      </div>
    </div>
  )
}

export default Head