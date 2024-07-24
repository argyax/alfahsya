//import { efficiency } from "../assets";
import { GrLocation } from "react-icons/gr";
import { FiMail, FiPhone } from "react-icons/fi";
import Map from "./Map";

const Contact = () => {
  return (
      <section className="mx-auto pt-10 max-w-[1650px] relative z-2" id="kontak">
        <div className="flex flex-wrap mb-4 mx-5 md:mx-15 md:mb-8">
          <div className="justify-start">
            <p>Tagline</p>
            <h3 className="h3 max-w-[39rem]">Contact us</h3>
            <p className="max-w-[43rem] text-[1rem] mt-3"> 
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div>

          </div>
          <div className="xl:head xl:mx-15 max-w-[38rem] mt-6">
            <div className="flex flex-row my-4">
             <FiMail className="mt-2 w-5 h-5"/>
             <div className="mx-3">
              <h5 className="h5 font-bold">Email</h5>
              <a className="text-[1rem] underline mt-3 cursor-pointer"> 
                 hello@relume.io
              </a>
             </div>
            </div>
            <div className="flex flex-row my-4">
             <FiPhone className="mt-2 w-5 h-5"/>
             <div className="mx-3">
              <h5 className="h5 font-bold">Phone</h5>
                <a className="text-[1rem] underline mt-3 cursor-pointer"> 
                 +1 (555) 000-0000
                </a>
             </div>
            </div>
            <div className="flex flex-row my-4">
             <GrLocation className="mt-2 w-5 h-5"/>
             <div className="mx-3">
                <h5 className="h5 font-bold">Office</h5>
                <a className="text-[1rem] mt-3">
                 123 Sample St, Sydney NSW 2000 AU
                </a>
             </div>
            </div>
          </div>
        </div>
        <div className="container relative max-w-full lg:mb-24 mb-14 z-1 overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
          {/*<img
           src={efficiency}
           className="w-full h-full"
           width={1024}
           height={490}
           alt="Placeholder"
          />*/}
          <Map/>
        </div>
      </section>
  );
};

export default Contact;
