import './Contact.css'
import {MdMarkEmailUnread} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from "@emailjs/browser";
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import whatsapplink from '../../Assets/images/w.png'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8daclx8",
        "template_cy6tb0g",
        form.current,
        "4EGjrYfQyoyPAPJK4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me </h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact_option'>
            <MdMarkEmailUnread className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>drissinabil66@gmail.com</h5>
            <a href='drissinabil66@gmail.com' target='_blank'>Send me a message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_option_icon'/>
            <h4>Facebook</h4>
            <h5>Nabil Drissi</h5>
            <a href='www.facebook.com' target='_blank'>Send me a message</a>
          </article>


          <article className='contact_option'>
            <BsWhatsapp className='contact_option_icon'/>
            <h4>Whatsapp</h4>
            <h5>+212713311274</h5>
            <div>
            <img style={{width:'40px', height:'40px'}} src={whatsapplink} alt='whatsap'/>
            </div>
            <a href='https://wa.link/674oy0' target='_blank'>Send me a message</a>
          </article>
        </div>
        {/*End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full name '  required/>
            <input type='email' name='email' placeholder='yournmae@example.com'required />
            <textarea name='message' rows='7' placeholder='your Message' required/>
            <button type='submit' className='btn btn-primary-message'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
