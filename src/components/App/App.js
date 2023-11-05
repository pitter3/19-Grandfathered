import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClassPic from '../ClassPic/ClassPic';
import HomePage from '../HomePage/HomePage';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [classPics, setClassPics] = useState([]);
  const [currentClass, setCurrentClass] = useState(null)
  const [currentFaction, setCurrentFaction] = useState(null)

  const getClassPics = () => {
    fetch('http://localhost:8080/classes')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setClassPics(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    getClassPics();
  }, []);

  return (
    <div className="App">
      {error && <div className="error-message">{error}</div>}
      <Router>
        <Routes>
          <Route path="/" element={<div><h1>GF Your 19!</h1><HomePage classPics={classPics} /></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
