import React from 'react'
import MobileContainer from '../MobileContainer'
import "./custom.css"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <MobileContainer>
        <div className='login-container' style={{marginTop:"50px", marginLeft:"15px", marginRight:"15px"}}>
      <h4 style={{marginRight:"30%", fontWeight:"bolder"}}>Sign-in to your PopX account</h4>
      <p className='text-secondary' style={{fontSize:"12px", marginRight:"15%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <fieldset style={{marginTop:"20px"}}>
        <legend style={{color:"#6134eb", fontSize:"13px"}}>Email Address</legend>
        <input type="text" placeholder='Enter your Email Address' className='custom-input' />
      </fieldset>
       <fieldset>
        <legend style={{color:"#6134eb", fontSize:"13px"}}>Password</legend>
        <input type="password" placeholder='Enter your password' className='custom-input' />
      </fieldset>
      <Link to='/account'>
      <button className="btn btn-primary" style={{width:"100%", }}>Login</button></Link>
      </div>
    </MobileContainer>
  )
};

export default Login