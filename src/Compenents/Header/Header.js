import './Header.css'
import CTA from './CTA'
import Me from '../../Assets/images/nabil.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header id='header'>
    <div className='container header__container'>
      <div className='header__content'>
        <h5>Hello, I'm</h5>
        <h1>Nabil Drissi</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <h7>As a software engineering graduate,<br></br> I’m excited to embark on new <br></br>adventures and am eager<br></br> to contribute my skills to innovative projects.</h7>
        <CTA />
        <HeaderSocials />
      </div>
      <div class="image-cadre">
        <img src={Me}alt="Framed Image" />
      </div>
    </div>
   </header>
  )
}

export default Header