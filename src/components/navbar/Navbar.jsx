import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const [sideVisible, setSideVisible] = useState(false);

  const toggleSide = () => {
    setSideVisible(!sideVisible);
  };

  return (
    <div>
      <div className="border-b border-black">
        <div className="py-6 px-10 max-w-[1420px] m-auto">
          <div className="flex justify-between items-center">
            <div
              className="sm:hidden flex flex-col gap-1 cursor-pointer"
              onClick={toggleSide}
            >
              <div className="w-[30px] h-[3px] bg-black"></div>
              <div className="w-[30px] h-[3px] bg-black"></div>
              <div className="w-[30px] h-[3px] bg-black"></div>
            </div>
            <div className="">
              <Link to={"/"}>
                <h1 className="text-[35px] lg:text-[40px] font-bold">
                  Style<span className="text-[#E7BBBB]">Aura</span>
                </h1>
              </Link>
            </div>
            <div className="flex gap-10 items-center">
              <div className="bg-black rounded-[100px] flex justify-center items-center md:flex max-sm:hidden">
                <a href="" className="text-white px-5 py-2">
                  <Link to={"/login"}>Log in</Link>
                </a>
                <div className="w-[1px] h-[20px] bg-white"></div>
                <a href="" className="text-white px-5 py-2">
                  <Link to={"/signup"}>Sign up</Link>
                </a>
              </div>
              <div className="flex gap-5">
                <div className="relative cursor-pointer">
                  <div className="absolute text-[10px] top-[-5px] right-[-10px] rounded-[100%] grid place-content-center w-[17px] h-[17px] bg-red-600 text-white">
                    0
                  </div>
                  <Link to={"/favorites"}>
                    <i className="fa-solid fa-heart  text-[22px]"></i>
                  </Link>
                </div>
                <div className="relative cursor-pointer">
                  <div className="absolute text-[10px] top-[-5px] right-[-10px] rounded-[100%] grid place-content-center  w-[17px] h-[17px] bg-red-600 text-white">
                    0
                  </div>
                  <i className="fa-solid fa-cart-shopping text-[22px]"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 font-semibold p-5 md:flex max-sm:hidden ">
        <a
          href="#"
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link to={"/"}>HOME</Link>
          {menu === "home" ? <hr className="border-b border-red-600" /> : <></>}
        </a>
        <a
          href="#"
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to={"/men"}>MEN</Link>
          {menu === "men" ? <hr className="border-b border-red-600" /> : <></>}
        </a>
        <a
          href="#"
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to={"/women"}>WOMEN</Link>
          {menu === "women" ? (
            <hr className="border-b border-red-600" />
          ) : (
            <></>
          )}
        </a>
        <a
          href="#"
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to={"/kids"}>KIDS</Link>
          {menu === "kids" ? <hr className="border-b border-red-600" /> : <></>}
        </a>
      </div>

      {sideVisible && (
        <div className="sm:hidden fixed top-0 bg-white z-10 w-full h-full">
          <i
            className="fa-solid fa-x absolute right-0 p-7 text-[20px] cursor-pointer"
            onClick={toggleSide}
          ></i>
          <h1 className="text-[40px] font-bold p-5">
            Style<span className="text-[#E7BBBB]">Aura</span>
          </h1>
          <div className="">
            <div className="flex flex-col">
              <a
                href=""
                className="py-3 px-5 transition ease-in-out hover:bg-[#8E8A8A] hover:text-white"
              >
                FASHION
              </a>
              <a
                href=""
                className="py-3 px-5 transition ease-in-out hover:bg-[#8E8A8A] hover:text-white"
              >
                BEAUTY
              </a>
              <a
                href=""
                className="py-3 px-5 transition ease-in-out hover:bg-[#8E8A8A] hover:text-white"
              >
                CULTURE
              </a>
              <a
                href=""
                className="py-3 px-5 transition ease-in-out hover:bg-[#8E8A8A] hover:text-white"
              >
                LIVING
              </a>
              <a
                href=""
                className="py-3 px-5 transition ease-in-out hover:bg-[#8E8A8A] hover:text-white"
              >
                RUNWAY
              </a>
            </div>
          </div>

          <div>
            <div className="border-b-2 border-[rgba(0,0,0,0.5)] mx-5 my-5"></div>
          </div>

          <div className="flex gap-2 items-center mx-5">
            <i className="fa-solid fa-user"></i>
            <a href="">Log in</a>
            <div className="w-[1px] h-[14px] bg-black"></div>
            <a href="">Sign up</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
