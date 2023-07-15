import React from 'react'
import './Header.css'
import logo from '../../assets-20230710T085607Z-001/assets/img/logo.png'
import {Link} from 'react-router-dom'
function Header() {
   const navitems = [{
    path:'/',display:'Home'
   },
   {
    path:'/courses',display:'Courses'
   },
   {
    path:'/service',display:'Service'
   },
   {
    path:'/about',display:'About us'
   }


]
  return (
        <header className='header'>

            <div className="container">

                <div className="nav_container">

                    <div className="logo">
                        <div className="logo-img">
                        <img src={logo} alt="" />
                        </div>
                    <h2>Tech Talks</h2>
                    </div>
                    <div className="navigation">
                        <ul className='menu'>
                        {
                            navitems.map((item)=>(
                                <li className='nav-item'><Link to ={item.path}>{item.display}</Link></li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>

        </header>
  )
}

export default Header