import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../assets/Electronics.jpg";
import EwasteBlog from "../components/blog";



function Blogs (){
    return (
      <>
     <Navbar/>
      <Hero 
       cName="hero-service"
       heroImg ={aboutImg} 
        title = "Read About Electronics here!"
    
      
      
      /> 

      <EwasteBlog />
      </>
    )
      
 }
 
 export default Blogs;