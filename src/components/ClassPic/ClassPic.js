import React from 'react';
import "./ClassPic.css"

function ClassPic({ id, img }) {
  return (
    <div className="card" onClick={() => console.log("hi")}>
      <img src={img} id={id} style={{ width: '100%', height: '100%' }} alt="Class Icon" />
    </div>
  );
}

export default ClassPic;
