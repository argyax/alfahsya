import { IoIosArrowForward } from "react-icons/io";
//import Button from "./Button";

const Roadmap = () => (
    <section className="bg-[url('./assets/bg-image.png')] bg-cover py-40">
      <div className="max-w-[1650px] mx-auto">
        <div className="flex flex-wrap md:px-5 lg:px-8">
            <div
              className="block relative bg-no-repeat bg-[length:100%_100%] md:max-w-[34rem]"
            >
              <div className="relative z-2 flex flex-wrap p-[1.8rem]">
                <h2 className="h2 mt-3 text-n-1 mb-5">
                  Sederhanakan Proses Pengadaan Barang Anda bersama Kami
                </h2>
                <p className="body-2 mb-6 text-n-1">
                  Kami adalah agen pemasaran profesional yang berdedikasi untuk membantu bisnis mendapatkan barang secara efisien. 
                  Dengan keahlian kami dan proses yang efisien, kami memastikan Anda mendapatkan barang yang tepat pada waktu yang tepat, setiap saat.
                </p>
                <div className="flex flex-wrap gap-2 justify-start ml-0">
                  <a href="#kontak" className="px-7 button relative inline-flex items-center justify-center h-11 rounded-none bg-transparent border-2 text-color-7 focus:outline-none focus:ring-2 focus:ring-n-1 focus:ring-offset-2 focus:ring-offset-gravitonblue hover:bg-n-1 hover:text-color-5 transition-all duration-300 active:bg-slate-100 no-underline">
                      Pelajari Lebih Lanjut
                  </a>
                  <button href="#kontak" className="px-7 button relative gap-2 justify-center h-11 transition-colors hover:text-color- cursor-pointer bg-transparent text-color-7 flex items-center mt-auto hover:ml-[15px]">
                    <p className="ml-0 justify-start font-bold text-n-1 uppercase tracking-wider">
                      Hubungi Kami
                    </p>
                    <IoIosArrowForward className="text-n-1 justify-end"/>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
);

export default Roadmap;
