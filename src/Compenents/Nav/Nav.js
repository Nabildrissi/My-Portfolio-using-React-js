import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareMinus} from 'react-icons/bi'
import { RiProjectorFill } from "react-icons/ri";
import { PiCertificateDuotone } from "react-icons/pi";

import { useState } from 'react'

const Nav = () => {
  const [ActiveNAv, SetActiveNav] = useState('#');
  return (
    <nav>
     <a href='#'            onClick={() => SetActiveNav('#')} className={ActiveNAv === '#' ? 'active' : ''}><AiOutlineHome /></a>
     <a href='#about'       onClick={() => SetActiveNav('#about')} className={ActiveNAv === '#about' ? 'active' : ''}><AiOutlineUser /></a>
     <a href='#experience'  onClick={() => SetActiveNav('#experience')} className={ActiveNAv === '#experience' ? 'active' : ''}><BiBookAlt /></a>
      <a href='#services'    onClick={() => SetActiveNav('#services')} className={ActiveNAv === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href='#portfolio'  onClick={() => SetActiveNav('#portfolio')} className={ActiveNAv === '#portfolio' ? 'active' : ''}><RiProjectorFill /></a>
      <a href='#testmonials'  onClick={() => SetActiveNav('#testmonials')} className={ActiveNAv === '#testmonials' ? 'active' : ''}><PiCertificateDuotone /></a>
      <a href='#contact'     onClick={() => SetActiveNav('#contact')} className={ActiveNAv === '#contact ' ? 'active' : ''}><BiMessageSquareMinus/></a>
    
    </nav>
  )
}

export default Nav
