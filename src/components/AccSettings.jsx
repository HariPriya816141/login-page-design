import React from 'react'
import MobileContainer from '../MobileContainer'
import "./custom.css"
import marryDoePic from '../assets/marrydoe.jpg'

const AccSettings = () => {
  return (
    <MobileContainer>
   <div className="accsettings-container">
       <header style={{borderBottom:"1px solid #ccc", width:"100%", height:"30%", padding:"15px"}}>
        <h6>Account Settings</h6>
       </header>
     <div className="profile-info d-flex" style={{margin:"20px", gap:"20px"}}>
        <div className="profile-img">
            <img src={marryDoePic} alt="" className="profilepic"  />
            <div className="icon"><i className="bi bi-camera-fill"></i></div>
        </div>
        <div className="profile-name">
            <h6 style={{fontSize:"12px"}}>Marry Doe</h6>
            <p style={{fontSize:"10px"}}>Marry@Gmail.com</p>
        </div>
     </div>
     <div className="content" style={{borderBottom:"1px dashed #ccc"}}>
        <p style={{fontSize:"12px", margin:"10px"}}>Lorem ipsum dolor sit amet, adipisicing elit. Nihil sit amet quas doloribus
             sit amet velit <br /> rem sit esse alias quasi, sed vitae!</p>
     </div>
   </div>
    </MobileContainer>
  )
}

export default AccSettings
