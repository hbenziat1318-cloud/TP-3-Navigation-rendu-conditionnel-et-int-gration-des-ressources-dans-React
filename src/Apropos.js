function Apropos() {
  return (
    <div className="page-card">
      <h2>ℹ️ À propos de nous</h2>
      <div style={{textAlign: 'left', maxWidth: '600px', margin: '0 auto'}}>
        <p>🌟 <strong>Bienvenue sur notre magnifique application React !</strong></p>
        
        <h4>🎯 Notre mission</h4>
        <p>Démontrer les capacités modernes de React avec un design adorable et une expérience utilisateur exceptionnelle.</p>
        
        <h4>🚀 Technologies utilisées</h4>
        <ul>
          <li>React.js - Bibliothèque JavaScript moderne</li>
          <li>React Router - Navigation entre les pages</li>
          <li>CSS3 - Styles avancés et animations</li>
          <li>JavaScript ES6+ - Code moderne et propre</li>
        </ul>
        
        <h4>✨ Fonctionnalités</h4>
        <ul>
          <li>Navigation fluide entre les pages</li>
          <li>Design responsive et moderne</li>
          <li>Animations CSS élégantes</li>
          <li>Interface utilisateur intuitive</li>
        </ul>
      </div>
    </div>
  );
}

export default Apropos;