import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Edit from "./EditProfile";
import styled from "styled-components";
import Cookies from "js-cookie";
import VeterinarianList from "./SideBar"
import AllProviders from "./Allproviders"
import { PieChart } from '@mui/x-charts/PieChart';

import { BarChart } from '@mui/x-charts/BarChart';

function DashboardOverview(props) {
  // const [selecteduser, setSelecteduser] = useState(null);
  
  
  const [formData, setFormData] = useState({
    ca_name: '',
    ca_img: null,
  });
  const [selectedNavItem, setSelectedNavItem] = useState("All services");

  const [refresh, setRefresh] = useState(false);
  const [newServiceName, setNewServiceName] = useState("");
  const [newServiceImage, setNewServiceImage] = useState("");
  const data = [
    { value: 30, label: 'veterinarian' },
    { value: 50, label: 'Emergency' },
    { value: 20, label: 'Pets Sitter' },
    { value: 30, label: 'Pets Shop' },
    { value: 50, label: 'Pets Trainer' },
  ];
  const handleDeleteService = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/service/${id}`);
      setRefresh(!refresh);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddService = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to add a new service
      await axios.post("http://localhost:3000/api/service", {
        service_name: newServiceName,
        service_image: newServiceImage,
      });
      setRefresh(!refresh);
      // Clear the form fields after submission
      setNewServiceName("");
      setNewServiceImage("");
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
            <VeterinarianList />
            </div>
           
              <div className="flex flex-col items-stretch w-[60%] ml-5 max-md:w-full max-md:ml-0">
                
                <BarChart
                      series={[
                        { data: [35, 44] },
                        { data: [51, 6] },
                        { data: [15, 25] },
                        { data: [60, 50] },
                      ]}
                      height={290}
                      xAxis={[{ data: ['providers', 'users'], scaleType: 'band' }]}
                      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    />
              </div>
           
          
              <div className="flex flex-col items-stretch w-[70%] ml-5 max-md:w-full max-md:ml-0">
                <PieChart
                  series={[
                    {
                      data,
                      highlightScope: { faded: 'global', highlighted: 'item' },
                      faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    },
                  ]}
                  height={300}
                />
              </div>
            
          </div>
        </div>
      </div>
        <div className="mt-6 max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
            
            </div>
            {/* <AllProviders/> */}
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}
export default DashboardOverview