import React from 'react'
import { Link } from 'react-router-dom'
import MobileContainer from '../MobileContainer'

const Welcome = () => {
  return (
    <MobileContainer centerContent={true}>
   <div className="welcome-container" style={{marginTop:"100%", paddingTop:"100px", marginLeft:"15px", marginRight:"15px"}}>
       <h4>Welcome to PopX</h4>
      <p className='text-secondary' style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, molestias?</p>
      <Link to={'/register'}>
      <button className="btn mb-2" style={{width:"100%", backgroundColor:"#6134eb", color:"#fff", border:"none", fontSize:"13px"}}>Create Account</button>
      </Link>
      <br/>
      <Link to='/login'>
      <button className="btn" style={{width:"100%", backgroundColor:"#baace6", color:"#000", border:"none", fontSize:"13px"}}>Already Registered? Login</button>
      </Link>
   </div>
    </MobileContainer>
  )
}

export default Welcome
