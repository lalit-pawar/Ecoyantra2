import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';
import About from './Routes/About';
import Service from './Routes/Service';
import Blog from './Routes/Blog';
import Contact from './Routes/Contact';



function App() {
  return (
    <div className="App">

      <Routes>
       <Route path="/" element ={<Home/>} />
       <Route path="/About" element ={<About/>} />
       <Route path="/Service" element ={<Service/>} />
       <Route path="/Blog" element ={<Blog/>} />
       <Route path="/Contact" element ={<Contact/>} />
      </Routes>
     
      
    </div>
  );
}

export default App;
