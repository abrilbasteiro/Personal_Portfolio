import React from 'react'
import './SkillLogo.scss'
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

const SkillLogo = (props) => {
const { skillSrc, id} = props
  return (
    <div className="bg-transparent text-white d-flex align-items-center justify-content-center cardContainer" key={id}>
      <Image src={skillSrc} alt="Skill logo" className='skillLogo' />
    </div>
  )
}

export default SkillLogo