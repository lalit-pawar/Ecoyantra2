import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Form from "../assets/form.jpg";


const ContactForm = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_4j4mtl6",
          "template_2u3xhyu",
          form.current,
          "avMx0MEJynvFntdoQ"
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
          <>
        <h2>Schedule a Pickup </h2>
         <img className="Form-img " src={Form} alt="" />

      <form  className="StyledContactForm" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>


      </>
    );
  };
  
  export default ContactForm;
  
