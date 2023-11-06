import "./FactionPage.css"
import FactionPic from "../FactionPic/FactionPic"

function FactionPage({factionPics, setCurrentFaction}) {
  const allFactions = factionPics.map((factionPic) => {
    return (
      <FactionPic
        key={factionPic.faction}
        id={factionPic.faction}
        img={factionPic.imageUrl}
        setCurrentFaction={setCurrentFaction}
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
