//import { socials } from "../constants";

const Footer = () => {
  return (
      <footer className="grid lg:grid-cols-2 md:mx-auto lg:justify-center max-w-[1650px]  items-center gap-10 max-sm:flex-col !py-10">
        <div className="flex flex-wrap mb-4 mx-5 md:mx-15 md:mb-8">
          <div className="grid grid-cols-1">
            <h4 className="h4 max-w-[39rem]">
              Al Fahsya
            </h4>
            <div className="grid grid-cols-1">
              <p className="max-w-[41rem] font-semibold text-[1rem] mt-3"> 
                Address:
              </p>
              <p className="max-w-[41rem] text-[0.8rem]"> 
                Level 1, 12 Sample St, Sydney NSW 2000
              </p>
            </div>
            <div className="grid grid-cols-1">
              <p className="max-w-[41rem] font-semibold text-[1rem] mt-3"> 
                Contact:
              </p>
              <a className="max-w-[41rem] underline text-[0.8rem]"> 
                1800 123 4567
              </a>
              <a className="max-w-[41rem] underline text-[0.8rem]"> 
                info@relume.io
              </a>
            </div>
          </div>
        </div>
          <div className="grid md:grid-cols-2 mb-4 gap-10 mx-5 md:mx-15 md:mb-8">
            <div className="grid grid-cols-1 lg:col-start-1 gap-4">
              <a className="max-w-[41rem] font-bold text-[1rem]"> 
              Link One
              </a>
              <a className="max-w-[41rem] font-bold text-[1rem]">
              Link Two
              </a>
              <a className="max-w-[41rem] font-bold text-[1rem]"> 
              Link Three
              </a>
              <a className="max-w-[41rem] font-bold text-[1rem]"> 
              Link Four
              </a>
              <a className="max-w-[41rem] font-bold text-[1rem]"> 
              Link Five
              </a>
            </div>
            <div className="grid grid-cols-1 md:col-start-2 gap-4">
              <a className="max-w-[41rem] font-bold text-[1rem]"> 
              Link One
              </a>
              <a className="max-w-[41rem] font-bold text-[1rem]"> 
              Link Two
              </a>
              <a className="max-w-[41rem] font-bold text-[1rem]"> 
              Link Three
              </a>
              <a className="max-w-[41rem] font-bold text-[1rem]"> 
              Link Four
              </a>
              <a className="max-w-[41rem] font-bold text-[1rem]"> 
              Link Five
              </a>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between md:flex-row mx-5 md:mx-15 md:mb-8 max-w-[1640px]">
            <div className="flex items-center mt-3 text-sm md:mt-0">
              <p className="caption">
                © {new Date().getFullYear()} Al Fahsya. All rights reserved.
              </p>
            </div>
          {/*
            <div className="flex flex-col justify-center gap-2 mt-3 text-sm md:mt-0 ml-40 md:flex-row md:gap-2">
              <a className="flex items-center justify-end underline text-[0.8rem]"> Privacy Policy</a>
              <a className="flex items-center justify-end underline text-[0.8rem]"> Terms of Service</a>
              <a className="flex items-center justify-end underline text-[0.8rem]"> Cookies Settings</a>
            </div>
          */}
          </div>
      </footer>
  );
};

export default Footer;
