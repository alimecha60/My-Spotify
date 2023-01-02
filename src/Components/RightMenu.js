import React from 'react'
import {  FaBell, FaCogs, FaCrown, FaRegHeart, FaSun } from 'react-icons/fa'
import '../styles/RightMenu.css'
import Profile from '../img/profile.jpg'
const RightMenu = () => {
  return (
    <div className='rightMenu'>
      <div className='goPro'>
        <i>
          <FaCrown/>
          <p>
          go
          <span>
            Pro
          </span>
        </p>
        </i>
        <i>
          <FaBell/>
        </i>
        <i>
          <FaRegHeart/>
        </i>
       
      </div>
      <div className='profile'>
        <i>
      <FaSun/>
        </i>
        <i>
          <FaCogs/>
        </i>
        <div className='profileImage'>
          <img src={Profile} />
        </div>
      </div>
    </div>
  )
}

export {RightMenu} 
