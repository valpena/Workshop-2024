import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Tu peux styliser la modale ici

const Home = () => {
  const [showPopup, setShowPopup] = useState(true); // Gère l'affichage de la popup

  const handleAccept = () => {
    setShowPopup(false); // Cacher la popup lorsque l'utilisateur accepte
    // Ajouter la logique pour gérer l'acceptation (par exemple, stocker dans localStorage)
    localStorage.setItem('cookiesAccepted', 'true'); // Exemple de stockage
  };

  const handleRefuse = () => {
    // Vous pouvez éventuellement enregistrer le refus, mais la pop-up ne se fermera pas
    alert("Vous devez accepter les conditions pour continuer.");
  };

  return (
    <div className="home-container">
      <h1>Bienvenue sur notre site</h1>
      <h3>Bienvenue sur Médecine de Poche</h3>
      <p>
        Nous avons développé Médecine de Poche, une application innovante qui simplifie l'accès aux soins de santé. Grâce à notre solution, nous offrons aux utilisateurs un pré-diagnostic rapide basé sur une série de questions simples. Si l’utilisateur ne se sent pas mieux ou si des symptômes persistent après le pré-diagnostic, nous l’orientons directement vers un médecin proche de chez lui, pour une prise en charge personnalisée.
        Notre objectif est de rendre les soins de santé plus accessibles, en combinant la technologie avec un accès rapide aux professionnels de santé locaux.
      </p>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Nous respectons la vie privée de nos utilisateurs.</h3>
            <p>
              Vos données, vos choix. Pour en savoir plus sur les données utilisées et leur traitement, vous pouvez consulter
              notre politique et nos engagements en matière de sécurité et de confidentialité des données personnelles.
            </p>
            <div className="popup-buttons">
              <button onClick={handleAccept} className="popup-button">Accepter</button>
              {/* Le bouton Refuser n'affiche qu'un message */}
              <button onClick={handleRefuse} className="popup-button" disabled>Refuser</button>
            </div>
            <div className='popup-footer'>
              <Link to="/privacy" className="popup-link">En savoir plus</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
