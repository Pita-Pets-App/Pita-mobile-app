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

      console.log('Request successful');
    } catch (err) {
      console.error('Error:', err);
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
    {/* <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="firstName">Name *</label>
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
        <label htmlFor="lastName"> Email Address *</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div >
      <div className="form-group">
        <label htmlFor="email">New Password *</label>
        <input
          type="password"
          name="email"
          id="email"
          value={formData.newPassword}
          onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
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
    </form> */}
    <form onSubmit={handleSubmit} className="form">
            <div className="form-section">
              <div className="text-zinc-900 text-2xl font-semibold">Name</div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
              />
            </div>
            <div className="form-section">
              <div className="text-zinc-900 text-2xl font-semibold">Email</div>
              <input
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input"
              />
            </div>
            <div className="form-section">
              <div className="text-zinc-900 text-2xl font-semibold">New Password</div>
              <input
                type="password"
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                className="form-input"
              />
            </div>
            <div className="form-buttons">
            <button type="submit" name="saveData">
              Save Info and Password
            </button>
          </div>
          </form>
    </div>
    </div>
    </div>
   </div>
   </div>
  );
};

export default Edit;