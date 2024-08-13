import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
     <h5>What Skills I have </h5>
     <h2> My Experience</h2>
     <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Devloppement</h3>
        <div className='experience__content'>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icons' />
          <div>
            <h4>Html</h4>
            <small className='text-light'> Experienced </small>
          </div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icons' />
          <div>
            <h4>Css</h4>
            <small className='text-light'> Intermediate</small>
          </div>
          </article>


          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icons' />
          <div>
            <h4>JavaScripts</h4>
            <small className='text-light'> Experienced </small>
          </div>
          </article>
             
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icons' />
          <div>
            <h4>Bootstrap</h4>
            <small className='text-light'> Intermediate </small>
          </div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icons' />
          <div>
            <h4>React</h4>
            <small className='text-light'> Intermediate </small>
          </div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icons' />
          <div>
            <h4>Tailwindcss</h4>
            <small className='text-light'> Intermediate </small>
          </div>
          </article>
        </div>
        </div>
      <div className='experience__backend'>
      <h3>Backend Devloppement</h3>
        <div className='experience__content'>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icons' />
          <div>
            <h4>MySQL</h4>
            <small className='text-light'> Experienced </small>
          </div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icons' />
          <div>
            <h4>Java</h4>
            <small className='text-light'> Intermediate</small>
          </div>
          </article>


          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icons' />
          <div>
            <h4>Spring Boot</h4>
            <small className='text-light'> Experienced </small>
          </div>
          </article>
             
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icons' />
          <div>
            <h4>Node Js</h4>
            <small className='text-light'> Intermediate </small>
          </div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icons' />
          <div>
            <h4>Git</h4>
            <small className='text-light'> Intermediate </small>
          </div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icons' />
          <div>
            <h4>Angular</h4>
            <small className='text-light'> Intermediate </small>
          </div>
          </article>
        </div>
      </div>
     </div>
    </section>
  )
}

export default Experience
