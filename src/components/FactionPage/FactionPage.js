import "./FactionPage.css"
import FactionPic from "../FactionPic/FactionPic"
import ChooseYour from "../ChooseYour/ChooseYour"
import StatusText from "../StatusText/StatusText"

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
