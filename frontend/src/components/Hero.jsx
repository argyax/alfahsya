import { placeholder } from "../assets";
import Button from "./Button";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
      <section className="relative pt-[4rem] md:pt-[7rem]" ref={parallaxRef}>
        <div className="max-w-[1650px] mx-auto">
          <div className="relative z-1 max-w-[20rem] md:max-w-[43rem] lg:max-w-[62rem] mx-auto text-center lg:mb-[4rem] mb-[2rem]">
            <h1 className="h1 mb-6">
              Persingkat Proses Pengadaan Barang Anda Sekarang
            </h1>
            <p className="body-1 lg:max-w-3xl w-xl mx-auto mb-6 text-n-14 lg:mb-8">
              Selamat datang di agen pengadaan barang kami. 
              Kami berspesialisasi dalam menyediakan solusi pengadaan yang efisien dan andal untuk semua ukuran bisnis.
              Pelajari lebih lanjut atau hubungi kami
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Button className="rounded-none bg-n-10 text-color-7 hover:border-2 border-n-10 hover:bg-n-15" href="/pricing">
                Pelajari Lebih Lanjut
              </Button>
              <Button className="hover:bg-n-10  hover:text-n-1 border-n-10" href="/pricing">
                Hubungi Kami
              </Button>
            </div>
          </div>
          <div className="container relative max-w-full lg:mb-24 mb-14 z-1 overflow-hidden md:aspect-[1024/490] lg:aspect-[1024/490]">
            <img
            src={placeholder}
            className="w-full h-full"
            width={1024}
            height={490}
            alt="Placeholder"
            />
          </div>
        </div>
      </section>
  );
};

export default Hero;
