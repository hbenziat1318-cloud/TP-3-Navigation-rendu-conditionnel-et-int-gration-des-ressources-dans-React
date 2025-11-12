import logo from './images/logo.png';

function Logo() {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <img 
        src={logo} 
        alt="Logo du site" 
        style={{
          width: '150px',
          height: 'auto',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
          border: '3px solid white'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.05) rotate(2deg)';
          e.target.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1) rotate(0deg)';
          e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        }}
        onError={(e) => {
          // Si l'image ne charge pas
          console.log('Erreur chargement logo');
          e.target.style.display = 'none';
          const placeholder = document.createElement('div');
          placeholder.innerHTML = '🎨 Logo du site';
          placeholder.style.cssText = 'width: 150px; height: 100px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 20px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; margin: 0 auto;';
          e.target.parentNode.appendChild(placeholder);
        }}
      />
    </div>
  );
}

export default Logo;
