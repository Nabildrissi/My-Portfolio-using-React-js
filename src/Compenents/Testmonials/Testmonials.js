import React from 'react';
import './Testmonials.css';
import AVTR from '../../Assets/images/crtf.png';
import AVTR1 from '../../Assets/images/crtf.png';
import AVTR2 from '../../Assets/images/crtf.png';
import AVTR3 from '../../Assets/images/crtf.png';

// Import Swiper React components and required Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination';

// Don't import Pagination separately, as it's included within Swiper

const data = [
  {
    avatar: AVTR,
    name: 'Java programming problems with software',
    review:
      'This certificate reinforced my in-depth understanding of Java programming. The hands-on projects were particularly helpful in applying the concepts learned. The training was structured to approach problems in a systematic manner.'
    },
    {
      avatar: AVTR,
      name: 'React-Basics',
      review:
        'This certificate provided me with a solid foundation for working with React. I appreciated the clarity of the explanations on basic concepts and component creation. The hands-on exercises were beneficial in strengthening my practical skills.'
      },
      {
        avatar: AVTR,
        name: 'Microsoft Azure and Lifecycle ',
        review:
          'The Microsoft Azure certification provided me with a holistic view of cloud services. I learned how to deploy applications and manage resources on the Azure platform. The hands-on training was crucial to understanding real-world usage scenarios.'
        },
        {
          avatar: AVTR,
          name: 'Scrum Master Certification: Scrum Methodologist',
          review:
            'This certificate gave me an in-depth understanding of Agile principles and the Scrum methodology. I acquired skills to guide teams in the implementation of Scrum. The certification strengthened my ability to foster collaboration and team effectiveness.'
          },
          {
            avatar: AVTR,
            name: 'Introduction du developpement web',
            review:
              'This certification was a great introduction to the fundamentals of web development. I gained an in-depth understanding of front-end technologies such as HTML, CSS and JavaScript. The hands-on projects provided real-world application of the acquired knowledge.'
            }
  // ... (rest of your data objects)
];

const Testmonials = () => {
  return (
    <section id='testmonilas'>
      <h5>Review From clients </h5>
      <h2>TestMonials</h2>

      <Swiper
        className='Conatainer testmonials__container'
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testmoanials'>
              <div className='client_avatar'>
                <img src={avatar} alt='avatar' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testmonials;
