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
    <container style={{
      textAlign: "center",
      margin: '20px',
      padding: '15px',
      display: 'block',
      width: '95%',
      height: '500px',
      position: 'relative',
      border: '3px solid #27D6C0',
    }}>
      <div style={{
        textAlign: "center",
        margin: '20px',
        padding: '15px',
        display: 'block',
      }}>
        <form className="attendance-form" onSubmit={sendEmail} 
          style = {{
            width: '90%',
            maxWidth: '40rem',
            margin: '2 rem auto',
            padding: '1 rem',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            padding: '20px',
          }}
        >
          <input type="hidden" name="contact_number" />
          
          <input type="text" name="user_name" placeholder='Enter name'/> <br></br>
          
          <input type="email" name="user_email" placeholder='Enter email'/> <br></br>
          
          <textarea name="comments" placeholder='Enter comments or questions here'/> <br></br>
          <br></br>
          <input type="submit" value="Register your Attendance at Training" style={{
            cursor: 'pointer',
            border: '2 px solid'
            }}/>
        </form>
      </div>
    </container>
  );
}