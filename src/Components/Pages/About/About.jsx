import React from 'react'
import './About.css'
import pic from '../../../assets-20230710T085607Z-001/WhatsApp Image 2023-07-12 at 10.55.03 PM.jpeg'
function About() {
  return (
    <div className='container'>
        <div className="about-us-container">
        <div className="team-members">
        <h2>Our team</h2>
        <div className="member-card">
            <img className='member-img' src={pic} alt="" />
            <h3 className='member-name'>Rizwan vk</h3>
            <p className='member-role'>Co-founder</p>
        </div>
        </div>
        <div className="about-us-description">
            <h1 className='about-us-heading'>
                About us
            </h1>
            <p>
            Highly motivated Full Stack Developer  with a passion for programming
and a solid foundation in web development. Skilled in various programming
languages and frameworks including HTML, CSS, JavaScript, React, and Node.js.
Looking to leverage skills and experience and further develop knowledge in
software development.
            </p>
        </div>
        </div>
       
        
    </div>
  )
}

export default About