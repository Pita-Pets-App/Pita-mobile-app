import React, { useState, useEffect } from "react";
import './CustomersOverview.css';
import VeterinarianList from './SideBar';
import axios from "axios";

const AllUsers = () => {
  const [refresh, setRefresh] = useState(false);
  const [Allusers, setSelecteduser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/users`)
      .then(r => {
        console.log('prov', r.data)
        setSelecteduser(r.data)
      }).catch(err => console.log(err))
  }, [refresh]);

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${id}`);
      setRefresh(!refresh);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex w-full flex-col items-stretch mt-4 px-4 max-md:max-w-full">
      <div className="flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <div className="max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
              <VeterinarianList />
            </div>
            <div className="customers-overview">
              {/* Render the table header */}
              <div className="header">
                <span>Image</span>
                <span>Name</span>
                <span>Email</span>
                <span>Location</span>
                <span>Provider Experience</span>
                <span>Signed Up</span>
                <span>Action</span> 
              </div>

              <div className="rows">
                {Allusers.map((e) => (
                  <div key={e.id} className="row">
                    <span>
                      <img
                        loading="lazy"
                        src={e.image}
                        className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                      />
                    </span>
                    <span>{e.fname}</span>
                    <span>{e.email}</span>
                    <span>{e.location}</span>
                    <span>{e.provider_experience}</span>
                    <span>{e.signUpDate}</span>
                    <span>
                      <button
                        onClick={() => handleDeleteUser(e.id)}
                        className="delete-button"
                      >
                        Delete
                      </button>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
