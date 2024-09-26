import React from 'react';
import { FaLeaf } from 'react-icons/fa'; 

const Banner = () => {
  return (
    <nav style={styles.navbar}>
      <button style={styles.bannerButton}>
        &lt;Banner/&gt;
      </button>
      <div style={styles.titleContainer}>
        <FaLeaf style={styles.icon} /> 
        <span style={styles.titleText}>La maison jungle</span>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',         
    justifyContent: 'space-between', 
    alignItems: 'center',     
    border: '1px solid red',  
    padding: '10px',         
  },
  bannerButton: {
    backgroundColor: 'red',   
    color: 'white',         
    borderRadius: '15px',     
    border: 'none',           
    padding: '10px 20px',    
    fontWeight: 'bold',       
    cursor: 'pointer',         
  },
  titleContainer: {
    display: 'flex',          
    alignItems: 'center',     
  },
  titleText: {
    marginLeft: '10px',        
    fontWeight: 'bold',    
    fontSize: '20px',       
  },
  icon: {
    color: 'green',           
    fontSize: '24px',         
  },
};

export default Banner;
