import "./FactionPage.css"
import FactionPic from "../FactionPic/FactionPic"
import ChooseYour from "../ChooseYour/ChooseYour"

function FactionPage({factionPics, setCurrentFaction, currentFaction, setCurrentItems, currentClass}) {
  const allFactions = factionPics.map((factionPic) => {
    return (
      <FactionPic
        key={factionPic.faction}
        id={factionPic.faction}
        img={factionPic.imageUrl}
        setCurrentFaction={setCurrentFaction}
        currentFaction={currentFaction}
        setCurrentItems={setCurrentItems}
        currentClass={currentClass}

      />
    )
  })



  return (
    <div className="faction-page">
      <div className="faction-icons-container">{allFactions}</div>
      <ChooseYour currentClass={currentClass}/>
    </div>
  )
}

export default FactionPage
