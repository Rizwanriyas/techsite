import React from 'react'
import './Plans.css'
function Plans() {

    const premData=[{
        title:"Regular Member",
        price:"$0",
        duration:"/month",
        color:"#fff",
        features:[
            'ulimited access to course',
            'customer support',
            'personal mentor',
            'standerd option',
            '5 class per week'
        ]

    },
    {
        title:"Premium Member",
        price:"$100",
        duration:"/month",
        color:'6f55f2',
        features:[
            'ulimited access to course',
            'customer support',
            'personal mentor',
            'standerd option',
            '5 class per week'
        ]
    },
    {
        title:"Standerd Member",
        price:"$10",
        duration:"/month",
        color:"#fff",
        features:[
            'ulimited access to course',
            'customer support',
            'personal mentor',
            'standerd option',
            '5 class per week'
        ]
    }
]
  return (
    <div className='container'>
        <div className="pricing-top">
            <h2 className="section_title">
            Premium Pricing Plan
            </h2>
            <p>Unlock elite tech services with our premium plan and soar a head of competition </p>
        </div>
        <div className="pricing-wrapper">
            {
                premData.map((item,index)=>(
                    <div className="pricing_item" key={index}>
                    <div className="pricing_card-top" style={{background:"item.color"}}>
                        <h2 className="section_title">
                            {item.title}
                        </h2>
                        <h2 className="pricing-section_title">
                        {item.price} <span>{item.duration}</span>
                        </h2>
                    </div>
                    <div className="services">
                        <ul>
                        {item.features.map((items,index)=>(
                            <li key={index}>{items}</li>
                        ))}
                        </ul>
                        <button className='register-btn'>Join</button>
                    </div>
                </div>
                ))
            }
           
        </div>

    </div>
  )
}

export default Plans