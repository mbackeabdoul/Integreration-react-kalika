import { Radius } from 'lucide-react';
import React from 'react';

const Cart = () => {
  return (
    <aside style={styles.cart}>
      <div style={styles.content}>
        <h2 style={styles.title}>Panier</h2>
        <p style={styles.item}>1 plante - 24€</p>
        <p style={styles.total}>Total: 24€</p>
        <button style={styles.button}>Valider le panier</button> {/* Ajout du style directement au bouton */}
      </div>
    </aside>
  );
};

const styles = {
  cart: {
    backgroundColor: '#198754', 
    color: 'white',
    padding: '20px',
    marginTop: '20px',
    height: 'calc(100vh - 100px)', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'sticky',
    top: '20px',
    width: '100%',
    maxWidth: '100%', 
    boxSizing: 'border-box', 
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  item: {
    marginBottom: '10px',
  },
  total: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: 'white',
    color: '#198754',
    border: 'none',
    padding: '5px 10px', 
    fontSize: '16px',
    cursor: 'pointer',
    display: 'inline-block', 
    width: 'auto',   
    maxWidth: 'fit-content', 
  },
};

export default Cart;
