import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./FactionPic.css";

function FactionPic({ id, img, setCurrentFaction, currentClass, getGearByClassAndFaction, currentFaction }) {

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
