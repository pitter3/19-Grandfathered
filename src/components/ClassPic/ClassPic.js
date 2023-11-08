  import React from 'react';
  import { Link } from "react-router-dom";
  import "./ClassPic.css"

  function ClassPic({ id, img, setCurrentClass }) {
    return (
    <Link to={`/faction`}>
      <div className="card" >
        
          <img className="class-image" src={img} id={id} style={{ width: '150%', height: '150%' }} alt="Class Icon" onClick={(event) => setCurrentClass(event.target.id)} />
       
      </div>
      </Link>
    );
  }
  

  export default ClassPic;
