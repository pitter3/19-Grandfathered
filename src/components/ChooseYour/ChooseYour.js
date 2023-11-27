import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Spinner/Spinner'; // Import the Spinner component
import "./ChooseYour.css";

function ChooseYour({ isLoading }) {
  const location = useLocation();

  return (
    <div className="header-container">
<h1>
  {isLoading ? <LoadingSpinner /> : (location.pathname.includes('faction') ? 'Choose your faction' : 'Choose your class')}
</h1>
    </div>
  );
}

export default ChooseYour;