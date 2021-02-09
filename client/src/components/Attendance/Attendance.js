import React from 'react';
import emailjs from 'emailjs-com';

//import './Attendance.css';

export default function Attendance() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_f2mja5e', 'template_10fz4sm', e.target, 'user_eYRgicD7vsNuF9O62tN6C')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      
      <input type="text" name="user_name" placeholder='Enter name'/> <br></br>
      
      <input type="email" name="user_email" placeholder='Enter email'/> <br></br>
      
      <textarea name="comments" placeholder='Enter comments or questions here'/> <br></br>
      <br></br>
      <input type="submit" value="Register your Attendance at Training" />
    </form>
  );
}