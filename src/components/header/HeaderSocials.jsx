import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubAlt} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/shyam190501/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/shyam-1905" target="_blank"><FaGithubAlt/></a>
        <a href="https://www.facebook.com/yenna.shyamprasadreddy" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials