import React, { useState } from 'react';
import './azert.css';
import VeterinarianList from "./SideBar"
const Edit = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    state: '',
    image: null,
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(form);
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
          value={form.firstName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name *</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={form.lastName}
          onChange={handleInputChange}
          required
        />
      </div >
      <div className="form-group">
        <label htmlFor="email">Email Address *</label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="country">Country *</label>
        <select
          name="country"
          id="country"
          value={form.country}
          onChange={handleInputChange}
          required
        >
          <option value="">USA</option>
          {/* Add more country options here */}
          <option value="">zambia</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="state">State *</label>
        <select
          name="state"
          id="state"
          value={form.state}
          onChange={handleInputChange}
          required
        >
          <option value="">Los Angeles</option>
          {/* Add more state options here */}
          <option value="Los Angeles">jbal lahmer</option>
        </select>
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
   </div>
   </div>
  );
};

export default Edit;