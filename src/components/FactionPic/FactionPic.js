import React from 'react';
import "./FactionPic.css"

function factionPic({ id, img, setCurrentFaction }) {
  return (
    <div className="faction-card" onClick={(event) => setCurrentFaction(event.target.id)}>
      <img className="faction-image" src={img} id={id} style={{ width: '165%', height: '165%' }} alt="Faction Icon" />
    </div>
  );
}

export default factionPic;
