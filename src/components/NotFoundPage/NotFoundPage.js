import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFoundPage.css"

function NotFoundPage() {
  return (
    <div className='page'>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">
      <button className='home-button'>Go Home</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;