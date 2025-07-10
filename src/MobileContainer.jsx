import React from 'react'

const MobileContainer = ({children, centerContent = false}) => {
    const styles ={
    phoneContainer: {
      maxWidth: "275px",
      minHeight: "88vh",
      margin: "20px auto",
      border: "1px solid #ccc",
      borderRadius: "10px",
      display: centerContent ? "flex" : "block",
      justifyContent: centerContent ? "center" : "unset",
      alignItems: centerContent ? "center" : "unset",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },

    inner: {
        width: "100%",
        
    },
};
  return (
    <div style={styles.phoneContainer}>
        <div style={styles.inner}>{children}</div>
      
    </div>
  )
}

export default MobileContainer




