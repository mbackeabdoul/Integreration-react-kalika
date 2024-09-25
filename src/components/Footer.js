import React from 'react';

const Footer = () => {
  return (
    <div style={styles.footerContainer}>
      <button style={styles.footerButton}>
        &lt;footer /&gt;
      </button>
    </div>
  );
};

const styles = {
  footerContainer: {
    textAlign: 'left',        
    padding: '20px',           
    marginTop: '40px',           
  },
  footerButton: {
    backgroundColor: '#28a745', 
    color: 'white',             
    borderRadius: '15px',        
    border: 'none',             
    padding: '10px 20px',        
    fontWeight: 'bold',          
    cursor: 'pointer',         
  },
};

export default Footer;
