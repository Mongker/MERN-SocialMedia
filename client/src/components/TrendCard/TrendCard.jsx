import React from 'react'
import './TrendCard.css'
import {TrendData} from '../../Data/TrendData.js'
const TrendCard = () => {
  return (
   <div className="TrendCard">
       <h3>Hội nhóm trao đổi:</h3>
       {TrendData.map((trend, id)=>{
            return(
                <div className="trend" key={id}>
                    <span>❤️{trend.name}</span>
                    <span>{trend.shares}k member</span>
                </div>
            )
       })}
   </div>
  )
}

export default TrendCard
