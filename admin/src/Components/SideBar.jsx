import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Scrollbar } from './Scrolllbar';
const VeterinarianList = () => {
  
  return (
    
      
    <div className="bg-white flex w-full grow flex-col mx-auto pl-6 pr-4 py-7 rounded-2xl max-md:mt-4 max-md:pl-5" style={{ backgroundColor: '#1C2536' }}>
      <div className="rounded bg-blue-500 self-stretch flex items-stretch justify-between gap-5 px-3.5 py-2 max-md:pr-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/663d70e544116bd5f61ef27090c6a9aff8a95f0d454b279299b8574f66f17822?"
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
        />
        <Link to="/dash">

          <div className="text-white text-opacity-90 text-sm font-medium leading-5 tracking-normal mt-2 self-start">
            Dashbord
          </div>
        </Link>
      </div>
      <div className="flex w-[90px] max-w-full items-stretch justify-between gap-5 ml-3.5 mt-3.5 self-start max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b01ca89840b1db87e993938b61be24fdb0d8fd4eeb27b80f437ab2265b34ba3?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <Link to="/test">

          <div className="text-white text-opacity-90 text-sm font-medium leading-5 tracking-normal mt-2 self-start">
            Provider
          </div>
        </Link>
      </div>
      <div className="flex items-stretch justify-between gap-5 ml-3.5 mt-7 self-start max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5782941e255bf281364feff1384fd26b4146aee824db4f7a501af4ac6074223?"
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
        />
        <Link to="/AllUsers">

          <div className="text-white text-opacity-90 text-sm font-medium leading-5 tracking-normal mt-2 self-start">
            Users
          </div>
        </Link>
      </div>
      <div className="flex items-stretch justify-between gap-5 ml-3.5 mt-6 self-start max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/df9801123f5c82cee4663e60aef9fda3a921670bac730816aea656024c3acfe8?"
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
        />
        <Link to="/edit">

          <div className="text-white text-opacity-90 text-sm font-medium leading-5 tracking-normal mt-2 self-start">
            Account
          </div>
        </Link>
      </div>
      <div className="flex items-stretch justify-between gap-5 ml-3.5 mt-6 self-start max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/19b355bff20ae4db0a6ed692cbb342e04c5f1a332b12dbde63d64469b20e0cc3?"
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
        />
        <Link to="/Newevent">

<div className="text-white text-opacity-90 text-sm font-medium leading-5 tracking-normal mt-2 self-start">
  Event requests
</div>
</Link>
        
      </div>
      <div className="flex items-stretch justify-between gap-5 ml-3.5 mt-6 self-start max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/19b355bff20ae4db0a6ed692cbb342e04c5f1a332b12dbde63d64469b20e0cc3?"
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
        />
        <Link to="/Newprov">

<div className="text-white text-opacity-90 text-sm font-medium leading-5 tracking-normal mt-2 self-start">
  New providers
</div>
</Link>
        
      </div>
      {/* <div className="flex items-stretch justify-between gap-5 ml-3.5 mt-6 self-start max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-opacity-90 text-sm font-medium leading-5 tracking-normal self-center my-auto">
          Add service
        </div>
        
      </div> */}
      <div className="flex items-stretch justify-between gap-5 ml-3.5 mt-6 self-start max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
        />
        <Link to="/AddAdmin">

<div className="text-white text-opacity-90 text-sm font-medium leading-5 tracking-normal mt-2 self-start">
  Add Admin
</div>
</Link>
        
      </div>
    </div>
   
  );
};

export default VeterinarianList;
