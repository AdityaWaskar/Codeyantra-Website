import React from 'react'
import './smallPoster.css'

const SmallPoster = (param) => {
  return (
    <div id={param.title} key={param.id} className='symbol'>
        <img src={param.icon} alt="" />
        <span>{param.title}</span>
    </div>
  )
}

export default SmallPoster