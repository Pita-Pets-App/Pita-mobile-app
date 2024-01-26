import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useIdentity } from './IdentityContext';
import './Login.css';
// function Login(props) {
//   const [userPassword, setUserPassword] = useState(""); 
//   const [userEmail, setUserEmail] = useState("");
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const { setUser } = useIdentity();
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/api/admin/login', {
//         email: userEmail,
//         admin_password: userPassword,
//       });
//       console.log('iugigi', response.data.name);
//       Cookies.set('name', response.data.name, { expires: 60 * 60 * 24 });
//       Cookies.set('image', response.data.image, { expires: 60 * 60 * 24 });
//       const { token, id } = response.data;

//       if (id && token) {
//         Cookies.set('authToken', token, { expires: 60 * 60 * 24 });

//         console.log('authToken:', token);
//         setUser(response.data);
//         setErrorMessage('');
//         setSuccessMessage('Signup successful');
//         navigate(`/dash`);
//       } else {
//         setErrorMessage('Login failed. Please check your credentials.');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);

//       // Check if the error message indicates wrong email or password
//       if (error.response && error.response.data && error.response.data.message === 'Wrong Email or password.') {
//         setErrorMessage('Wrong Email or password. Please try again.');
//       } else {
//         setErrorMessage('Error during login. Please try again.');
//       }
//     }
//   };
//   Cookies.set('email', userEmail, { expires: 60 * 60 * 24 })
//   return (
//     <div className="bg-neutral-900 flex flex-col items-stretch pl-16 pr-20 pt-10  max-md:px-5" style={{ backgroundColor: 'black' }} >
//       {/* <div className="flex items-center justify-between gap-5 mr-10 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5" >

//         <div className="self-stretch flex justify-between gap-5 items-start" >


//         </div>
//       </div>
//       <div className="self-center w-full max-w-[1143px]  max-md:mt-10" >
//         <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//           <div className="flex flex-col items-stretch w-[64%] max-md:w-full max-md:ml-0">
//             <img
//               loading="lazy"
//               srcSet="https://i.pinimg.com/564x/3b/0b/cb/3b0bcb6f89f34a6b4a7a4ff1eb1b6140.jpg"
//               className="aspect-[0.76] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
//             />
//           </div>
//           <div className="flex flex-col items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0">
//             <span className="flex flex-col mt-9 max-md:mt-10">
//               <div className="text-white text-4xl font-semibold capitalize self-center whitespace-nowrap">
//                 Hello ! welcome back
//               </div>
//               <form onSubmit={handleSubmit} className="self-stretch justify-center items-stretch mt-16 max-md:mt-10">
//         <input
//         onChange={(event)=>{setUserEmail(event.target.value)}}
//           type="email"
//           placeholder="Enter email"
//           className="text-black text-center text-2xl font-light  whitespace-nowrap bg-white self-stretch justify-center mt-6 pl-7 pr-16 py-5 rounded-lg items-start max-md:px-5"
//           required
//         />
//         <input 
//         onChange={(event)=>{setUserPassword(event.target.value)}}
//           type="password"
//           placeholder="Enter password"
//           className="text-black text-center text-2xl font-light  whitespace-nowrap bg-white self-stretch justify-center mt-6 pl-7 pr-16 py-5 rounded-lg items-start max-md:px-5"
//           required
//         />
//         <div className="text-white text-lg font-extralight capitalize whitespace-nowrap mt-3.5 self-end">
//           Forgot password?
//         </div>

//         <button
//           type="submit"
//           className="text-black text-center text-lg font-black leading-5 capitalize whitespace-nowrap justify-center items-center bg-white self-stretch mt-12 px-16 py-5 rounded-lg max-md:mt-10 max-md:px-5"
//         >
//           Sign In
//         </button>
//       </form>
//               <span className="self-stretch flex items-stretch justify-between gap-3.5 mt-10 px-px max-md:mt-10">
//                 <div className="bg-gray-200 self-center flex w-[101px] shrink-0 h-px flex-col my-auto" />

//                 <div className="bg-neutral-300 self-center flex w-[101px] shrink-0 h-px flex-col my-auto" />
//               </span>

//               <span className="self-stretch flex items-stretch justify-between gap-2.5 mt-14 max-md:mt-10">

//               </span>
//             </span>
//           </div>
//         </div>
//       </div> */}

//     </div>
//   );
// }



function Login() {
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
      Cookies.set('image', response.data.image, { expires: 60 * 60 * 24 });
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
  return (
    <div className="container">
    <div className="card">
      <div className="left-section">
        {/* Add the shapes using the .rectangle and .circle classes */}
      </div>
      <div className="right-section">
        <div className="form">
          <h1>Please fill in your unique admin login details below</h1>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(event) => { setUserEmail(event.target.value) }}
              type="email"
              placeholder="Enter email"
              required
            />
            <div className="bg-neutral-100 rounded-xl">
              <input
                onChange={(event) => { setUserPassword(event.target.value) }}
                type="password"
                placeholder="Enter password"
                required
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
          <div className="forgot-password" href="/forgot-password">
            forgot password?
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}



export default Login

