import * as React from "react";
import styled from "styled-components";
function Login(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
     
      };
  return (
    <div className="bg-neutral-900 flex flex-col items-stretch pl-16 pr-20 pt-10  max-md:px-5" style={{ backgroundColor: 'black' }} >
      <div className="flex items-center justify-between gap-5 mr-10 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5" >
        <img
          loading="lazy"
          srcSet="..."
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
          type="email"
          placeholder="Enter email"
          className="text-black text-center text-2xl font-light capitalize whitespace-nowrap bg-white self-stretch justify-center mt-6 pl-7 pr-16 py-5 rounded-lg items-start max-md:px-5"
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          className="text-black text-center text-2xl font-light capitalize whitespace-nowrap bg-white self-stretch justify-center mt-6 pl-7 pr-16 py-5 rounded-lg items-start max-md:px-5"
          required
        />
        <div className="text-white text-lg font-extralight capitalize whitespace-nowrap mt-3.5 self-end">
          Forgot password?
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

