import React from 'react'
import './footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <div className="left">
                <div className='content'>Codeyantra SLRTCE</div>
                <hr />
                <div className='subcontent'>Decode Before Encode</div>
            </div>
            <div className="middle">
                <div className='content'>Copyright</div>
                <hr />
                <div className='subcontent'>Created by Codeyantra SLRTCE</div>
            </div>
            <div className="right">
                <div className='content'>Follow Us</div>
                <hr />
                <div className="socialMedia">
                    <div className="facebook"><a href="www.google.com"><FontAwesomeIcon className='icon' icon={faFacebook}/></a></div>
                    <div className="instagram"><a href="/"><FontAwesomeIcon className='icon' icon={faInstagram}/></a></div>
                    <div className='linkedin'><a href="/"><FontAwesomeIcon className='icon' icon={faLinkedin}/></a></div>
                </div>
            </div>
        </div>
        <div className='footer2'>Created By &nbsp;<span>Codeyantra SLRTCE</span>&nbsp;| &copy; 2022 All rigths reserved.</div>
    </footer>
  )
}

export default Footer