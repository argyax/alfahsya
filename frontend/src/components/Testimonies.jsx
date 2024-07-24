//import { testimonies } from "../constants";
//import { efficiency } from "../assets";
import {urlFor, client} from "../client"
import { useState, useEffect } from 'react';

const Testimonies = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

  }, []);

  
  return (
      <section className="md:mx-auto py-20 border bg-n-13 relative z-2">
        <div className="max-w-[1650px] mx-auto">
            <div className="flex flex-wrap mb-4 mx-5 md:mx-15 md:mb-8">
            <div>
                <h3 className="h3 max-w-[26rem]">
                Tanggapan dari Pelanggan Setia Kami
                </h3>
                <p className="max-w-[41rem] text-[1rem] mt-3"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            </div>
            <div className="flex flex-wrap gap-10 justify-center pt-2 px-5 lg:px-8">
            {testimonials.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <div
                 className="block relative border bg-no-repeat bg-[length:100%_100%] bg-n-15 max-w-[21rem] md:max-w-[34rem]">
                    <div href="/" className="relative z-2 flex flex-col my-4 md:my-8 max-w-[30rem]">
                     <div className="flex flex-row mx-8 mb-6">
                      <img
                        src={urlFor(item.imginst)}
                        alt={item.name} 
                        className="rounded-full w-fill h-fill"
                        width={40}
                        height={41}
                      />
                      <h4 className="h4 mt-6 mx-3 text-n-7 text-[17px] md:text-[25px]">{item.institution}</h4>
                     </div>
                     <p className="md:mx-8 mb-2 md:text-[20px] md:px-0 px-4 text-[1rem] body-2 leading-9">{item.feedback}</p>
                     <div className="mt-4 mx-8 mb-4">
                      <div className="flex flex-row">
                       <img
                         src={urlFor(item.imgprofile)}
                         alt={item.name} 
                         className="rounded-full w-12 h-12"
                         width={30}
                         height={30}
                        />
                       <div className="mx-4">
                        <h5 className="h5 text-[1.25rem] text-n-7">{item.name}</h5>
                        <p className="font-light text-n-7">{item.company}</p>
                       </div>
                      </div>
                     </div>
                    </div>
                </div>
             ))}
            </div>
        </div>
      </section>
  );
};

export default Testimonies;
