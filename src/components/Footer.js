import React from 'react';

const Footer = () => {
  return (
    <div style={styles.footerContainer}>
      <button style={styles.footerButton}>
        &lt;footer/&gt;
      </button>
    </div>
  );
};

const styles = {
  footerContainer: {
    textAlign: 'left',        
    paddingLeft: '20px',       
    marginTop: '20px',         
  },
  footerButton: {
    color: 'white',         
    borderRadius: '15px',     
    border: 'none',           
    padding: '10px 20px',    
    fontWeight: 'bold',      
    cursor: 'pointer',        
  },
};

export default Footer;
