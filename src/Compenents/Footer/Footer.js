import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>Nabil</a>


      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testmonials'>testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    <div className='footer__socials'>
      <a href='https://www.faceboook.com'><FaFacebookF /></a>
      <a href='https://www.instagram.com'><FiInstagram /></a>
      <a href='https://www.twitter.com'><IoLogoTwitter /></a>
    </div>
   
   <div className='footer__copyright'>
      <small>&copy; Nabil Portfolio. All right Reserved </small>
   </div>
   
    </footer>
  )
}

export default Footer
