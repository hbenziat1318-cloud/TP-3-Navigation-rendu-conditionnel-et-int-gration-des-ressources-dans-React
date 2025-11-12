import ListeTaches from './ListeTaches';
import Logo from './Logo';
import LecteurAudio from './LecteurAudio';
import Notifications from './Notifications';
import Galerie from './Galerie';

function Accueil() {
  const articles = ['🥛 Lait', '🍞 Pain', '🥚 Œufs', '🍎 Fruits'];
  
  return (
    <div className="page-card">
      <h2>🏠 Page d'accueil</h2>
      <p>Bienvenue sur notre application React magnifique !</p>
      
      {/* Section Logo */}
      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <h3>🎨 Notre Logo</h3>
        <Logo />
      </div>
      
      {/* Section Audio */}
      <div style={{ margin: '30px 0' }}>
        <h3>🎵 Lecteur Audio</h3>
        <LecteurAudio />
      </div>
      
      {/* Section Tâches */}
      <div style={{ margin: '30px 0' }}>
        <h3>📝 Liste des tâches</h3>
        <ListeTaches />
      </div>
      
      <hr />
      
      {/* Section Exercices */}
      <div style={{ margin: '30px 0' }}>
        <h3>💡 Exercices pratiques</h3>
        
        <div style={{ margin: '25px 0' }}>
          <h4>🔔 Exercice 1 - Notifications</h4>
          <Notifications />
        </div>
        
        <div style={{ margin: '25px 0' }}>
          <h4>🛒 Exercice 2 - Liste de courses</h4>
          <ul>
            {articles.map((article, index) => (
              <li key={index}>{article}</li>
            ))}
          </ul>
        </div>
        
        <div style={{ margin: '25px 0' }}>
          <h4>🖼️ Exercice 3 - Galerie d'images</h4>
          <Galerie />
        </div>
      </div>
    </div>
  );
}

export default Accueil;
