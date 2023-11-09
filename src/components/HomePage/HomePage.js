import "./HomePage.css"
import ClassPic from "../ClassPic/ClassPic"
import ChooseYour from "../ChooseYour/ChooseYour"
import StatusText from "../StatusText/StatusText"
import PropTypes from 'prop-types';

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
      <StatusText />
      <ChooseYour currentClass={currentClass}/>
      <div className="class-icons-container">{allClasses}</div>
    </div>
  )
}

export default HomePage

HomePage.propTypes = {
  classPics: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired, 
  setCurrentClass: PropTypes.func.isRequired, 
  setCurrentFaction: PropTypes.func.isRequired, 
  currentClass: PropTypes.string, 
};