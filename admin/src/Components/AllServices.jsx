import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const DeleteButton = styled.button`
  background-color: #ff5a5f;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
`;
function DashboardOverview(props) {
  const [selectedService, setSelectedService] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [selecteduser, setSelecteduser] = useState(null);
  const [selectedprov, setSelectedprov] = useState([]);
  const [idService, setIdService] = useState(0);

  const [All, setAll] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [newServiceName, setNewServiceName] = useState("");
  const [newServiceImage, setNewServiceImage] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:3000/api/provider/type/${idService}`)
      .then(r => {
        console.log('prov', r.data)
        setSelectedprov(r.data)
      }).catch(err => console.log(err))
  }, [refresh, idService]);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/service`)
      .then(r => {
        console.log('all', r.data)
        setAll(r.data)
      }).catch(err => console.log(err))
  }, [refresh])

  useEffect(() => {
    axios.get(`http://localhost:3000/api/users`)
      .then(r => {
        console.log('all', r.data)
        setSelecteduser(r.data)
      }).catch(err => console.log(err))
  }, [refresh])
  const handleServiceClick = (id) => {
    setIdService(id)
  };

  const handleDeleteProv = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/provider/${id}`);
      setRefresh(!refresh);

    } catch (err) {
      console.log(err);
    }
  }
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${id}`);
      setRefresh(!refresh);

    } catch (err) {
      console.log(err);
    }
  }
  const handleDeleteService = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/service/${id}`);
      setRefresh(!refresh);

    } catch (err) {
      console.log(err);
    }
  }
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
  const handleServiceClick2 = (data) => {
    setSelectedData("All services");
  };
  const handleServiceClick3 = (user) => {
    setSelectedData("All users");
  };
  return (
    <div className="bg-stone-950 ">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0" style={{ backgroundColor: 'black' }}>

        <div className="flex flex-col items-stretch w-[15%] max-md:w-full max-md:ml-0" >
          <span className="flex flex-col mt-11 max-md:mt-10">
            <img
              loading="lazy"
              srcSet="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
              className="aspect-[0.99] object-contain object-center w-[86px] overflow-hidden max-w-full self-start"
            />
            <div className="text-white text-3xl font-semibold leading-9 self-stretch mt-7">
              Samantha
            </div>
            <div className="text-white text-lg leading-7 self-stretch whitespace-nowrap mt-5">
              samantha@email.com
            </div>
            <div className="text-white text-2xl font-semibold leading-9 self-stretch mt-32 max-md:mt-10">
              Dashboard:
            </div>
            <div className="text-white text-2xl font-semibold leading-9 self-stretch mt-12 max-md:mt-10"
              onClick={handleServiceClick2}
            >
              All services
            </div>
            <div className="text-white text-2xl font-semibold leading-9 self-stretch mt-10"
              onClick={handleServiceClick3}
            >
              All users
            </div>
            <div className="text-white text-2xl font-semibold leading-9 self-stretch mt-12 max-md:mt-10">
              Event request
            </div>
            <div className="text-white text-2xl font-semibold leading-9 self-stretch mt-10 max-md:mt-10">
              Accounts
            </div>
            <div className="text-white text-2xl font-semibold leading-9 self-stretch mt-11 max-md:mt-10">
              Settings
            </div>
          </span>
        </div>



        <div className="flex flex-col items-stretch w-[85%] ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-white grow w-full pl-20 rounded-[30px] max-md:max-w-full max-md:mt-10 max-md:pl-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-center my-auto max-md:max-w-full max-md:mt-10" >
                  <div className="self-stretch flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                    <span className="flex flex-col items-stretch">

                    </span>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-[3.97] object-contain object-center w-[123px] overflow-hidden shrink-0 max-w-full self-start"
                    />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7828f9828a0665dcbbc753ef69b3be2ba7105914e9b9c58c0f22359bf7246524?"
                    className="aspect-[8.5] object-contain object-center w-[510px] overflow-hidden mt-12 max-md:max-w-full max-md:mt-10"
                  />
                  <div className="self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[84%] max-md:w-full max-md:ml-0">
                        <span className="flex grow flex-col items-stretch max-md:mt-10">


                          {
                            selectedData === "All services" && All.map((e, i) => (

                              <div className="flex items-stretch justify-between gap-4 mt-10" key={i} onClick={() => handleServiceClick(e.id)}>

                                <img
                                  loading="lazy"
                                  src={e.service_image}
                                  className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                                />
                                <span className="flex grow basis-[0%] flex-col items-stretch mt-2 self-start">
                                  <div className="text-slate-800 text-base font-medium tracking-wide">
                                    {e.service_name}
                                  </div>
                                  

                                </span>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full" style={{backgroundColor:"#28608F"}} onClick={() => handleDeleteService(e.id)}>
                                    Delete Service
                                  </button>
                              </div>
                            ))}

                          {selectedData === "All users" && selecteduser.map((e, i) => (
                            <div className="flex items-stretch justify-between gap-4 mt-10" key={i} onClick={() => handleServiceClick(e.name)}>
                              <img
                                loading="lazy"
                                src={e.image}
                                className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                              />
                              <span className="flex grow basis-[0%] flex-col items-stretch mt-2 self-start">
                                <div className="text-slate-800 text-base font-medium tracking-wide">
                                  {e.fname + ' ' + e.lname}
                                </div>
                                <div className="text-gray-700 text-sm tracking-wide whitespace-nowrap mt-2.5">
                                  {e.email}
                                </div>
                               
                              </span>
                              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full" style={{backgroundColor:"#28608F"}} onClick={() => handleDeleteUser(e.id)}>
                                  Delete Veterinarian
                                </button >
                            </div>
                          ))}

                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0" style={{ backgroundColor: '#F9FAFC' }}>
                <span className="bg-slate-50 flex w-full grow flex-col items-stretch mx-auto p-12 rounded-none max-md:mt-10 max-md:px-5">








                  {selectedprov.map((e, i) => (
                    <div key={i} >
                      <span className="flex items-stretch justify-between gap-5 mt-9">
                        <img
                          loading="lazy"
                          src={e.image}
                          className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                        />

                        <span className="flex grow basis-[0%] flex-col items-stretch mt-2 self-start">
                          <div className="text-slate-800 text-base font-medium tracking-wide">
                            {e.fname}
                          </div>
                          <div className="text-gray-700 text-sm tracking-wide whitespace-nowrap mt-2.5">
                            {e.email}
                          </div>
                        </span>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full" style={{backgroundColor:"#28608F"}} onClick={() => handleDeleteProv(e.id)}>
                          Delete Veterinarian
                        </button >
                      </span>
                    </div>
                  ))}
                  {/* {selectedService === "pet sitter" &&
                    petSitter.map((e, i) => (
                      <div key={i} >
                        <span className="flex items-stretch justify-between gap-5 mt-9">
                          <img
                            loading="lazy"
                            src={e.image}
                            className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                          />
                          <span className="flex grow basis-[0%] flex-col items-stretch mt-2 self-start">
                            <div className="text-slate-800 text-base font-medium tracking-wide">
                              {e.name}
                            </div>
                            <div className="text-gray-700 text-sm tracking-wide whitespace-nowrap mt-2.5">
                              {e.email}
                            </div>
                          </span>
                        </span>
                      </div>
                    ))} */}






                  <div className="bg-gray-100 flex flex-col justify-center items-stretch mt-4 rounded-md">
                    <div className="bg-emerald-400 flex shrink-0 h-[5px] flex-col rounded-md" />
                  </div>


                  <span className="bg-slate-100 flex w-full flex-col items-stretch mt-24 mb-2.5 pb-6 px-6 rounded-2xl max-md:mt-10 max-md:px-5">


                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-[30px] max-w-[400px] p-8 mt-8 mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Add New Service</h2>
        <form onSubmit={handleAddService}>
          <label htmlFor="newServiceName" className="block text-sm font-medium text-gray-700">
            Service Name
          </label>
          <input
            type="text"
            id="newServiceName"
            name="newServiceName"
            value={newServiceName}
            onChange={(e) => setNewServiceName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />

          <label htmlFor="newServiceImage" className="block mt-4 text-sm font-medium text-gray-700">
            Service Image URL
          </label>
          <input
            type="text"
            id="newServiceImage"
            name="newServiceImage"
            value={newServiceImage}
            onChange={(e) => setNewServiceImage(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />

          <button type="submit" className="mt-4 p-2 bg-blue-500 text-black rounded-md cursor-pointer"  >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
}
export default DashboardOverview