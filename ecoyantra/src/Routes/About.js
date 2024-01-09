import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../assets/Electronics.jpg";
import  "../Routes/About.css";



function About (){
    return (
      <>
    
      <Navbar/>
      <Hero 
       cName="hero-mid"
       heroImg ={aboutImg} 
       title=" Electronics Recycling"
       text= "We can solve your corporate IT disposition needs quickly and professionally."

       buttonText ="About Us"
       url= '/'
       btnClass="show" 
      
      
      /> 

      <div  className="misson">

      <h2>Our Mission</h2>

<p>At the core of our mission is the commitment to foster sustainable practices in waste management, particularly in the realm of electronic waste. Our mission is to provide a platform that empowers individuals and businesses to responsibly discard their electronic devices while simultaneously promoting the circular economy. Through accessible channels for recycling and disposal, we aim to mitigate the environmental impact of electronic waste and contribute to the conservation of our planet's resources. We strive to cultivate a collective consciousness that acknowledges the significance of responsible e-waste management in building a greener and more sustainable future.</p>
      </div>
      

      <div  className="vision">

<h2>Our Vission</h2>

<p>Our vision is anchored in the aspiration to become a global leader in innovative e-waste management solutions. We envision a world where electronic devices are recycled efficiently, reducing the burden on landfills and minimizing the ecological footprint of technology consumption. Through strategic partnerships and technological advancements, we aim to create a comprehensive ecosystem that seamlessly integrates e-waste recycling into everyday life. Our vision extends beyond waste management; we aspire to influence industry practices, educate communities, and inspire a cultural shift towards a more conscious and sustainable approach to technology use.</p>
</div>



<div className="innovation">

<h2> Innovation </h2>

<p>Our innovation lies in merging cutting-edge technology with environmental stewardship. By leveraging state-of-the-art tools and processes, we are redefining how e-waste is handled. Our platform incorporates user-friendly interfaces, ensuring a hassle-free experience for individuals looking to dispose of their electronic devices responsibly. Through data analytics and artificial intelligence, we optimize the e-waste recycling process, enhancing efficiency and reducing environmental impact. Additionally, our commitment to continuous innovation extends to educational initiatives, raising awareness about the environmental consequences of e-waste and promoting a sense of responsibility among users. We believe that by fostering a culture of innovation, we can revolutionize e-waste management for a sustainable future.</p>
</div>

     </>
    
    )
      
 }
 
 export default About;