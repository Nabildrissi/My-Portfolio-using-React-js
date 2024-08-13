import './Services.css';
import { BsCheckLg } from 'react-icons/bs';

const Services = () => {
  return (
    <section id='services'>
      <h5>My Expertise</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Full Stack Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheckLg className='service_list-icon' />
              <p>Design and Development of Robust Applications</p>
            </li>
            <li>
              <BsCheckLg className='service_list-icon' />
              <p>API Development with Java, Spring Boot, and Node.js</p>
            </li>
            <li>
              <BsCheckLg className='service_list-icon' />
              <p>Frontend Development with React.js and Angular</p>
            </li>
            <li>
              <BsCheckLg className='service_list-icon' />
              <p>Backend Development with Java, Spring, and Hibernate</p>
            </li>
            <li>
              <BsCheckLg className='service_list-icon' />
              <p>Database Management with MySQL and MongoDB</p>
            </li>
          </ul>
        </article>
        {/* end Full Stack Development */}

        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheckLg className='service_list-icon' />
              <p>Interactive User Interface Design</p>
            </li>
            <li>
              <BsCheckLg className='service_list-icon' />
              <p>Responsive Web Design with Material-UI and Bootstrap</p>
            </li>
            <li>
              <BsCheckLg className='service_list-icon' />
              <p>Wireframing and Prototyping</p>
            </li>
            <li>
              <BsCheckLg className='service_list-icon' />
              <p>Usability Testing and Optimization</p>
            </li>
          </ul>
        </article>
        {/* end UI/UX Design */}

        <article className='service'>
          <div className='service_head'>
            <h3>DevOps and Automation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheckLg className='service_list-icon' />
              <p>Containerization with Docker</p>
            </li>
            <li>
              <BsCheckLg className='service_list-icon' />
              <p>CI/CD Pipeline Setup with Jenkins</p>
            </li>
            <li>
              <BsCheckLg className='service_list-icon' />
              <p>Code Quality Assurance with SonarQube</p>
            </li>
            <li>
              <BsCheckLg className='service_list-icon' />
              <p>Process Automation with Microsoft Automate</p>
            </li>
          </ul>
        </article>
        {/* end DevOps and Automation */}
      </div>
    </section>
  );
};

export default Services;