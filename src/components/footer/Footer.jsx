import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Shyam</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/yenna.shyamprasadreddy" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
        <a href="https://www.instagram.com/shyam_reddy._" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.com/yenna_shyam" target="_blank"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Yenna Shyam Prasad Reddy. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer