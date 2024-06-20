import React from "react";
import Navbar from "../components/navbar/Navbar";
import { products, productsWomen } from "../Item.js";
function Favorites() {
  return (
    <>
      <Navbar />
      <div className="px-5 lg:px-10 max-w-[1420px] m-auto">
        <div className="my-16">
          <h1 className="text-[35px] font-medium">Your Favorites</h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {products.map((product) => (
            <div className="" key={product.id}>
              <div className="flex relative">
                <div className="bg-black cursor-pointer rounded-full absolute right-0 w-[23px] h-[23px] flex items-center justify-center text-center">
                  <i
                    class="fa-solid fa-x text-[10px]"
                    style={{ color: "#ffffff" }}
                  ></i>
                </div>
                <div>
                  <img src={product.img} alt="" className="w-[150px]" />
                </div>
                <div className="flex flex-col px-5 justify-between">
                  <div className="">
                    <h1 className="text-[20px]">{product.title}</h1>
                    <h1 className="text-red-500 text-[22px] font-bold">
                      {product.price}
                    </h1>
                  </div>

                  <div className="flex gap-2 items-center">
                    <div className="bg-black rounded-[5px]">
                      <i
                        className="fa-solid fa-cart-shopping text-[12px] p-3 "
                        style={{ color: "#ffffff" }}
                      ></i>
                    </div>
                    <div>
                      <a
                        href=""
                        className="bg-black text-white text-[12px] font-bold py-2 px-6 rounded-[5px]"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favorites;
