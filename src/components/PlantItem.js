import React from 'react';
import { FaSun, FaSeedling } from 'react-icons/fa';
import CareScale from './CareScale';

const PlantItem = (props) => {
  return (
    <div style={{ ...styles.card, borderColor: props.borderColor || 'green' }}>
      <div style={styles.imageContainer}>
        <img src={require(`./images/${props.image}`)} alt={props.name} style={styles.image} />
        <span style={styles.price}>{props.price}€</span>
      </div>
      <div style={styles.contentContainer}>
        <h5 style={styles.name}>{props.name}</h5>
        <div style={styles.icons}>
       <CareScale info=<FaSun style={styles.icon} />/>
        </div>
        <div style={styles.icons}>
          <CareScale info=<FaSeedling style={styles.iconFlower} /> />
        </div>
        <button style={styles.button}>Ajouter</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '2px solid',
    borderRadius: '10px',
    padding: '10px',
    flex: '1 1 250px', 
    marginBottom: '15px', 
    maxWidth: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    boxSizing: 'border-box',
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '5px', 
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px', 
  },
  price: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    color: 'green',
    fontWeight: 'bold',
    fontSize: '16px', 
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: '14px', 
    fontWeight: 'bold',
    marginBottom: '3px',
    textAlign: 'left',
  },
  icons: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '3px',
  },
  icon: {
    color: 'orange',
    marginRight: '3px'
  },
  iconFlower: {
    color: 'green',
    marginRight: '3px',
    fontSize: '16px', 
  },
  button: {
    backgroundColor: 'transparent',
    padding: '3px 0',
    border: 'none',
    cursor: 'pointer',
   
    alignSelf: 'flex-start',
    marginTop: '3px',
  },
};

export default PlantItem;