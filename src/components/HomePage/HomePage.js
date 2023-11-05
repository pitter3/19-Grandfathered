import "./HomePage.css"
import ClassPic from "../ClassPic/ClassPic"

function HomePage({classPics}) {
  const allClasses = classPics.map((classPic) => {
    return (
              <ClassPic
        key={classPic.className}
        id={classPic.className}
        img={classPic.imageUrl}
      />
    )
  })



  return (
    <div className="home-page">
      {allClasses}
    </div>
  )
}

export default HomePage

// import "./Sightings.css"
// import Card from "./Card"


// function Sightings( {sightings, deleteCard} ) {
  
//     const allCards = sightings.map((sighting) => {
//       return (
//         <Card 
//         key={sighting.id}
//         id={sighting.id}
//         location={sighting.location}
//         description={sighting.description}
//         deleteCard={deleteCard}
//       />
//       )
//      })

// return (
//   <div className="sightings-container">
//     {allCards}
//   </div>
// )}

// export default Sightings