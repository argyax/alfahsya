//import { products } from "../constants";
import { useState, useEffect } from "react";
import { urlFor, client } from "../client";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "products"]';

    client.fetch(query).then((data) => {
      setProducts(data);
    });

  }, []);

  return (
      <section className="md:mx-auto justify-center py-20 relative max-w-[1650px] z-2" id="kategori">
        <div className="md:flex flex-wrap mb-4 mx-7 md:mx-15 md:mb-8">
          <div>
            <h3 className="h3 max-w-[39rem]">
              Kategori Produk
            </h3>
            <p className="max-w-[41rem] text-[1rem] mt-3"> 
              Telusuri kategori produk yang kami miliki.
            </p>
          </div>
          <a href="#kontak" className="px-7 md:mt-10 mt-5 head button relative inline-flex items-center md:justify-center h-11 bg-transparent border-2 border-color-5 focus:outline-none focus:ring-2 focus:ring-n-1 focus:ring-offset-2 focus:ring-offset-n-1 hover:bg-n-10 hover:text-color-7 transition-all duration-300 active:bg-slate-100 no-underline">
              Lihat Semua
          </a>
        </div>
        <div className="flex flex-wrap gap-8 mt-7 lg:mt-1 lg:gap-0 px-7 lg:px-8 justify-center">
          {products.map((item) => (
            <div
              className="block relative bg-no-repeat bg-[length:100%_100%] md:max-w-[20rem] lg:max-w-[44rem]"
              key={item.id}
            >
              <a href="/" className="relative z-2 flex flex-col min-h-[22rem] lg:p-[1.8rem]">
                <img
                  src={urlFor(item.imgproducts)}
                  className="w-full h-full lg:w-[338px] lg:h-[385px]"
                  width={304}
                  height={365}
                  alt={item.title}
                />
                <h4 className="h4 mt-5 mb-5 text-n-7">{item.title}</h4>
              </a>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Products;
