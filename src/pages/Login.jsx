import React, { useState } from 'react'
import shahin2 from "../images/shahin2.png"
import { Link } from 'react-router'

import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";


const Login = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [showPassword, setShowPassword] = useState(false)


  const handleSignIn = () => {
    if (!email) {
      setEmailError('Email required')
    } else {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
      ) {
        setEmailError('Invalid email')
      }
    }
    
    if (!password) {
      setPasswordError('please give your password')
    } else {
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        .test(password)) {
        setPasswordError('password must be one lowercase, one uppercase, one digit, and one special character and length between 8 and 15 characters')
      }
    }
    
    setEmail('')
    setPassword('')

    console.log(email);
    console.log(password);
    
    
  }
  
  return (
      <div>
          <div className='relative md:w-100% mx-30 md:flex justify-between items-center  '>
                        
                        <div className='md:w-1/2 '>
          <h1 className='text-2xl font-bold p-3 '>Login to your account!</h1>
                            <div className=''>
                                <input onChange={(e)=>setEmail(e.target.value)}
                                    className='border-2 m-3 w-100 rounded-sm p-2 '
                                    type="text" placeholder='Email Address' value={email} /> <p className='text-red-600 px-3'>{ emailError }</p>
                                <br />
                                
                                <input onChange={(e) => setPassword(e.target.value)}
              className='border-2 m-3 w-100 rounded-sm p-2 '
              type={showPassword ? 'text' : 'password'}
              placeholder='Password' value={password} />
            <div className='absolute top-43 md:top-76 left-95 md:left-97 '>
              {
                showPassword ?
                  <IoEyeSharp onClick={() => setShowPassword(!showPassword)} />
                  :
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} /> 
              }
            </div>
            
            <p className='text-red-600 px-3'>{passwordError} </p>
                                <br />
                                <button onClick={handleSignIn}
                                    className='border-2 p-2 m-3 cursor-pointer rounded-sm w-50 text-center bg-black text-white hover:bg-white hover:text-black text-xl  ' >Sign in</button>
          </div>
          <div>
            <button className='text-red-600 font-bold cursor-pointer p-3'>Forgot Password</button>
                            <div>
            <p className='p-3'>Don’t have an account ? 
                <Link to={"/registration"}>
                  <span className='text-yellow-800 font-bold p-1 cursor-pointer'> Sign up</span>
                </Link>
              </p>
                       </div>
          
                          </div>
                        </div>
                        <div className='md:w-1/2 '>
                            <img src={shahin2} alt="Registration Image" />
                        </div>
                        
          
                    </div>
    </div>
  )
}

export default Login