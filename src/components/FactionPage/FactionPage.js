import "./FactionPage.css"
import FactionPic from "../FactionPic/FactionPic"
import ChooseYour from "../ChooseYour/ChooseYour"
import StatusText from "../StatusText/StatusText"
import PropTypes from "prop-types";

function FactionPage({factionPics, setCurrentFaction, currentFaction, currentClass}) {
  const allFactions = factionPics.map((factionPic) => {
    return (
      <FactionPic
        key={factionPic.faction}
        id={factionPic.faction}
        img={factionPic.imageUrl}
        setCurrentFaction={setCurrentFaction}
        currentFaction={currentFaction}
        currentClass={currentClass}

      />
    )
  })

  return (
    <div className="faction-page">
      <StatusText currentClass={currentClass} currentFaction={currentFaction}/>
      <ChooseYour currentClass={currentClass}/>
      <div className="faction-icons-container">{allFactions}</div>
    </div>
  )
}

export default FactionPage

FactionPage.propTypes = {
  factionPics: PropTypes.arrayOf(
    PropTypes.shape({
      faction: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired, // factionPics is an array of objects
  setCurrentFaction: PropTypes.func.isRequired, // setCurrentFaction is a function
  currentFaction: PropTypes.string, // currentFaction is a string
  currentClass: PropTypes.string, // currentClass is a string
};