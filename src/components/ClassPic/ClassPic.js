import React from 'react';
import { Link } from "react-router-dom";
import "./ClassPic.css"

function ClassPic({ id, img, setCurrentClass }) {
  return (
    <Link to={`/faction`}>
    <div className="card" onClick={(event) => setCurrentClass(event.target.id)}>
      <img className="class-image" src={img} id={id} style={{ width: '150%', height: '150%' }} alt="Class Icon" />
    </div>
    </Link>
  );
}

export default ClassPic;
