import React from 'react';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';
import NewsletterSignup from './components/Newsletter'; 
import Footer from './components/Footer';

const App = () => {
  const plants = [
    { id: 1, name: 'Monstera', price: 24, image: 'image1.jpg' },
    { id: 2, name: 'Basilic', price: 6, image: 'image4.jpg' },
    { id: 3, name: 'Menthe', price: 4, image: 'image5.jpg' },
   
  ];

  return (
    <div>
      <Banner />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Cart />
          </div>
          <div className="col-md-9">
            <Categories />
            <div style={styles.container}>
              <ShoppingList plants={plants} />
            </div>
          </div>
        </div>
      </div>
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    border: '3px solid green', 
    padding: '20px',
    borderRadius: '15px', 
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
};

export default App;
