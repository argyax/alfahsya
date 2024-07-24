import { services } from "../constants";
import Arrow from "../assets/svg/Arrow";

const Services = () => {
  return (
      <section className="border bg-n-13 mx-auto py-20 relative z-2" id="services">
        <div className="max-w-[1650px] mx-auto">
          <h2 className="px-7 lg:px-15 h2 mb-4 md:mb-8 md:max-w-[60rem]">
              Persingkat layanan pengadaan untuk semua kebutuhan barang Anda
          </h2>

          <div className="flex flex-wrap md:flex-nowrap md:px-5 lg:px-8">
            {services.map((item) => (
              <div
                className="block relative bg-no-repeat bg-[length:100%_100%] xl:max-w-[33rem]"
                key={item.id}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[1.8rem]">
                  <img
                    src={item.img}
                    className="w-full h-full"
                    width={1024}
                    height={490}
                    alt="services"
                  />
                  <h4 className="h4 mt-3 mb-5 text-n-7">{item.title}</h4>
                  <p className="body-2 mb-6 text-n-7">{item.text}</p>
                  <a className="flex items-center mt-auto ml-0 font-code text-xs font-bold text-n-7 uppercase hover:cursor-pointer hover:ml-[15px]" href="/pricing">
                      Pelajari Lebih Lanjut
                      <Arrow/>
                  </a>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Services;
