import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const pages = ["/", "/login", "/register", "/account"];

const BottomNav = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 4;
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = pages.indexOf(location.pathname);

    const goToNext = () => {
    const nextIndex = (currentIndex + 1) % pages.length; 
    navigate(pages[nextIndex]);
  };

    const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + pages.length) % pages.length; // Circular prev
    navigate(pages[prevIndex]);
  };

  return (
    <div style={styles.bottomNav}>
      
       <i
        className="bi bi-house-door-fill"
        style={styles.icon}
        onClick={() => navigate("/")}
      ></i>
      
        <button onClick={goToPrev} style={styles.navBtn}>
        &lt;
      </button>
      <span style={styles.page}>
        {currentIndex + 1} / {pages.length}
      </span>
      <button onClick={goToNext} style={styles.navBtn}>
        &gt;
      </button>
    </div>
  );
};

export default BottomNav

const styles = {
  bottomNav: {
     position: "fixed",
    bottom:1,
    left: 0,
    right: 0,
    maxWidth: "230px",
    margin: "0 auto",
    background: "#fff",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    
    fontSize: "12px",
    zIndex: 1000,
  },
  icon: {
    fontSize: "20px",
    cursor: "pointer",
    color: "#ccc",
  },
   navBtn: {
    background: "transparent",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    color: "#6A0DAD",
    fontWeight: "bold",
  },
  page: {
    fontSize: "13px",
    color: "#555",
  },
};

