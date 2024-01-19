import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
function Edit(props) {
    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [refrechers, setRefrechers] = useState(false); 
  const [formData, setFormData] = useState({
    name: '',
    email:''

  });
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/admin/update/${1}`, {
        name: formData.name,
        email: formData.email
      });
      setRefrechers(!refrechers);
    } catch (err) {
      console.log(err);
    }
  };
    return (
        <div className="bg-white flex items-stretch justify-between gap-3.5 pr-10 max-md:flex-wrap max-md:pr-5">
          <div className="w-[20%] max-md:w-full gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0" style={{ backgroundColor: 'black' }}>


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

                        >
                            All services
                        </div>
                        <div className="text-white text-2xl font-semibold leading-9 self-stretch mt-10"

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




            </div>
            <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="bg-zinc-500 w-px shrink-0 h-[1117px]" />
                <span className="self-center flex grow basis-[0%] flex-col my-auto max-md:max-w-full">
                    <span className="self-stretch flex items-center justify-between gap-5 pr-1.5 max-md:max-w-full max-md:flex-wrap">
                        <div className="text-black text-5xl font-semibold w-[249px] my-auto max-md:text-4xl">
                            Edit profile
                        </div>
                        <img
                            loading="lazy"
                            srcSet="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
                            className="aspect-square object-contain object-center w-[120px] overflow-hidden self-stretch shrink-0 max-w-full"
                        />
                    </span>
                    <form onSubmit={handleClick}>
            <div className="self-stretch mt-10 max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <span className="flex grow flex-col items-stretch max-md:mt-10">
                    <div className="text-zinc-900 text-2xl font-semibold">
                     Name
                    </div>
                    <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="text-zinc-500 text-2xl font-medium whitespace-nowrap bg-white justify-center mt-3 pl-7 pr-16 py-7 rounded-md border-2 border-solid border-zinc-500 items-start max-md:px-5"
                />
                  </span>
                </div>
                        
                        </div>
                    </div>
                    <div className="text-zinc-900 text-2xl font-semibold self-stretch mt-5 max-md:max-w-full">
                        Email
                    </div>
                    <input
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-white self-stretch flex items-center justify-between gap-5 mt-3 px-7 py-5 rounded-md border-2 border-solid border-zinc-500 max-md:max-w-full max-md:flex-wrap max-md:px-5"
        />



                    <div className="self-stretch mt-5 max-md:max-w-full">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">


                        </div>
                    </div>
                    {/* <div className="text-zinc-900 text-2xl font-semibold self-stretch mt-5 max-md:max-w-full">
                        Password
                    </div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white self-stretch flex items-center justify-between gap-5 mt-3 px-7 py-5 rounded-md border-2 border-solid border-zinc-500 max-md:max-w-full max-md:flex-wrap max-md:px-5"
                    /> */}
                    <div className="flex items-stretch justify-between gap-5 mt-12 self-start max-md:mt-10">
              <button
                className="text-orange-500 text-3xl whitespace-nowrap bg-white grow justify-center items-stretch px-12 py-5 rounded-md border-2 border-solid border-orange-500 max-md:px-5"
                type="reset"
              >
                Cancel
              </button>
              <button
                className="text-orange-500 text-3xl whitespace-nowrap bg-white grow justify-center items-stretch px-12 py-5 rounded-md border-2 border-solid border-orange-500 max-md:px-5"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
                </span>
            </div>
            <img
                loading="lazy"
                srcSet="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
                className="aspect-[2.6] object-contain object-center w-[104px] overflow-hidden shrink-0 max-w-full mt-10 self-start"
            />
        </div>

    );
}


export default Edit