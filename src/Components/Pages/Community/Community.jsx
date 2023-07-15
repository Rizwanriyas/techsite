import React from 'react'
import './Community.css'
import pic from '../../../assets-20230710T085607Z-001/assets/img/tc.png'

function Community() {
  return (
    <div className='container'>
        <div className="start-wrapper">
            <div className="start-img">
                <img src={pic} alt="" />
            </div>
            <div className="start-content">
                <h2 className='section-title'>
                Join Our Free Tech Community
                </h2>
                <p>Unlock the power of knowledge and innovation by joining our vibrant and free tech community</p>
                <button className='register-btn'>Join now</button>
            </div>

        </div>

    </div>
  )
}

export default Community