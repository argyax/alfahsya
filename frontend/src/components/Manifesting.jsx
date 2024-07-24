import { efficiency } from "../assets";

const Manifesting = () => {
  return (
      <section className="mx-auto pt-40 max-w-[1650px] relative z-2">
        <div className="flex flex-wrap mb-4 mx-7 md:mx-15 max-w-fill md:mb-8">
          <h3 className="h3 max-w-[37rem] justify-start">
            Ciptakan Efisiensi, Keandalan, dan Nilai dengan Layanan Pengadaan Kami
          </h3>
          <p className="max-w-[41rem] text-[1rem] mt-3 xl:ml-auto xl:px-10"> 
            Layanan pengadaan kami memberikan nilai tak tertandingi, menyederhanakan proses, dan memastikan sumber yang andal. 
            Dengan keahlian kami, Anda dapat menghemat waktu dan sumber daya, 
            memungkinkan Anda fokus pada hal yang paling penting - mengembangkan bisnis Anda.
          </p>
        </div>
        <div className="container relative max-w-full lg:mb-24 mb-14 z-1 overflow-hidden md:aspect-[1024/490] lg:aspect-[1024/490]">
          <img
           src={efficiency}
           className="w-full h-full"
           width={1024}
           height={490}
           alt="Placeholder"
          />
        </div>
      </section>
  );
};

export default Manifesting;
