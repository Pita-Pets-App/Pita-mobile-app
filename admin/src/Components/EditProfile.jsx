import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const DashboardContainer = styled.div`
  display: flex;
  background-color: #121212; /* Dark background color */
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 15%;
  background-color: #121212;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
n
  img {
    aspect-ratio: 0.99;
    object-fit: contain;
    width: 86px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  .user-info {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 10px;
  }

  .user-email {
    color: white;
    font-size: 1rem;
    margin-top: 5px;
  }

  .dashboard-buttons {
    margin-top: 32px;

    button {
      color: white;
      font-size: 1rem;
      font-weight: bold;
      margin-top: 10px;
      background-color: #121212;
      border: 2px solid white;
      border-radius: 15px;
      padding: 8px 15px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #555;
      }
    }
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f0f0f0; /* Light background color */
  border-radius: 30px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-top: 20px;

  .form-section {
    width: 100%;
    margin-top: 20px;

    .input-label {
      font-size: 2xl;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .form-input {
      width: 100%;
      margin-top: 10px;
      padding: 10px;
      border: 2px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
      transition: border-color 0.3s;

      &:focus {
        border-color: #ff4500;
      }
    }
  }

  .form-buttons {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;

    button {
      flex: 1;
      color: #fff;
      font-size: 1rem;
      font-weight: bold;
      margin: 10px;
      padding: 10px;
      border: 2px solid #ff4500;
      border-radius: 10px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #ff4500;
      }
    }
  }
`;
function DashboardOverview() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    newPassword: ''
  });
  const navigate = useNavigate();

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
  
  const handleCancel = () => {
    navigate("/dash");
  };
  return (
    <DashboardContainer>
      <Sidebar>
        <img
          loading="lazy"
          src={Cookies.get('image', { expires: 60 * 60 * 24 })}
          alt="User Avatar"
        />
        <div className="user-info">{Cookies.get('name', { expires: 60 * 60 * 24 })}</div>
        <div className="user-email">{Cookies.get('email', { expires: 60 * 60 * 24 })}</div>
        <div className="dashboard-buttons">
          <button>All services</button>
          <button>All users</button>
          <button>Event request</button>
          <button>Accounts</button>
        </div>
      </Sidebar>
      <MainContent>

        <FormContainer>
          <form onSubmit={handleSubmit}>
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
            <button type="reset" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" name="saveData">
              Save Info and Password
            </button>
          </div>
          </form>
        </FormContainer>
      </MainContent>
    </DashboardContainer>
  );
}

export default DashboardOverview;
