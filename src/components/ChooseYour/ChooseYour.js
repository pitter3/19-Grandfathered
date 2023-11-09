import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./ChooseYour.css";

function ChooseYour() {
  const location = useLocation();

  return (
    <div>
      <h1>
        {location.pathname.includes('faction') ? 'Choose your faction' : 'Choose your class'}
      </h1>
    </div>
  );
}

export default ChooseYour;
