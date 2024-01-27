import React, { useState } from 'react';
import './azert.css';
import axios from "axios";
import VeterinarianList from "./SideBar"
const Edit = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    newPassword: ''
  });
  
  // const handleInputChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  const handleImageChange = (e) => {
    // setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (e.nativeEvent.submitter.name === 'saveData') {
        // Save both info and password
        await axios.put(`http://localhost:3000/api/admin/update/${1}`, {
          name: formData.name,
          email: formData.email,
        });

        await axios.put(`http://localhost:3000/api/admin/updatePass/${1}`, {
          newPassword: formData.newPassword,
        });
      }

      // Successful request
      console.log('Request successful');
    } catch (err) {
      // Log detailed error information
      console.error('Error:', err);
      // Display a user-friendly error message
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-stone-950 ">
    <div className="flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
    <div className="max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
        <VeterinarianList />
        </div>
        <div className="card">
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="firstName">First Name *</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name *</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          // onChange={handleInputChange}
          required
        />
      </div >
      <div className="form-group">
        <label htmlFor="email">Email Address *</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      {/* <div className="form-group">
        <label htmlFor="country">Country *</label>
        <select
          name="country"
          id="country"
          value={form.country}
          onChange={handleInputChange}
          required
        >
          <option value="">USA</option>
        
          <option value="">zambia</option>
        </select>
      </div> */}
      {/* <div className="form-group">
        <label htmlFor="state">State *</label>
        <select
          name="state"
          id="state"
          value={form.state}
          onChange={handleInputChange}
          required
        >
          <option value="">Los Angeles</option>
         
          <option value="Los Angeles">jbal lahmer</option>
        </select>
      </div> */}
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
   </div>
   </div>
  );
};

export default Edit;