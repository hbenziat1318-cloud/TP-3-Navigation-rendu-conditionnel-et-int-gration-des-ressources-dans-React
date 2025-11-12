import React from 'react';

// Importer les images depuis le dossier src/images
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

function Galerie() {
  const images = [
    { id: 1, src: image1, alt: 'Image 1 de la galerie', name: 'Image 1' },
    { id: 2, src: image2, alt: 'Image 2 de la galerie', name: 'Image 2' },
    { id: 3, src: image3, alt: 'Image 3 de la galerie', name: 'Image 3' }
  ];
  
  return (
    <div className="galerie-container">
      {images.map((image) => (
        <div key={image.id} className="galerie-item">
          <img 
            src={image.src} 
            alt={image.alt}
            className="galerie-image"
            onError={(e) => {
              // En cas d'erreur de chargement
              console.log('Erreur chargement image:', image.name);
              e.target.style.display = 'none';
            }}
          />
          <div className="galerie-overlay">
            <span>{image.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Galerie;
