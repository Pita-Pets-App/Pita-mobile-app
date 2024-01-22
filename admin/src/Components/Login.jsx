import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useIdentity } from './IdentityContext';

function Login(props) {
  const [userPassword, setUserPassword] = useState(""); 
  const [userEmail, setUserEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setUser } = useIdentity();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/admin/login', {
        email: userEmail,
        admin_password: userPassword,
      });
      console.log('iugigi', response.data.name);
      Cookies.set('name', response.data.name, { expires: 60 * 60 * 24 });
      const { token, id } = response.data;

      if (id && token) {
        Cookies.set('authToken', token, { expires: 60 * 60 * 24 });

        console.log('authToken:', token);
        setUser(response.data);
        setErrorMessage('');
        setSuccessMessage('Signup successful');
        navigate(`/dash`);
      } else {
        setErrorMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);

      // Check if the error message indicates wrong email or password
      if (error.response && error.response.data && error.response.data.message === 'Wrong Email or password.') {
        setErrorMessage('Wrong Email or password. Please try again.');
      } else {
        setErrorMessage('Error during login. Please try again.');
      }
    }
  };
  Cookies.set('email', userEmail, { expires: 60 * 60 * 24 })
  return (
    <div className="bg-neutral-900 flex flex-col items-stretch pl-16 pr-20 pt-10  max-md:px-5" style={{ backgroundColor: 'black' }} >
      <div className="flex items-center justify-between gap-5 mr-10 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5" >
        <img
          loading="lazy"
          srcSet=""
          className="aspect-[3.45] object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full my-auto"
        />
        <div className="self-stretch flex justify-between gap-5 items-start" >
          <span className="flex flex-col items-stretch mt-3">
            <div className="text-white text-xl font-semibold whitespace-nowrap" >
              Sign in
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6afaf1465e0c21948ddf3d591ffbd8454aa98150e215d685b9c406273ab05dc?"
              className="aspect-[11.5] object-contain object-center w-[23px] fill-white overflow-hidden self-center max-w-full mt-1"
            />
          </span>
         
        </div>
      </div>
      <div className="self-center w-full max-w-[1143px]  max-md:mt-10" >
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[64%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://petvetfl.com/uploads/SiteAssets/363/images/home-rotate/dog-veterinarian-care-deerfield-beach.jpg"
              className="aspect-[0.76] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0">
            <span className="flex flex-col mt-9 max-md:mt-10">
              <div className="text-white text-4xl font-semibold capitalize self-center whitespace-nowrap">
                Hello ! welcome back
              </div>
              <form onSubmit={handleSubmit} className="self-stretch justify-center items-stretch mt-16 max-md:mt-10">
        <input
        onChange={(event)=>{setUserEmail(event.target.value)}}
          type="email"
          placeholder="Enter email"
          className="text-black text-center text-2xl font-light  whitespace-nowrap bg-white self-stretch justify-center mt-6 pl-7 pr-16 py-5 rounded-lg items-start max-md:px-5"
          required
        />
        <input 
        onChange={(event)=>{setUserPassword(event.target.value)}}
          type="password"
          placeholder="Enter password"
          className="text-black text-center text-2xl font-light  whitespace-nowrap bg-white self-stretch justify-center mt-6 pl-7 pr-16 py-5 rounded-lg items-start max-md:px-5"
          required
        />
        <div className="text-white text-lg font-extralight capitalize whitespace-nowrap mt-3.5 self-end">
          Forgot password?
        </div>
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"
style={{ backgroundColor:"#F56565"}}
>
  <span class="block sm:inline">{errorMessage}</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>
        <button
          type="submit"
          className="text-black text-center text-lg font-black leading-5 capitalize whitespace-nowrap justify-center items-center bg-white self-stretch mt-12 px-16 py-5 rounded-lg max-md:mt-10 max-md:px-5"
        >
          Sign In
        </button>
      </form>
              <span className="self-stretch flex items-stretch justify-between gap-3.5 mt-10 px-px max-md:mt-10">
                <div className="bg-gray-200 self-center flex w-[101px] shrink-0 h-px flex-col my-auto" />
                <div className="text-white text-lg capitalize">
                  or continue with
                </div>
                <div className="bg-neutral-300 self-center flex w-[101px] shrink-0 h-px flex-col my-auto" />
              </span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d6d38f5088a74be4bcd9901196b159efa9f55ffd0f467d99643dc34c6e9c57d?"
                className="aspect-[7.17] object-contain object-center w-[373px] justify-center items-start overflow-hidden self-center mt-12 max-md:mt-10"
              />
              <span className="self-stretch flex items-stretch justify-between gap-2.5 mt-14 max-md:mt-10">
                <div className="text-white text-xl font-light capitalize grow whitespace-nowrap">
                  don’t have an account ?
                </div>
                <div className="text-white text-xl font-black capitalize grow whitespace-nowrap self-start">
                  create account !
                </div>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Login

