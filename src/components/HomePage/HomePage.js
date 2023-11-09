import "./HomePage.css"
import ClassPic from "../ClassPic/ClassPic"
import ChooseYour from "../ChooseYour/ChooseYour"
import StatusText from "../StatusText/StatusText"

function HomePage({ classPics, setCurrentClass, setCurrentFaction, currentClass}) {
  const allClasses = classPics.map((classPic) => {
    return (
      <ClassPic
        key={classPic.className}
        id={classPic.className}
        img={classPic.imageUrl}
        setCurrentClass={setCurrentClass}
        setCurrentFaction={setCurrentFaction}
      />
    )
  })

  return (
    <div className="home-page">
      <StatusText classPics={classPics}/>
      <ChooseYour currentClass={currentClass}/>
      <div className="class-icons-container">{allClasses}</div>
    </div>
  )
}

export default HomePage