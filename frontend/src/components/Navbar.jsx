import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";

const Navbar = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-n-1 ${
        openNavigation ? "bg-n-1" : " backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] pl-5 lg:px-0 font-bold text-xl" href="#hero">
          Al Fahsya
        </a>

        <div
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[3rem] lg:top-[5rem] bg-n-1 lg:static lg:flex lg:ml-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col lg:h-auto lg:w-auto w-screen h-screen items-center justify-center lg:flex-row">
            {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative text-2xl uppercase text-n-14 transition-colors ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-14"
                      : "lg:text-n-14"
                  } lg:leading-5 transition duration-300 group hover:text-n-3 md:px-6`}
                >
                  {item.title}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-color-5"></span>
                </a>
              ))}
            </div>
            
          
        </div>

        <Button className="hidden bg-n-10 text-color-7 font-normal lg:flex hover:text-n-8 hover:font-bold hover:border-2 border-n-10  hover:bg-n-15" href="#kontak">
          Hubungi Kami
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-6"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
