import React from 'react'
import './Skills.scss'
import SkillLogo from '../../components/SkillLogo/SkillLogo'
import skillsLogos from '../../images/skills'

const Skills = () => {
  const skillsTitles = [];
  const skillsSrcs = []


  
  const getSkills = () => {
    for (const skill in skillsLogos) {
      skillsTitles.push(skill)
      skillsSrcs.push(skillsLogos[skill])
    }
  }
  
  return (
    <section className='skillsSection'>
        <h1>MY TOP SKILLS</h1>
        <div className="skillsGroup">
          {getSkills()}
          <div className="skillsContainer">
            {skillsTitles.map(skill => 
              <SkillLogo skillSrc={skillsSrcs[skillsTitles.indexOf(skill)]} key={skillsTitles.indexOf(skill)} id={skillsTitles.indexOf(skill)}/>
            )}  
          </div>
        </div>
        <h2>I love to improve myself, so I keep on learning day by day</h2>
    </section>
  )
}

export default Skills