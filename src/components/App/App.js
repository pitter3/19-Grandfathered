import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClassPic from '../ClassPic/ClassPic';
import HomePage from '../HomePage/HomePage';
import FactionPage from '../FactionPage/FactionPage'
import ItemPage from '../ItemPage/ItemPage'
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [classPics, setClassPics] = useState([]);
  const [factionPics, setFactionPics] = useState([])
  const [currentClass, setCurrentClass] = useState(null)
  const [currentFaction, setCurrentFaction] = useState(null)
  const [currentItems, setCurrentItems] = useState(null)
  const [allClasses, setAllClasses] = useState(null)

  // function getGear = () => {

  // }

  const getClassPics = () => {
    fetch('http://localhost:8080/classes')
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
        console.log(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const getFactionPics = () => {
    fetch('http://localhost:8080/factions')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setFactionPics(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const getGear = useCallback(() => {
    if (currentClass) {
      const url = `http://localhost:8080/${currentClass}gear`;
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setCurrentItems(data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [currentClass, currentItems]);

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
      {error && <div className="error-message">{error}</div>}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage classPics={classPics} setCurrentClass={setCurrentClass} setCurrentFaction={setCurrentFaction} currentClass={currentClass}/>} />
          <Route path="/faction" element={<FactionPage factionPics={factionPics} setCurrentFaction={setCurrentFaction} getGear={getGear} currentFaction={currentFaction} currentClass={currentClass} />}/>
          <Route path="/gear" element={<ItemPage currentItems={currentItems} currentFaction={currentFaction} currentClass={currentClass} setCurrentItems={setCurrentItems} setCurrentClass={setCurrentClass} setCurrentFaction={setCurrentFaction}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// git is not working