import React, { useState } from 'react';
import './azert.css';
import axios from "axios"
import VeterinarianList from "./SideBar"
const AddService = () => {
  const [form, setForm] = useState({
    firstName: 'Anika',
    lastName: 'Visser',
    email: 'demo@devias.io',
    country: 'USA',
    state: 'Los Angeles',
    image: null,
  });
  
  const [newServiceName, setNewServiceName] = useState("");
  const [newServiceImage, setNewServiceImage] = useState("");
  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to add a new service
      await axios.post("http://localhost:3000/api/service", {
        service_name: newServiceName,
        service_image: newServiceImage,
      });
      // Clear the form fields after submission
      setNewServiceName("");
      setNewServiceImage("");
    } catch (err) {
      console.log(err);
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log(form);
  // };

  return (
    <div className="flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
    <div className="max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
        <VeterinarianList />
        </div>
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="firstName">Service</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={form.firstName}
          onChange={handleInputChange}
          required
        />
      </div>
    
     
      <div className="form-group">
        <label htmlFor="image">Upload picture</label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={handleImageChange}
        />
      </div>
      <button type="submit" className="submit-btn">
        Save details
      </button>
    </form>
    </div>
    </div>
    </div>
    
  );
};

export default AddService;