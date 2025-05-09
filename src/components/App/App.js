// App.js

import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import FactionPage from '../FactionPage/FactionPage';
import ItemPage from '../ItemPage/ItemPage';
import Header from '../Header/Header';
import AboutPage from '../AboutPage/AboutPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [classPics, setClassPics] = useState([]);
  const [factionPics, setFactionPics] = useState([]);
  const [currentClass, setCurrentClass] = useState(null);
  const [currentFaction, setCurrentFaction] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);
  const [allClasses, setAllClasses] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // New state for loading

  const getClassPics = () => {
    setIsLoading(true); // Set loading to true before the fetch

    fetch('https://one9checkserver.onrender.com/classes')
      .then((response) => response.json())
      .then((data) => {
        const classNames = data.map((classInfo) => classInfo.className);
        setAllClasses(classNames);
        setClassPics(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false)); // Set loading to false after the fetch
  };

  const getFactionPics = () => {
    setIsLoading(true);

    fetch('https://one9checkserver.onrender.com/factions')
      .then((response) => response.json())
      .then((data) => {
        setFactionPics(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getGear = useCallback(() => {
    if (currentClass) {
      const classRef = currentClass;

      setIsLoading(true);

      const url = `https://one9checkserver.onrender.com/${classRef}gear`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (currentClass === classRef) {
            setCurrentItems(data);
          }
        })
        .catch((error) => {
          if (currentClass === classRef) {
            setError(error.message);
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [currentClass, setCurrentItems, setError]);

  useEffect(() => {
    getClassPics();
    getFactionPics();
  }, []);

  useEffect(() => {
    if (currentClass) {
      getGear();
    }
  }, [currentClass, getGear]);

  return (
    <div className="App">
      <Header />
      {error ? (
        <div className="error-message">Error: {error}</div>
      ) : (
        <>
          <Router>
            <Routes>
              <Route
                path="/"
                element={<HomePage classPics={classPics} setCurrentClass={setCurrentClass} setCurrentFaction={setCurrentFaction} currentClass={currentClass} isLoading={isLoading} />}
              />
              <Route path="/faction" element={<FactionPage factionPics={factionPics} setCurrentFaction={setCurrentFaction} currentFaction={currentFaction} currentClass={currentClass} />} />
              <Route path="/gear" element={<ItemPage currentItems={currentItems} currentFaction={currentFaction} currentClass={currentClass} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
