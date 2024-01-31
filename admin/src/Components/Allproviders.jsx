import React, { useState, useEffect } from "react";
import './CustomersOverview.css';
import SideBar from './SideBar.jsx';
import axios from "axios";
import Cookies from "js-cookie";
const CustomersOverview = () => {
  const [refresh, setRefresh] = useState(false);
  const [All, setAll] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/provider`)
      .then(r => {
        console.log('all', r.data)
        setAll(r.data)
      }).catch(err => console.log(err))
  }, [refresh]);

  const handleDeleteProv = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/provider/${id}`);
      setRefresh(!refresh);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-stone-950 ">
    <div className="bg-neutral-100 flex flex-col items-stretch pb-10">
      <div className="flex w-full items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap">
        <div className="bg-white flex items-stretch justify-between gap-5 pl-6 pr-4 py-3 rounded-none max-md:pl-5">
          <div className="flex items-stretch justify-between gap-4">
            <img
              loading="lazy"
              src={Cookies.get('image', { expires: 60 * 60 * 24 })}
              className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-black text-opacity-90 text-xl font-medium leading-8 tracking-normal self-center my-auto">
              {Cookies.get('name', { expires: 60 * 60 * 24 })}

            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/02b269a81b64fe1458ca011bfb60fd5daec23a52954665d368920ff32d7c39cd?"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full mt-3 self-start"
          />
        </div>
        <div className="bg-white flex justify-between gap-5 pl-4 pr-6 py-5 rounded-none items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div className="flex items-stretch gap-2 mt-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/001260827173786f105b986d8a294f9288c9afb7851e693f3a2d0ff0a1d072e8?"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-neutral-400 text-sm leading-5 tracking-wide self-center grow whitespace-nowrap my-auto">
              Quick search
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4703cb6936aaf5a555fc0caf62a49f6db796ee04bf72d7a24bc722685bfd45ae?"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-stretch mt-4 px-4 max-md:max-w-full">
        <div className="flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="max-md:max-w-full">
            
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
                <SideBar />
              </div>

            <div className="customers-overview">
              <div>
                <div className="d-flex justify-content-around">
                  <button type="button" className="btn btn-primary">
                    ALL
                  </button>
                  <button type="button" className="btn btn-primary">
                    VETS
                  </button>
                  <button type="button" className="btn btn-primary">
                    Emergency
                  </button>
                  <button type="button" className="btn btn-primary">
                    Pet's Sitter
                  </button>
                  <button type="button" className="btn btn-primary">
                    Pet's Shop
                  </button>
                  <button type="button" className="btn btn-primary">
                    Pet's Trainer
                  </button>
                </div>
              </div>
              <div className="header">
                <span>Image</span>
                <span>Name</span>
                <span>Email</span>
                <span>Location</span>
                <span>Provider Experience</span>
                <span>Delete</span>
              </div>
              <div className="rows">
                {All.map((e) => (
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
                    {/* <span>{e.signUpDate}</span> */}
                    <span>
                      <button

                        onClick={() => handleDeleteProv(e.id)}
                    
                      >
                        <img
                          loading="lazy"
                          src="https://cdn-icons-png.freepik.com/512/6861/6861362.png"
                          className="aspect-square object-contain object-center w-6 h-6 overflow-hidden shrink-0 max-w-full"
                          alt="Small Icon"
                        />

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
    </div>
    </div>

  );
};

export default CustomersOverview;
