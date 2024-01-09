import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../assets/Electronics.jpg";
import Map from '../components/Map';
import Formdata from "../components/Forminput";



function Service (){
    return (
      <>
     <Navbar/>
      <Hero 
       cName="hero-service"
       heroImg ={aboutImg} 
      
       buttonText ="Our Services"
       url= '/'
       btnClass="show" 
      
      
      /> 

     <div  className="Intro">
          
          <h2>Find Your Nearest E waste Facility center here!</h2>

     </div>

      <Map/>


     <Formdata />

      </>

     
    )
      
 }
 
 export default Service;