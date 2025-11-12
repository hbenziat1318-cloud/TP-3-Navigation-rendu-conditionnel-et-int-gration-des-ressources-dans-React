import { useState } from 'react';

function Connexion() {
  const [connecte, setConnecte] = useState(false);

  return (
    <div className="connexion-container">
      {connecte ? (
        <h3>🎉 Connecté</h3>
      ) : (
        <h3>🔒 Déconnecté</h3>
      )}
      <button onClick={() => setConnecte(!connecte)}>
        {connecte ? 'Se déconnecter' : 'Se connecter'}
      </button>
    </div>
  );
}

export default Connexion;
