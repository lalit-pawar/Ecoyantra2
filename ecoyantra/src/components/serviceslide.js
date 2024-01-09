import "../components/serviceslideStyle.css";
import Servicedata from "./servicedata";
import cells from "../assets/cells.jpg";
import comp from "../assets/gadget.jpg";
import collector from "../assets/collector.jpg";



function serviceslide (){
  
    return(

       <div className="serviceslide">

          <h1>Our Services</h1>
          <p>What we do</p>

          <div className="Servicecard">
            <Servicedata

            image = {cells}
            heading ="Ewaste collection"
            text=" 
            Efficient e-waste collection safeguards ecosystems from hazardous materials and encourages the reuse of valuable components. It forms a crucial part of the circular economy, reducing the environmental impact of electronic waste and fostering a greener future."

            
            />



<Servicedata

image = {comp}
heading ="Electronics gadgets Resale"
text=" 
Efficient e-waste collection safeguards ecosystems from hazardous materials and encourages the reuse of valuable components. It forms a crucial part of the circular economy, reducing the environmental impact of electronic waste and fostering a greener future."


/>


<Servicedata

            image = {collector}
            heading ="E-waste Facility Location"
            text=" 
            Efficient e-waste collection safeguards ecosystems from hazardous materials and encourages the reuse of valuable components. It forms a crucial part of the circular economy, reducing the environmental impact of electronic waste and fostering a greener future."

            
            />
          </div>
          

       </div>

    );

};

export default serviceslide;