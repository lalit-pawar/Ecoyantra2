import "./Forminput.css";
import React, { useState } from 'react';

const Formdata = () =>{
       
    const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    brand: '',
    model: '',
    processor: '',
    ram: '',
    storage: '',
    displaySize: '',
    resolution: '',
    operatingSystem: '',
    batteryCapacity: '',
    wifi: false,
    bluetooth: false,
    ports: [],
    camera: '',
    audio: '',
    video: '',
    color: '',
    weight: '',
    dimensions: '',
    touchscreen: false,
    fingerprintSensor: false,
    faceRecognition: false,
    specialFeatures: [],
    price: 0,
    availability: true,
    sellerInformation: {
      sellername: '',
      seller_mob_number: 0,
    },
  });

  const [isPopupVisible, setPopupVisibility] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (type === 'select-multiple') {
      const selectedOptions = Array.from(e.target.selectedOptions).map(
        (option) => option.value
      );
      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedOptions,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server or perform other actions
    console.log(formData);
    setPopupVisibility(true);
  };

  const Popup = () => (
    <div className="popup">
    <h2>Details Submitted Successfully!</h2>
    <p>
      Thank you for contributing to our e-waste recycling program. Your cash
      points will be added to your account.
    </p>
    <button onClick={() => setPopupVisibility(true)}>Close</button>
  </div>
  );
  return (

    <>
    <h2>Submit Your Cash Rewarding E waste here</h2>
     
    <form className="Forminput" onSubmit={handleSubmit}>
      <label>Product Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label>Category</label>
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />

<label>Brand</label>
      <input
        type="text"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
      />

<label>model</label>
      <input
        type="text"
        name="model"
        value={formData.model}
        onChange={handleChange}
      />
       <label>Processor</label>
      <input
        type="text"
        name="processor"
        value={formData.processor}
        onChange={handleChange}
      />
       <label>Ram</label>
      <input
        type="text"
        name="ram"
        value={formData.ram}
        onChange={handleChange}
      />
       <label>Storage</label>
      <input
        type="text"
        name="storage"
        value={formData.storage}
        onChange={handleChange}
      />
       <label>displaySize</label>
      <input
        type="text"
        name="displaySize"
        value={formData.displaySize}
        onChange={handleChange}
      />

<label>Operating System</label>
      <input
        type="text"
        name="operatingSystem"
        value={formData.operatingSystem}
        onChange={handleChange}
      />



<label>batteryCapacity</label>
      <input
        type="text"
        name="batteryCapacity"
        value={formData.batteryCapacity}
        onChange={handleChange}
      />

      <label>wifi</label>
      <input
        type="text"
        name="wifi"
        value={formData.wifi}
        onChange={handleChange}
      />

<label>bluetooth</label>
      <input
        type="text"
        name="bluetooth"
        value={formData.bluetooth}
        onChange={handleChange}
      />

<label>ports</label>
      <input
        type="text"
        name="ports"
        value={formData.ports}
        onChange={handleChange}
      />

<label>camera</label>
      <input
        type="text"
        name="camera"
        value={formData.camera}
        onChange={handleChange}
      />

<label> Audio</label>
      <input
        type="text"
        name="audio"
        value={formData.audio}
        onChange={handleChange}
      />
     <label>video</label>
      <input
        type="text"
        name="video"
        value={formData.video}
        onChange={handleChange}
      />

<label> color</label>
      <input
        type="text"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />

<label> weight</label>
      <input
        type="text"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
      />



     
     
     <div style={{ marginTop: '20px' }}>
        <input type="submit" value="Send" />
      </div>


      {isPopupVisible && <Popup />}
      
    </form>

    
      </>
    );
  };
export default Formdata;
