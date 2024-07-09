import  "../Skills/Skills.css"

const Skills = () => {
    return (
        <div className="habilidades">
        <div className="skills">
          <h5 className="textSkills">Minhas Skills</h5>
          <br />
          <div className="infoSkill">
            <h3>Quais Linguagens eu domino?</h3>
          </div>
          <div className="icons">
            <div className="item">
              <i className="ri-html5-fill"></i>
            </div>
            <div className="item">
              <i className="ri-css3-fill"></i>
            </div>
            <div className="item">
              <i className="ri-javascript-fill"></i>
            </div>
            <div className="item">
              <i className="ri-database-2-fill"></i>
            </div>
            <div className="item">
              <i className="ri-github-fill"></i>
            </div>
          </div>
        </div>
      </div>
    )
   

}
export default Skills