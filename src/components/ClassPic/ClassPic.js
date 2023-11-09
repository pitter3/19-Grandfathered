import React from 'react';
import { Link } from "react-router-dom";
import "./ClassPic.css";
import PropTypes from 'prop-types';

function ClassPic({ id, img, setCurrentClass }) {
  return (
    <div>
      <Link to={`/faction`}>
        <div className="card">
          <img className="class-image" src={img} id={id} style={{ width: '150%', height: '150%' }} alt="Class Icon" onClick={(event) => setCurrentClass(event.target.id)} />
        </div>
      </Link>
      <p>{id}</p>
    </div>
  );
}

export default ClassPic;

ClassPic.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  setCurrentClass: PropTypes.func.isRequired,
};
