import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import FactionPage from '../FactionPage/FactionPage'
import ItemPage from '../ItemPage/ItemPage'
import Header from '../Header/Header';
import AboutPage from '../AboutPage/AboutPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [classPics, setClassPics] = useState([]);
  const [factionPics, setFactionPics] = useState([])
  const [currentClass, setCurrentClass] = useState(null)
  const [currentFaction, setCurrentFaction] = useState(null)
  const [currentItems, setCurrentItems] = useState(null)
  const [allClasses, setAllClasses] = useState(null)

  const getClassPics = () => {
    fetch('https://one9checkserver.onrender.com/classes')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const classNames = data.map((classInfo) => classInfo.className);
        setAllClasses(classNames);
        setClassPics(data);
      })
      .catch((error) => {
        setError(error.message);
      }); 
  };
  

  const getFactionPics = () => {
    fetch('https://one9checkserver.onrender.com/factions')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setFactionPics(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const getGear = useCallback(() => {
    if (currentClass) {
      // Maintain a reference to the currentClass when the function is invoked
      const classRef = currentClass;
  
      const url = `https://one9checkserver.onrender.com/${classRef}gear`;
  
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          // Only update state if the currentClass is still the same
          if (currentClass === classRef) {
            setCurrentItems(data);
          }
        })
        .catch((error) => {
          // Only update state if the currentClass is still the same
          if (currentClass === classRef) {
            setError(error.message);
          }
        });
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
          <Route path="/" element={<HomePage classPics={classPics} setCurrentClass={setCurrentClass} setCurrentFaction={setCurrentFaction} currentClass={currentClass}/> } />
          <Route path="/faction" element={<FactionPage factionPics={factionPics} setCurrentFaction={setCurrentFaction} currentFaction={currentFaction} currentClass={currentClass} />}/>
          <Route path="/gear" element={<ItemPage currentItems={currentItems} currentFaction={currentFaction} currentClass={currentClass}/>} />
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