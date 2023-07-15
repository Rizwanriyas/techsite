import React from 'react'
import ai from '../../../assets-20230710T085607Z-001/assets/img/ai.png'
import sd from '../../../assets-20230710T085607Z-001/assets/img/sd.png'
import dg from '../../../assets-20230710T085607Z-001/assets/img/dg.png'
import hacker from '../../../assets-20230710T085607Z-001/assets/img/hacking.png'
import './Courses.css'


function Courses() {
    const courseData=[{
        title:"AI Development",
        disc:"Master in AI Development",
        img:ai
    },
    {
        title:"Digital Marketing",
        disc:"Master in Digital Marketing ",
        img:dg
    },
    {
        title:"Cyber Security",
        disc:"Master in Cyber Security ",
        img:hacker
    },
    {
        title:"Software Development",
        disc:"Master in Software Development ",
        img:sd
    }


]
  return (
   
   <div className="container course-container">
    <div className="course-top">
        <h2 className='section_title'>Our Free Courses</h2>
        <p>Trendings with certificates</p>
        <div className="course-wrapper">
            {
                courseData.map((course,index)=>(
                    <div className="course-item" key={index}>
                <span className='course-icon'>
                <img src={course.img} alt="" />
                </span>
                <div className="course-content">
                    <h4>{course.title}</h4>
                    <p>{course.disc}</p>
                </div>
            </div>
                ))
            }
            
        </div>
    </div>

   </div>
  
  
  )
}

export default Courses