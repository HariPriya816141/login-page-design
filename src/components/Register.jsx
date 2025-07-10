import React, { useState } from 'react'
import MobileContainer from '../MobileContainer'
import { Link } from 'react-router-dom';

const Register = () => {
    const [form, setForm] = useState({
        fullname:"Marry Doe",
        phone: "",
        email: "marrydoe@xxx.com",
        password: "Marry Doe",
        company: "Marry Doe",
        isAgency: "yes",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prev) => ({...prev, [name] : value}));
    }
  return (
    
       <MobileContainer>
              <div className='register-container' style={{marginTop:"50px",marginLeft:"15px", marginRight:"15px"}}>
            <h4 style={{marginRight:"30%", fontWeight:"bolder"}}>Create your PopX account</h4>
            <p className='text-secondary' style={{fontSize:"12px", marginRight:"15%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           {/* form start */}
           {["fullname", "phone", "email", "password", "company"].map((field) => (
        <div key={field} style={styles.formGroup}>
            <label htmlFor={field} style={styles.label}>{field === "fullname" ? "Full Name" : field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input id={field} name={field} type={field === "password" ? "password" : "text"}
      placeholder={
        field === "fullName"
          ? "Enter your full name"
          : `Enter your ${field}`
      } value={form[field]} onChange={handleChange} style={styles.input} />
      </div>
        ))}
            
           {/* form end */}
           <div style={{ textAlign: "left", marginTop: "10px" }}>
  Are you an Agency?&nbsp;
  <label>
    <input
      type="radio"
      name="isAgency"
      value="yes"
      checked={form.isAgency === "yes"}
      onChange={handleChange}
      style={{accentColor: "#6134eb"}}
    />{" "}
    Yes
  </label>
  &nbsp;
  <label>
    <input
      type="radio"
      name="isAgency"
      value="no"
      checked={form.isAgency === "no"}
      onChange={handleChange}
      style={{accentColor: "#6134eb"}}
    />{" "}
    No
  </label>
</div>

<Link to='/account'>
<button className="btn" style={styles.registerBtn} >Create Account</button>
</Link>
            </div>
          </MobileContainer>
   
  )
}

export default Register


const styles = {
  formGroup: {
    marginBottom: "10px",
    textAlign: "left",
  },
  label: {
    display: "block",
    fontSize: "12px",
    marginBottom: "4px",
    fontWeight: "500",
    color: "#6134eb",
  },
  input: {
    width: "100%",
    padding: "6px 8px",
    fontSize: "13px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  registerBtn: {
    backgroundColor: "#6134eb",
    color: "white",
    padding: "10px",
    fontSize: "13px",
    border: "none",
    borderRadius: "5px",
    width: "100%",
    marginTop: "15px",
    marginBottom:"10px",
  },
};

