import React from 'react';
import "./ClassPic.css"

function ClassPic({ id, img }) {
  return (
    <div className="card" onClick={(event) => console.log(event.target.id)}>
      <img className="class-image" src={img} id={id} style={{ width: '150%', height: '150%' }} alt="Class Icon" />
    </div>
  );
}

export default ClassPic;
