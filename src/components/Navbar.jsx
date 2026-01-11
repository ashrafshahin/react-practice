import React from 'react'

import shahin from "../images/shahin.png"
import { Link } from 'react-router'

const Navbar = () => {
  return (
      <div>
          <div className=' flex justify-between items-center p-5 bg-black/80 text-white text-[20px] font-bold mb-4 '>
              <div className=''>
                  {/* <img className='w-[80px] rounded-full' src={shahin} alt="" /> */}
              </div>
              <div className='w-1/2'>
                  <ul className='flex justify-end items-center'>
                      <li className='mr-10'><Link to="/">Home</Link></li>
                      <li className='mr-10'> <Link to="/registration">Registration</Link> </li>
                      <li className='mr-10'><Link to="/login">Login</Link></li>

                  </ul>
              </div>
              
          </div>
    </div>
  )
}

export default Navbar