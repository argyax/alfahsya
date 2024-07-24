import { proses } from "../constants";
import Arrow from "../assets/svg/Arrow";

const Proses = () => {
  return (
      <section className="border bg-n-13 mx-auto py-20 relative z-2" id="proses-kami">
        <div className="max-w-[1650px] mx-auto">
          <div className="flex flex-wrap mb-4 mx-7 md:mx-15 max-w-fill md:mb-8">
            <h3 className="h3 max-w-[39rem] justify-start">
              Sederhanakan proses pengadaan Anda dengan layanan kami yang efisien dan andal
            </h3>
            <p className="max-w-[41rem] text-[1rem] mt-3 xl:ml-auto xl:px-10"> 
              Di Al Fahsya, kami memahami pentingnya proses pengadaan yang lancar. 
              Tim profesional kami akan memandu Anda melalui setiap langkah, memastikan pengalaman yang bebas kerumitan. 
              Dari Pengadaan hingga pengiriman, kami siap membantu Anda.</p>
          </div>
          <div className="flex flex-wrap md:px-5 lg:px-8">
            {proses.map((item) => (
              <div
                className="block relative bg-no-repeat bg-[length:100%_100%] xl:max-w-[33rem]"
                key={item.id}
              >
                <div className="relative z-2 flex flex-col xl:h-[20rem] p-[1.8rem] ">
                  <img
                    src={item.icon}
                    className="w-[53px] h-[53px]"
                    width={30}
                    height={30}
                    alt="services"
                  />
                  <h4 className="h4 mt-3 mb-5 text-n-7">{item.title}</h4>
                  <p className="body-2 md:mb-6 text-n-7">{item.text}</p>
                  <a href="/" className="flex items-center xl:mt-auto hover:ml-[15px] max-w-[13rem]">
                    <p className="ml-0 font-code text-xs font-bold text-n-7 uppercase tracking-wider">
                      Pelajari Lebih Lanjut
                    </p>
                    <Arrow />
                  </a>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Proses;
