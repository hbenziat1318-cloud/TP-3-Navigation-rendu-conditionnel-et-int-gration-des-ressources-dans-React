function Contact() {
  return (
    <div className="page-card">
      <h2>📞 Contactez-nous</h2>
      <div style={{textAlign: 'left', maxWidth: '500px', margin: '0 auto'}}>
        <div style={{marginBottom: '20px', padding: '15px', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '10px'}}>
          <p>📧 <strong>Email :</strong> contact@example.com</p>
        </div>
        
        <div style={{marginBottom: '20px', padding: '15px', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '10px'}}>
          <p>📱 <strong>Téléphone :</strong> +33 1 23 45 67 89</p>
        </div>
        
        <div style={{marginBottom: '20px', padding: '15px', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '10px'}}>
          <p>📍 <strong>Adresse :</strong> 123 Rue du React, 75000 Paris</p>
        </div>
        
        <div style={{marginTop: '30px', textAlign: 'center'}}>
          <p>💬 <em>Nous sommes ravis de vous aider !</em></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;