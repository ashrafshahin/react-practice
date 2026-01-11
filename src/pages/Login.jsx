import React, { useState } from 'react'
import shahin from "../images/shahin.png"

const Login = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleSignIn = () => {
    if (!email) {
      setEmailError('Email required')
    } if (!password) {
      setPasswordError('')
    } if (!password) {
      setPasswordError('please give your password')
    }
    console.log(email);
    console.log(password);
    
    
  }
  
  return (
      <div>
          <div className='md:w-100% mx-30 md:flex justify-between items-center  '>
                        
                        <div className='md:w-1/2 '>
          <h1 className='text-2xl font-bold p-3 '>Login to your account!</h1>
                            <div className=''>
                                <input onChange={(e)=>setEmail(e.target.value)}
                                    className='border-2 m-3 w-100 rounded-sm p-2 '
                                    type="text" placeholder='Email Address' value={email} /> <p className='text-red-600 px-3'>{ emailError }</p>
                                <br />
                                
                                <input onChange={(e) => setPassword(e.target.value)}
                                    className='border-2 m-3 w-100 rounded-sm p-2 ' type="text" placeholder='Password' value={password} /> <p className='text-red-600 px-3'>{passwordError} </p>
                                <br />
                                <button onClick={handleSignIn}
                                    className='border-2 p-2 m-3 cursor-pointer rounded-sm w-50 text-center bg-black text-white hover:bg-white hover:text-black text-xl  ' >Sign in</button>
          </div>
          <div>
            <button className='text-red-600 font-bold cursor-pointer p-3'>Forgot Password</button>
                            <div>
            <p className='p-3'>Don’t have an account ? 
              <span className='text-yellow-800 font-bold p-1 cursor-pointer'> Sign up</span></p>
                       </div>
          
                          </div>
                        </div>
                        <div className='md:w-1/2 '>
                            <img src={shahin} alt="Registration Image" />
                        </div>
                        
          
                    </div>
    </div>
  )
}

export default Login