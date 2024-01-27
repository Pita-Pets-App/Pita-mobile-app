import React, { useState, useEffect } from "react";
import './CustomersOverview.css';
import VeterinarianList from './SideBar';
import axios from "axios";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/material'; 
import Cookies from "js-cookie";

const NewEvent = () => {
  const [refresh, setRefresh] = useState(false);
  const [Allusers, setSelecteduser] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 
  useEffect(() => {
    axios.get(`http://localhost:3000/api/events`)
      .then(r => {
        console.log('prov', r.data)
        setSelecteduser(r.data)
      }).catch(err => console.log(err))
  }, [refresh]);

  const handleAcceptUser = async (id) => {
    try {
      const acceptedUser = Allusers.find(user => user.id === id);
      const providerId = acceptedUser.id
      console.log("Accepted user details:", providerId);
      setRefresh(!refresh);
    } catch (err) {
      console.log(err);
    }
  };
  const Backdrop = React.forwardRef((props, ref) => {
    const { open, className, ...other } = props;
    return (
      <div
        className={clsx({ 'base-Backdrop-open': open }, className)}
        ref={ref}
        {...other}
      />
    );
  });
  
 
  const handleImageClick = (id) => {
    setSelectedUserId(selectedUserId === id ? null : id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
                <span>Event Image</span>
                <span>Event Name</span>
                <span>Event Date</span>
                <span>Email</span>
                {/* <span>Provider Experience</span> */}
                <span>Accept/Decline</span>
              </div>

              <div className="rows">
                {Allusers.map((e) => (
                  <div key={e.id} className={`row ${selectedUserId === e.id ? 'selected' : ''}`}>
                    <span>
                      <img
                        loading="lazy"
                        src={e.event_images}
                        className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                        onClick={() => handleImageClick(e.id)}
                      />
                    </span>
                    <span>{e.event_title}</span>
                    <span>{e.event_date}</span>
                    <span>{e.email}</span>
                 
                    <span>
                      <button>
                        <img
                          onClick={() => handleAcceptUser(e.id)}
                          loading="lazy"
                          src="https://cdn-icons-png.flaticon.com/512/9709/9709605.png"
                          className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                        />
                      </button>
                      <button>
                        <img
                          // onClick={() => handleDeclineUser(e.id)}
                          loading="lazy"
                          src="https://cdn-icons-png.flaticon.com/512/10621/10621089.png"
                          className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                        />
                      </button>
                    </span>
                  </div>
                ))}
  
       <div>
      
       {showModal && selectedUserId && (
  <BaseModal
    open={showModal}
    onClose={closeModal}
    BackdropComponent={Backdrop}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <div className="selected-user-modal" onClick={closeModal}>
      <div className="modal-content center">
        <img
          src={Allusers.find((user) => user.id === selectedUserId).provider_cv}
          alt="Selected User"
          className="selected-user-image"
        />
      </div>
    </div>
  </BaseModal>
)}
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};



   
export default NewEvent;
