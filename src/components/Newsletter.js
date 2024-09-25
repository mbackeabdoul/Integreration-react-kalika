import React from 'react';

const NewsletterSignup = () => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Pour les passionné·e·s de plantes 🌿🌵🌴</h3>
      <p style={styles.subtitle}>Laissez-nous votre mail :</p>
      <div style={styles.inputContainer}>
        <input
          type="email"
          placeholder="Entrez votre mail"
          style={styles.input}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px', 
    marginTop: '40px',
    marginBottom: '40px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'flex',
    maxWidth: '200px', 
    width: '100%',
  },
  input: {
    flex: 1,
    padding: '4px', 
    fontSize: '12px', 
    border: '1px solid #ced4da',
    borderRadius: '4px',
  },
};

export default NewsletterSignup;
