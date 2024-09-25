import React from 'react';
import { FaLeaf } from 'react-icons/fa'; // Import de l'icône de plante

const Banner = () => {
  return (
    <nav style={styles.navbar}>
      <button style={styles.bannerButton}>
        &lt;Banner/&gt;
      </button>
      <div style={styles.titleContainer}>
        <FaLeaf style={styles.icon} /> {/* Icône avant le texte */}
        <span style={styles.titleText}>La maison jungle</span>
      </div>
    </nav>
  );
};

// Styles en objet JS
const styles = {
  navbar: {
    display: 'flex',          // Disposition en ligne
    justifyContent: 'space-between', // Espace entre les éléments (bouton à gauche, texte à droite)
    alignItems: 'center',     // Centrer verticalement
    border: '1px solid red',  // Bordure rouge
    padding: '10px',          // Espacement interne
  },
  bannerButton: {
    backgroundColor: 'red',    // Fond rouge
    color: 'white',            // Texte en blanc
    borderRadius: '15px',      // Bords plus arrondis (augmentation du rayon)
    border: 'none',            // Supprimer la bordure par défaut
    padding: '10px 20px',      // Espacement interne du bouton
    fontWeight: 'bold',        // Texte en gras
    cursor: 'pointer',         // Curseur en forme de main
  },
  titleContainer: {
    display: 'flex',           // Disposition en ligne pour le texte et l'icône
    alignItems: 'center',      // Centrer verticalement
  },
  titleText: {
    marginLeft: '10px',        // Espacement entre l'icône et le texte (icône à gauche)
    fontWeight: 'bold',        // Texte en gras
    fontSize: '20px',          // Taille de police
  },
  icon: {
    color: 'green',            // Couleur de l'icône en vert
    fontSize: '24px',          // Taille de l'icône
  },
};

export default Banner;
