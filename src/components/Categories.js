import React from 'react';

const Categories = () => {
  return (
    <div style={styles.container}>
      <select style={styles.select}>
        <option value="">---</option>
        <option value="indoor">Plantes d'intérieur</option>
        <option value="outdoor">Plantes d'extérieur</option>
      </select>
      
      <button type="button" style={styles.button}>Réinitialiser</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
    border: '2px solid yellow',
    padding: '10px',
  },
  select: {
    marginRight: '10px',
    padding: '5px 10px', 
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '150px',
    height: '30px',
    boxSizing: 'border-box', 
    fontSize: '14px',  
  },
  button: {
    padding: '5px 10px',  
    height: '30px', 
    boxSizing: 'border-box',
    fontSize: '14px',  
    border: '1px solid #ccc',  
    borderRadius: '5px',  
    background: 'white',
    cursor: 'pointer',
  }
};

export default Categories;