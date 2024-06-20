import React from "react";
import bgModel from "../assets/main-bg.jpg";
import bgPink from "../assets/bg-pink.jpg";
import bgWhite from "../assets/bg-white.jpg";
import ItemBg from "../assets/items-bg.jpg";
import imgBelow from "../assets/bg-below.png";
import { products, productsWomen } from "../Item.js";
const home = () => {
  return (
    <>
      <div className="px-4 lg:px-10 max-w-[1420px] m-auto max-sm:py-10">
        <div
          className="h-[300px] md:h-[500px] lg:h-[700px] rounded-[20px] bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url(${bgModel})` }}
        >
          <div className="px-10 my-5 md:px-16 lg:px-20 absolute  lg:my-14">
            <div className="leading-[1] my-7 text-shadow">
              <h1 className="text-[40px] md:text-[70px] lg:text-[100px] text-white font-bold">
                Create
              </h1>
              <h1 className="text-[40px] md:text-[70px]  lg:text-[70px] text-white font-bold">
                your style
              </h1>
            </div>
            <p className="text-white text-[10px] md:text-[13px] md:w-[300px] w-[220px] lg:w-[350px] lg:text-[15px] ">
              WebFree Free Images Photos. Photos 16.4K Videos 2.6K Users 17.3K.
              Filters. All Orientations. All Sizes. Previous123456Next. Download
              and use 10,000+ Free I
            </p>
            <div className="my-5">
              <a
                className="text-[11px] px-5 py-1 border border-white lg:px-7 lg:py-1 text-white"
                href=""
              >
                Explore
              </a>
            </div>
          </div>
        </div>

        <div className="my-4 max-w-[1420px] m-auto">
          <div className="flex flex-col gap-4 lg:flex lg:flex-row lg:gap-4 md:flex md:flex-row">
            <div
              className="h-[300px] w-[100%] rounded-[20px] bg-center bg-no-repeat bg-cover grid items-center"
              style={{ backgroundImage: `url(${bgPink})` }}
            >
              <div className="px-8 lg:px-20 flex flex-col w-[250px] lg:w-[350px] gap-5">
                <h1 className="text-white font-semibold text-[45px] w-[200px] leading-[1]">
                  New Arrivals
                </h1>
                <a
                  href=""
                  className="text-black bg-white px-10 py-2 text-center rounded-[5px]"
                >
                  View More
                </a>
              </div>
            </div>
            <div
              className="h-[300px] w-[100%] rounded-[20px] bg-center bg-no-repeat bg-cover grid items-center"
              style={{ backgroundImage: `url(${bgWhite})` }}
            >
              <div className="px-8 lg:px-20 flex flex-col w-[250px] lg:w-[350px] gap-5">
                <h1 className="text-white font-semibold text-[45px] w-[200px] leading-[1]">
                  Fashion Collections
                </h1>
                <a
                  href=""
                  className="text-black bg-white px-10 py-2 text-center rounded-[5px]"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="my-24">
          <div className="lg:flex md:flex lg:justify-between gap-20 items-center w-full">
            <div>
              <h1 className="text-[30px] max-sm:w-[300px] md:text-[35px] lg:text-[45px] leading-[1] font-medium w-[500px] mb-8">
                Benefits of Choosing Our Services
              </h1>
              <div className="">
                <p className="mb-3 text-[14px] lg:text-[18px]">
                  WebFree Free Images Photos. Photos 16.4K Videos 2.6K Users
                  17.3K. Filters. All Orientations. All Sizes.
                  Previous123456Next. Download and use 10,000+ Free I\ WebFree
                  Free Images Photos. Photos 16.4K Videos 2.6K Users 17.3K.
                  Filters. All Orientations. All Sizes. Previous123456Next.
                  Download and use 10,000+ Free I
                </p>
                <a
                  href=""
                  className="bg-black text-white text-[13px] px-10 py-2"
                >
                  View More
                </a>
              </div>
            </div>

            <div className="my-5 lg:w-[1400px] ">
              <img src={ItemBg} alt="" className="rounded-2xl" />
            </div>
          </div>
        </div>

        <div className="py-10 border-t border-b border-black max-w-[1320px] m-auto">
          <div className="pb-10 flex justify-between items-center">
            <h1 className="text-[20px]  md:text-[25px] lg:text-[30px] font-medium">
              Man Collection
            </h1>
            <a
              href=""
              className="border-[1px] text-[10px] lg:text-[14px] px-7 py-2 rounded-[5px] border-black"
            >
              View Collections
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <i className="fa-regular fa-heart absolute right-[0] p-3"></i>
                  <img src={product.img} alt="" className="" />
                </div>
                <p>{product.title}</p>
                <p className="font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-10 border-t  border-black max-w-[1320px] m-auto">
          <div className="pb-10 flex justify-between items-center">
            <h1 className="text-[20px]  md:text-[25px] lg:text-[30px] font-medium">
              Women Collection
            </h1>
            <a
              href=""
              className="border-[1px]  text-[10px] lg:text-[14px] px-7 py-2 rounded-[5px] border-black"
            >
              View Collections
            </a>
          </div>

          <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productsWomen.map((productWomen) => (
              <div key={productWomen.id}>
                <div className="relative">
                  <i className="fa-regular fa-heart absolute right-[0] p-3"></i>
                  <img src={productWomen.img} alt="" className="" />
                </div>
                <p>{productWomen.title}</p>
                <p className="font-bold">{productWomen.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="m-auto h-[300px] w-[100%] bg-no-repeat bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${imgBelow})` }}
      >
        <div className="mx-10 w-[250px] lg:w-[350px]">
          <h1 className="text-[25px] lg:text-[35px] text-white">
            Summer Sale - Up to 50% Off All Products!
          </h1>
          <div className="my-5">
            <a href="" className="bg-white px-14 py-2 rounded-[5px]">
              View More
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#EFEFEF] h-[300px] w-full] flex flex-col justify-center items-center">
        <div className="w-[300px] lg:w-[350px] text-center">
          <h1 className="text-[22px] lg:text-[30px] font-smedium">
            Always be Updated To our Latest Product’s
          </h1>
        </div>
        <div className="w-[320px] lg:w-[450px] text-center text-[15px]">
          <p>
            WebFree Free Images Photos. Photos 16.4K Videos 2.6K Users 17.3K.
            Filters. All Orientations. All Sizes. Previous123456Next. Download
            and use 10,000+ Free I\
          </p>
        </div>
        <div className="flex justify-center items-center my-3">
          <input
            type="email"
            className="border-[1px] border-black lg:w-[400px] h-[40px] rounded-tl-[10px] rounded-bl-[10px] px-5 outline-none"
          />
          <a
            href=""
            className="bg-black text-white py-[8px] px-6 rounded-tr-[10px] rounded-br-[10px]"
          >
            Submit
          </a>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 justify-center max-w-[1420px] px-5 m-auto py-14 gap-10">
        <div className=" flex flex-col gap-14">
          <div>
            <h1 className="text-[40px] font-semibold">
              Style<span className="text-[rgb(231,187,187)]">Aura</span>
            </h1>
            <p>
              WebFree Free Images Photos. Photos 16.4K Videos 2.6K Users 17.3K.
              Filters. All Orientations
            </p>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-brands fa-youtube text-[25px]"></i>
            <i className="fa-brands fa-twitter text-[25px]"></i>
            <i className="fa-brands fa-square-instagram text-[25px]"></i>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[20px]">Motorcycles</h1>
          <p>Hunter 350</p>
          <p>Meteor 350</p>
          <p>Scram 411</p>
          <p>Classic 350</p>
          <p>interceptor</p>
          <p>Continental GT</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[20px]">Locate Us</h1>
          <p>Hunter 350</p>
          <p>Meteor 350</p>
          <p>Scram 411</p>
          <p>Classic 350</p>
          <p>interceptor</p>
          <p>Continental GT</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[20px]">Motorcycles</h1>
          <p>Service Center</p>
          <p>Stores</p>
          <p>Owner's Manual</p>
          <p>Contact Us</p>
          <p>Book a Text Ride</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[20px]">About Us</h1>
          <p>Since 1992</p>
          <p>About Echer Motors</p>
        </div>
      </div>
    </>
  );
};

export default home;
