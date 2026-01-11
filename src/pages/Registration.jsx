import React, { useState } from 'react'
import shahin from "../images/shahin.png"
import { Link } from 'react-router'

const Registration = () => {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const [fullName, setFullName] = useState('')
    const [fullNameError, setFullNameError] = useState('')

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    // we can write these conditions inLine - onChange() sathe
    const handleEmail = (e) => {
        setEmail(e.target.value)
      
    }
    const handleFullName = (e) => {
        setFullName(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    // we must write this function here, NOT inLine, it may automatically SubmitEvent.apply by itself...
    const handleSignUp = () => {
        if (!email) {
            setEmailError('Email required')
        } if(!fullName) {
            setFullNameError('Full name required')
        } if (!password) {
            setPasswordError('valid password required')
        }
        
        
        console.log(email);
        console.log(fullName);
        console.log(password);
        
        
        setEmail('')
        setFullName('')
        setPassword('')
        
    }

  return (
      <div>
          <div className='md:w-100% mx-30 md:flex justify-between items-center  '>
              
              <div className='md:w-1/2 '>
                  <h1 className='text-2xl font-bold p-3 '>Get started with easily register</h1>
                  <div className=''>
                      <input onChange={handleEmail}
                          className='border-2 m-3 w-100 rounded-sm p-2 '
                          type="text" placeholder='Email Address' value={email} /> <p className='text-red-600 px-3'>{ emailError }</p>
                      <br />
                      <input onChange={handleFullName}
                          className='border-2 m-3 w-100 rounded-sm p-2 ' type="text" placeholder='Full Name' value={fullName} /> <p className='text-red-600 px-3'>{fullNameError} </p>
                      <br />
                      <input onChange={handlePassword}
                          className='border-2 m-3 w-100 rounded-sm p-2 ' type="text" placeholder='Password' value={password} /> <p className='text-red-600 px-3'>{passwordError} </p>
                      <br />
                      <button onClick={handleSignUp}
                          className='border-2 p-2 m-3 cursor-pointer rounded-sm w-50 text-center bg-black text-white hover:bg-white hover:text-black text-xl  ' >Sign up</button>
                  </div>
                  <div>
                      <p className='p-3'>Already have an account ?
                          <Link to={"/login"}>
                              <span className='text-yellow-800 font-bold p-1 cursor-pointer'> Sign In </span>
                          </Link> 
                      </p>
                  </div>
              </div>
              <div className='md:w-1/2 '>
                  <img src={shahin} alt="Registration Image" />
              </div>
              

          </div>
      </div>
  )
}

export default Registration