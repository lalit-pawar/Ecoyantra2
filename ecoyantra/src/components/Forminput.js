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
  };

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
        name="Ram"
        value={formData.ram}
        onChange={handleChange}
      />
       <label>Storage</label>
      <input
        type="text"
        name="Storage"
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
        name="Operating System"
        value={formData.operatingSystem}
        onChange={handleChange}
      />

{/* batteryCapacity: '',
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
    availability: true, */}





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
        name="Audio"
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
        name="category"
        value={formData.category}
        onChange={handleChange}
      />

<label> weight</label>
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />


      <label>Seller Name</label>
      <input
        type="text"
        name="sellerInformation.sellername"
        value={formData.sellerInformation.sellername}
        onChange={handleChange}
      />

      <label>Seller Mobile Number</label>
      <input
        type="number"
        name="sellerInformation.seller_mob_number"
        value={formData.sellerInformation.seller_mob_number}
        onChange={handleChange}
      />
     
     <div style={{ marginTop: '20px' }}>
        <input type="submit" value="Send" />
      </div>
      
    </form>


      </>
    );
  };
export default Formdata;