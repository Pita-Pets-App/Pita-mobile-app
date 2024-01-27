import React, { useState } from 'react';
import './azert.css';
import VeterinarianList from "./SideBar"
import {Link, useNavigate } from 'react-router-dom';
import { useIdentity } from './IdentityContext';
import Cookies from 'js-cookie';
import axios from "axios"

const Edit = () => {
  const [form, setForm] = useState({
    name: '',
    admin_password: '',
    email: '',
    image: null,
  });
  const navigate = useNavigate();
  const { setUser } = useIdentity();
 
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit =async  (e) => {
    try {
      const response = await axios.post('http://localhost:3000/api/admin/register', {
      ...form
      });
      console.log(response);

      const { user_phOrEmail, user_name, tok, id } = response.data;
  
      if (user_phOrEmail && user_name && tok) {
        Cookies.set('authToken', tok, { expires: 7 });
        setUser(response.data);
  
        // Show an alert when registration is successful
        alert('Registration successful');
  
        setSuccessMessage('Registration successful');
        setErrorMessage('');
  
        response.data.user_role === "admin" ? navigate(`/admin/${response.data.id}`)
          : response.data.user_role === "seller"
            ? navigate(`/seller/${response.data.id}`)
            : navigate(`/`);
      } else {
        setSuccessMessage('');
        setErrorMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Error during registration. Please try again.');
      console.error('Error during registration:', error);
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
        <label htmlFor="name">First Name *</label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="admin_password">Password*</label>
        <input
          type="password"
          name="admin_password"
          id="admin_password"
          value={form.admin_password}
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