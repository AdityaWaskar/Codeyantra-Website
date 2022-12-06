import React from 'react'
import './id.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons'


const Id = (d) => {
  return (
    <div className='id' key={d.id}>
        <div className="container">
            <div className="img"><img src={d.img} alt="ww" /></div>
            <div className="name">{d.name}</div>
            <div className="role">{d.role}</div>
        </div>
        <div className="socialMedia">
                <div className="facebook">
                      <a href={d.facebook}>
                          <FontAwesomeIcon className='icon' icon={faFacebook}/>
                      </a></div>
                <div className="instagram">
                      <a href={d.instagram}>
                          <FontAwesomeIcon className='icon' icon={faInstagram}/>
                      </a></div>
                <div className='linkedin'>
                      <a href={d.linkedin}>
                          <FontAwesomeIcon className='icon' icon={faLinkedin}/>
                      </a></div>
            </div>
    </div>
  )
}

export default Id