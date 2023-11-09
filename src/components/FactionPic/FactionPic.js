import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./FactionPic.css";
import PropTypes from 'prop-types';

function FactionPic({ id, img, setCurrentFaction, currentClass}) {
  if (currentClass === null) {
    window.location.href = '/';
    return null; 
  }

  const handleFactionClick = () => {
    setCurrentFaction(id);
  };

  return (
    <div>
      <Link to={`/gear`}>
        <div className="faction-card">
         <img className="faction-image" src={img} id={id} style={{ width: '250%', height: '250%' }} alt="Faction Icon" onClick={handleFactionClick}/>
        </div>
      </Link>
      <p className="faction-name">{id}</p>
     </div>
  );
}

export default FactionPic;

FactionPic.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  setCurrentFaction: PropTypes.func.isRequired,
  currentClass: PropTypes.string, 
};

