import React from "react";
import assessliLogo from "../../assets/assessliLogo.png";
import assessli from "../../assets/assessli2.png";

const Navbar = () => {
  return (
    <div className="hidden w-full h-20 bg-slate-50  shadow-md md:flex justify-between px-10 items-center">
      <div className="flex justify-center items-center space-x-2">
        <img src={assessliLogo} alt="logo" className="h-10 w-10" />
        <img src={assessli} alt="logo" className="w-20" />
      </div>
      <div>
        <ul className="flex justify-center items-center space-x-10 font-semibold ">
          <li className="cursor-pointer hover:border-b-2 border-black transition duration-300 ease-in">
            Take Assessment
          </li>
          <li className="cursor-pointer hover:border-b-2 border-black ">
            Solutions
          </li>
          <li className="cursor-pointer hover:border-b-2 border-black">
            About Us
          </li>
          <li className="cursor-pointer hover:border-b-2 border-black">
            Blogs
          </li>
          <li className="cursor-pointer border-b-2 border-black">Contact Us</li>
        </ul>
      </div>

      <div>
        <button className="bg-slate-900 text-white px-5 py-3 rounded-full">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
