import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./FactionPic.css";

function FactionPic({ id, img, setCurrentFaction, currentClass, getGearByClassAndFaction, currentFaction }) {

  const handleFactionClick = () => {
    setCurrentFaction(id);
  };

  useEffect(() => { 
    if (currentClass && currentFaction) {
      getGearByClassAndFaction();
    }
  }, [currentClass, currentFaction, getGearByClassAndFaction]);

  return (
    <Link to={`/gear`}>
      <div className="faction-card" onClick={handleFactionClick}>
        <img className="faction-image" src={img} id={id} style={{ width: '165%', height: '165%' }} alt="Faction Icon" />
      </div>
     </Link>
  );
}

export default FactionPic;
