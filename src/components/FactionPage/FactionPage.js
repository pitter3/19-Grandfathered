import "./FactionPage.css"
import FactionPic from "../FactionPic/FactionPic"

function FactionPage({factionPics, setCurrentFaction, getGearByClassAndFaction, currentFaction, setCurrentItems, currentClass}) {
  const allFactions = factionPics.map((factionPic) => {
    return (
      <FactionPic
        key={factionPic.faction}
        id={factionPic.faction}
        img={factionPic.imageUrl}
        setCurrentFaction={setCurrentFaction}
        getGearByClassAndFaction={getGearByClassAndFaction}
        currentFaction={currentFaction}
        setCurrentItems={setCurrentItems}
        currentClass={currentClass}

      />
    )
  })



  return (
    <div className="faction-page">
      {allFactions}
    </div>
  )
}

export default FactionPage
