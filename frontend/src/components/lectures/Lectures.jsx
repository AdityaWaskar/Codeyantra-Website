import React from 'react'
import './lecture.css'

const Lectures = (props) => {
  return (
    <a id='lecture' href={props.link}>
      <div className="lecture">
        <div className="lect_img">
          <img src={props.img} alt="" />
        </div>
        <div className="lect_info">
          <p className="info"><b>Title :</b>{props.title}</p>
          <p className="info"><b>Mode of Conduction :</b>{props.modeOfConduction}</p>
          <p className="info"><b>Venue :</b>{props.Venue}</p>
          <p className="info"><b>Date :</b>{props.DateAndDay}</p>
          <p className="info"><b>Time :</b>{props.Timings}</p>
        </div>
      </div>
    </a>
  )
}

export default Lectures