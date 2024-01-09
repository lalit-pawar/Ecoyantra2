import Welcome from "../components/welcome"; 
import Serviceslide from "../components/serviceslide";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import heroImg from "../assets/Earth.jpg";





function Home (){
   return (
     <>
      <Navbar/>
      <Hero 
       cName="hero"
       heroImg= {heroImg} 
       title="Save Your Planet"
       text= "We can solve your corporate IT disposition needs quickly and professionally."

       buttonText ="save your community"
       url= '/'
       btnClass="show" /> 
     
       <Welcome/>

       <Serviceslide/>
      
     </>
   )
     
}

export default Home;