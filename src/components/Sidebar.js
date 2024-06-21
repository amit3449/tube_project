import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
  //Early Return pattern
  if(!isMenuOpen) return null;
  return (
    <div className='mx-2 p-2 w-48 shadow-lg'>
      <ul>
        <li className='flex'>
          <img src='https://cdn.vectorstock.com/i/1000v/87/37/home-icon-logo-design-simple-house-vector-36658737.jpg' 
          alt='home'
          className='h-8'
          />
          Home
        </li>
        <li className='flex'>
        <img src='https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png' 
          alt='home'
          className='h-8'
          />
          Shorts
        </li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Musics</li>
        <li>Sports</li>
        <li>News</li>
        <li>Namaste React</li>
      </ul>
      <h1 className='font-bold pt-5'>You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
    </div>
  )
}

export default Sidebar