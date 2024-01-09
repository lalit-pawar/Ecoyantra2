import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../assets/Electronics.jpg";
import ContactForm from "../components/contactForm";




function Contact (){
    return (
      <>
     <Navbar/>
      <Hero 
       cName="hero-service"
       heroImg ={aboutImg} 
      
       buttonText ="Contact Us"
       url= '/'
       btnClass="show" 
      
      


      /> 


     
         
       
      <ContactForm />
      </>
    )
      
 }
 
 export default Contact;