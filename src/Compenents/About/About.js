import React from 'react';
import './About.css';
import Me from '../../Assets/images/meee.png';
import { FiAward } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { VscNewFolder } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} id='myimg' alt='About__Image' />
          </div>
        </div>
        
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FiAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200 all</small>
            </article>
            <article className='about__card'>
              <VscNewFolder className='about__icon' />
              <h5>Projects</h5>
              <small>5 Projets realisée</small>
            </article>
          </div>

          <p>
            I am a passionate web developer, skilled in HTML, CSS, JavaScript, React JS, Java, Spring Boot, Node Js, MySQL, Docker, and Git. My expertise covers both front-end development, with strong experience in creating
            interactive user interfaces, and back-end development, allowing me to design robust and scalable applications. I am an enthusiastic learner, always eager to take on new challenges and explore the latest 
            technologies. My goal is to create innovative IT solutions and solve complex problems through programming. I am convinced that my versatility, passion, and commitment make me a valuable asset 
            to any development team.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;