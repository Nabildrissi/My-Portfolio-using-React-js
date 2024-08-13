import './Portfolio.css';
import IMG1 from '../../Assets/images/Appweb.png';
import IMG2 from '../../Assets/images/Appweb2.png';
import IMG3 from '../../Assets/images/tessi.png';

const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'Website Using React JS',
    description: `Creation of an online e-commerce web application. The goal of this application is to provide users with the ability to publish and search for products. 
    - Technologies: Express, Node.js, React.js 
    - Developed a welcome page for the application that allows users to log in or register, using Redux reducers to manage the authentication state. 
    - Developed a product posting page that allows users to create new products using Axios to send product data to the backend. 
    - Developed a product search page that allows users to search for products by name, category, or price, using Axios to retrieve product data from the backend.`,
    github: 'https://www.github.com',
    demo: 'https://www.linkedin.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Website Using HTML, CSS, JS',
    description: `Using React for the frontend, Node.js for the backend, and MySQL for the database. This project involved creating a modern interface for content sharing, implementing features for creating, reading, and commenting on articles. 
    - Gained hands-on experience in full-stack development and data management, enhancing web engineering skills.`,
    github: 'https://www.github.com',
    demo: 'https://www.linkedin.com'
  }, 
  {
    id: 3,
    image: IMG3,
    title: 'Web Application Using Next.js, Redux, MUI, Java, Spring Boot, Spring Data',
    description: `This project was built using Next.js for the frontend, Redux for state management, and Material-UI (MUI) for the user interface. The backend was developed with Java, leveraging Spring Boot and Spring Data for building RESTful APIs and managing data persistence. 
    - Developed a dynamic web application with server-side rendering using Next.js.
    - Implemented state management using Redux to handle complex application states.
    - Created a modern and responsive UI with Material-UI.
    - Built a robust backend with Java and Spring Boot, ensuring secure and efficient data handling through Spring Data.`,
    github: 'https://www.github.com',
    demo: 'https://www.linkedin.com'
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Completed Projects</h2>
      
      <div className='container portfolio__container'>
        {projects.map(({ id, image, title, description, github, demo }) => (
          <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p style={{ fontSize: '15px' }}>{description}</p>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank' rel="noopener noreferrer">My GitHub</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">LinkedIn</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;