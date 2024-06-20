import React from "react";
import imgLogin from "../assets/sign-img.jpg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex items-center h-screen m-auto bg-white absolute top-0 w-[100%]">
      <div className="hidden lg:flex">
        <img
          src={imgLogin}
          alt=""
          className="mx-auto h-auto max-w-[600px] object-cover"
        />
      </div>

      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="text-center p-10">
          <h1 className="text-[45px] font-bold">
            Style<span className="text-[#E7BBBB]">Aura</span>
          </h1>
          <h1 className="text-[45px] font-medium">Login Your Account</h1>
        </div>
        <div className="flex flex-col gap-5">
          <div className="w-[380px] flex flex-col items-center relative">
            <i className="fa-solid fa-user absolute left-3 top-1/2 transform -translate-y-1/2"></i>
            <input
              type="text"
              placeholder="Enter Username"
              className="border-b-[1px] border-black w-full px-10 rounded-full outline-none"
            />
          </div>
          <div className="w-[380px] flex flex-col items-center relative">
            <i class="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2"></i>
            <input
              type="text"
              placeholder="Enter Username"
              className="border-b-[1px] border-black w-full px-10 rounded-full outline-none"
            />
          </div>
          <div className="w-[380px] flex flex-col items-center justify-center">
            <div className="flex justify-center gap-4 w-[320px]">
              <input type="checkbox" />
              <p className="opacity-40 text-[13px]">
                By Longing in I agree with{" "}
                <span className="text-black">Terms and Conditions</span>
              </p>
            </div>
            <div className=" my-7 text-center">
              <a
                href=""
                className="text-white px-[150px] bg-black py-2 rounded-[5px]"
              >
                Login Now
              </a>
            </div>

            <div>
              <h1 className="text-[#BBBBBB]">
                You don’t have an Account?{" "}
                <Link to={"/signup"}>
                  <a href="" className="text-black font-medium">
                    Sign Up
                  </a>
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
