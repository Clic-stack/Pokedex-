import React from 'react';
import '../styles/LoadingScreen.css'; 

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen-overlay">
      <div className="loading-content">
        <div className="pokeball-loader">
          <div className="pokeball-aura"></div>
          <div className="pokeball">
            <div className="pokeball-top"></div>
            <div className="pokeball-button"></div>
            <div className="pokeball-bottom"></div>
          </div>
        </div>

        {/* Textos de carga */}
        <h2 className="loading-title">Loading...</h2>
        <p className="loading-subtitle">Your Pokédex is syncing...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;