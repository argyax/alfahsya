//import { portfolio } from "../constants";
import { IoIosArrowForward } from "react-icons/io";
import {urlFor, client} from "../client"
import { useState, useEffect } from 'react';

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    const query = '*[_type == "portfolios"]';

    client.fetch(query).then((data) => {
      setPortfolios(data);
    });

  }, []);

  return (
      <section className="relative pt-[4rem]">
        <div className="relative z-1 max-w-[20rem] md:max-w-[30rem] lg:max-w-[42rem] mx-auto text-center lg:mb-[4rem] mb-[2rem]">
          <h2 className="h2 mb-6">
            Kami Telah Bekerja Sama dengan Banyak Instansi
          </h2>
          <p className="lg:body-1 lg:max-w-3xl w-xl mx-auto mb-6 text-n-14 lg:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </div>
        <div className="flex flex-wrap gap-10 justify-center px-10 md:px-30 lg:px-4">
          {portfolios.map((item) => (
            <div
              className="block relative border border-n-14 md:max-w-[34]"
              key={item.id}
            >
              <div href="/" className="relative z-2 flex flex-col md:min-h-[35rem]  max-w-[30rem]">
                <img
                  src={urlFor(item.image)} 
                  alt={item.title} 
                  className="w-fill max-h-[400px]"
                  width={480}
                  height={400}
                />
                <h4 className="h4 mt-5 mb-2 mx-5 text-n-7">{item.title}</h4>
                <p className="mx-5 body-2 leading-6">{item.text}</p>
                <div className="mx-4 my-2 text-[12px]">   
                 <button className="border-none my-1 px-1 mx-1 bg-n-2">
                  {item.hashtag1}
                 </button>   
                 <button className="border-none my-1 px-1 mx-1 bg-n-2">
                  {item.hashtag2}
                 </button>   
                 <button className="border-none my-1 px-1 mx-1 bg-n-2">
                  {item.hashtag3}
                 </button>
                </div>
                <a href="/" className="flex items-center gap-2 mb-5 mx-5 hover:ml-7">
                  <p className="font-code text-[10px] font-medium text-n-7 uppercase tracking-wider">
                    View Project
                  </p>
                  <IoIosArrowForward/>
                </a>
              </div>
              
            </div>
          ))}
        </div>
      </section>
  );
};

export default Portfolio;
