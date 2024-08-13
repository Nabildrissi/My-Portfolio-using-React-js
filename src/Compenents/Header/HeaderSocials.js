import './Header.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from'react-icons/bs' 
import { BsTwitter } from 'react-icons/bs';
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/nabildrissi/' target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/Nabildrissi' target='_blank' rel='noreferrer'><BsGithub/></a>
        <a href='https://x.com/nabilissird' target='_blank' rel='noreferrer'><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials
