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
                  <ul className='flex justify-end items-center [&>li]:mr-15
                   [&>li:nth-child(1):hover]:text-blue-500 [&>li:nth-child(2):hover]:text-green-500 [&>li:nth-child(3):hover]:text-yellow-500 [&>li:nth-child(4):hover]:text-amber-600  '>
                      <li><Link to="/">Home</Link></li>
                      <li> <Link to="/registration">Registration</Link> </li>
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/useeffect">useEffect</Link></li>

                  </ul>
              </div>
              
          </div>
    </div>
  )
}

export default Navbar