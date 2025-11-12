import React, { useRef, useState } from 'react';

function LecteurAudio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasAudio, setHasAudio] = useState(false);

  // Vérifier si le fichier audio existe
  React.useEffect(() => {
    try {
      // Essayer d'importer le fichier audio
      require('./audio/bonjour.mp3');
      setHasAudio(true);
    } catch (error) {
      console.log('Fichier audio non trouvé, utilisation du mode simulation');
      setHasAudio(false);
    }
  }, []);

  const togglePlayPause = () => {
    if (hasAudio && audioRef.current) {
      // Mode avec vrai fichier audio
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Erreur lecture audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    } else {
      // Mode simulation
      if (isPlaying) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
        // Simulation de progression
        let currentProgress = 0;
        const interval = setInterval(() => {
          if (currentProgress < 100 && isPlaying) {
            currentProgress += 2;
            setProgress(currentProgress);
          } else {
            clearInterval(interval);
            if (currentProgress >= 100) {
              setIsPlaying(false);
              setProgress(0);
            }
          }
        }, 100);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const dur = audioRef.current.duration;
      setProgress((current / dur) * 100);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return minutes + ':' + seconds.toString().padStart(2, '0');
  };

  const resetAudio = () => {
    if (hasAudio && audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    setProgress(0);
    setIsPlaying(false);
  };

  return (
    <div className="audio-container">
      <h3>🎵 Lecteur Audio</h3>
      
      <div className="audio-player">
        <div className="audio-controls">
          <button 
            onClick={togglePlayPause}
            className="audio-button"
          >
            {isPlaying ? '⏸️ Pause' : '▶️ Lecture'}
          </button>

          <button 
            onClick={resetAudio}
            className="audio-button secondary"
            disabled={progress === 0}
          >
            🔄 Rejouer
          </button>
        </div>

        <div className="audio-progress-section">
          <div className="audio-progress-container">
            <div 
              className="audio-progress-bar"
              style={{ width: progress + '%' }}
            ></div>
          </div>
          
          <div className="audio-time-display">
            <span>{formatTime(progress * 0.3)}</span>
            <span> / </span>
            <span>0:30</span>
          </div>
        </div>

        {hasAudio ? (
          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => {
              setIsPlaying(false);
              setProgress(100);
            }}
          >
            <source src={require('./audio/bonjour.mp3')} type="audio/mpeg" />
            Votre navigateur ne supporte pas l'élément audio.
          </audio>
        ) : (
          <div style={{ 
            background: 'rgba(255, 193, 7, 0.1)', 
            padding: '10px', 
            borderRadius: '8px', 
            marginTop: '10px',
            border: '1px dashed #ffc107',
            textAlign: 'center'
          }}>
            <p style={{ margin: 0, color: '#856404', fontSize: '0.9rem' }}>
              🔧 Mode simulation - Ajoutez bonjour.mp3 dans src/audio/
            </p>
          </div>
        )}
      </div>

      <div className="audio-info">
        {hasAudio ? (
          <div style={{ 
            background: 'linear-gradient(135deg, #28a745, #20c997)', 
            padding: '15px', 
            borderRadius: '10px', 
            marginTop: '15px',
            color: 'white',
            textAlign: 'center'
          }}>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem' }}>
              🎉 Fichier audio chargé avec succès !
            </p>
            <p style={{ margin: '5px 0 0 0', opacity: 0.9 }}>
              "Bonjour !" - Prêt à être joué
            </p>
          </div>
        ) : (
          <div style={{ 
            background: 'linear-gradient(135deg, #ffc107, #fd7e14)', 
            padding: '15px', 
            borderRadius: '10px', 
            marginTop: '15px',
            color: 'white',
            textAlign: 'center'
          }}>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem' }}>
              📁 Fichier audio manquant
            </p>
            <p style={{ margin: '5px 0 0 0', opacity: 0.9 }}>
              Copiez bonjour.mp3 dans le dossier src/audio/
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LecteurAudio;
