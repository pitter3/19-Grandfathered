import React from 'react';
import { useLocation } from 'react-router-dom';
import "./StatusText.css";

function StatusText({ currentClass, currentFaction }) {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  } else {
    const shouldDisplayBothImages = location.pathname.includes('gear'); // Display both images on 'gear' page
    const shouldDisplayClassImage = location.pathname.includes('faction'); // Display class image on 'faction' page

    return (
      <div className="a-container">
        {shouldDisplayBothImages && (
          <>
            <img src={`http://localhost:8080/ClassIcons/Icon_${currentClass}.png`} alt="Class Icon" className="classy-image"/>
            <img src={`http://localhost:8080/FactionIcons/${currentFaction}.png`} alt="Faction Icon" className="faction-image" />
          </>
        )}
        {shouldDisplayClassImage && (
          <img src={`http://localhost:8080/ClassIcons/Icon_${currentClass}.png`} alt="Class Icon" className="classy-image" />
        )}
      </div>
    );
  }
}

export default StatusText;

