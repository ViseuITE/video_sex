import React from "react";

function Footer() {
  return (
    <div className="bg-[#0A0511]">
      <div className="lg:py-16 py-10 bg-[#1D1924] px-2 md:px-6 lg:px-8 xl:px-0">
        <div className="max-w-[1150px] mx-auto lg:flex px-2 lg:items-center lg:space-x-24 space-y-4 lg:space-y-0">
          <div className=" font-semibold text-white text-[14px]">
            All clips are collected from outside sources (vidhide.com…). No
            videos are hosted on this server.
            <span className="text-[#F10086]">
              {" "}
              7mmtv.sx is not liable for copyright by any country. If you have
              any legal issues please contact the appropriate media file owners
              or host sites.
            </span>
          </div>

          <div className="flex items-center lg:justify-end">
            <button className="bg-[#F10086] focus:outline-none select-none text-white text-nowrap px-5 py-3 rounded-lg font-semibold text-sm">
              Contact us.
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1150px] mx-auto flex lg:flex-row flex-col items-center justify-center lg:justify-between py-6 px-8 xl:px-2 space-y-1.5 md:space-y-3 lg:space-y-0">
        <div className=" flex lg:flex-row flex-col items-center lg:space-x-12 space-y-1.5 md:space-y-3 lg:space-y-0">
          <div>
            <img
              className="h-[36px] "
              src={require(`../assets/logo (1).png`)}
              alt=""
            />
          </div>
          <div className="text-white font-semibold text-[11px]">
            Copyright © 2018 7mmtv.sx. All rights reserved.
          </div>
        </div>

        <div className=" flex items-center text-[11px] font-semibold space-x-4 text-gray-300">
          <p className="hover:text-white transition-all duration-300 cursor-pointer">
            18 U.S.C. 2257
          </p>
          <p className="hover:text-white transition-all duration-300 cursor-pointer">
            Terms
          </p>
          <p className="hover:text-white transition-all duration-300 cursor-pointer">
            LIVE CAM
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
