import React from 'react';
import { useLocation } from 'react-router-dom';
import "./StatusText.css";
import PropTypes from 'prop-types';

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
            <img src={`https://one9checkserver.onrender.com/ClassIcons/Icon_${currentClass}.png`} alt="Class Icon" className="classy-image"/>
            <img src={`https://one9checkserver.onrender.com/FactionIcons/${currentFaction}.png`} alt="Faction Icon" className="faction-image" />
          </>
        )}
        {shouldDisplayClassImage && (
          <img src={`https://one9checkserver.onrender.com/ClassIcons/Icon_${currentClass}.png`} alt="Class Icon" className="classy-image" />
        )}
      </div>
    );
  }
}

export default StatusText;

StatusText.propTypes = {
  currentClass: PropTypes.string,
  currentFaction: PropTypes.string,
};
