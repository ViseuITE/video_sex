import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

function Header({ handleMenutoggle, menutoggle }) {
  const changePagesScrolltop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="">
      <div className="bg-[#1D1924] px-4 md:px-6 lg:px-8 xl:px-0 hidden lg:block">
        <div className="max-w-[1150px] mx-auto h-[84px] px-2 flex items-center justify-between">
          <div className="">
            <img
              className="h-[44px]"
              src={require("../assets/logo (1).png")}
              alt=""
            />
          </div>
          <div>
            <div className="w-[620px] h-[42px] flex items-center space-x-1.5 bg-[#2B2632] rounded-xl">
              <input
                className="outline-none w-[442.62px] h-[32px] focus:outline-none bg-[#2B2632] pl-5 rounded-xl text-xs text-white cur"
                placeholder="Search.."
                type="text"
                alt=""
              />
              <button className="h-[32px] w-[127.40px] focus:outline-none outline-none bg-[#37333E] px-2 rounded-md">
                <select className="w-full h-[32px] focus:outline-none bg-[#37333E] text-white text-xs rounded-md">
                  <option>ALL</option>
                  <option>Censored</option>
                  <option>Reducing Mosaic</option>
                  <option>Amateur</option>
                  <option>Uncensored</option>
                  <option>Chinese AV</option>
                </select>
              </button>
              <button className="h-[42px] w-[42px] flex items-center justify-center focus:outline-none outline-none">
                <FiSearch className="text-[#F10086] text-xl" />
              </button>
            </div>
          </div>
        </div>

        <div className="h-[53.80px] pb-2 xl:pb-0 select-none">
          <div className="*:focus:outline-none *:outline-none max-w-[1150px] px-2 mx-auto h-full flex flex-wrap *:px-2 xl:*:px-0 items-center xl:justify-between text-white font-semibold text-sm uppercase">
            <Link
              to={"/"}
              onClick={changePagesScrolltop}
              className=" focus:outline-none hover:text-[#F50087] transition-all duration-300"
            >
              Home
            </Link>
            <Link
              onClick={changePagesScrolltop}
              to={"/reducing-mosaic"}
              className=" focus:outline-none hover:text-[#F50087] transition-all duration-300"
            >
              Reducing Mosaic (36163)
            </Link>
            <Link
              onClick={changePagesScrolltop}
              to={"/censored"}
              className=" focus:outline-none hover:text-[#F50087] transition-all duration-300"
            >
              Censored (128279)
            </Link>
            <Link
              onClick={changePagesScrolltop}
              to={"/amateur"}
              className=" focus:outline-none hover:text-[#F50087] transition-all duration-300"
            >
              Amateur (34953)
            </Link>
            <Link
              onClick={changePagesScrolltop}
              to={"/uncensored"}
              className=" focus:outline-none hover:text-[#F50087] transition-all duration-300"
            >
              Uncensored (33079)
            </Link>
            <Link
              onClick={changePagesScrolltop}
              to={"/chinese-av"}
              className=" focus:outline-none hover:text-[#F50087] transition-all duration-300"
            >
              Chinese AV (26067)
            </Link>
            <Link
              onClick={changePagesScrolltop}
              to={"/"}
              className=" focus:outline-none hover:text-[#F50087] transition-all duration-300"
            >
              LIVE CAM
            </Link>
            <Link
              onClick={changePagesScrolltop}
              to={"/"}
              className=" focus:outline-none hover:text-[#F50087] transition-all duration-300"
            >
              More sites
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:hidden relative">
        <div className="text-gray-200 bg-[#1D1924] px-4 md:px-6 lg:px-8 xl:px-0 flex items-center justify-between py-3">
          <div className=" ">
            <IoMdMenu
              onClick={handleMenutoggle}
              className="md:text-2xl text-xl"
            />
          </div>
          <div>
            <img
              className="md:w-[127.63px] w-[110px]"
              src={require(`../assets/logo (1).png`)}
              alt=""
            />
          </div>
          <div>
            <IoSearch className="md:text-2xl text-xl" />
          </div>
        </div>

        <div>
          <div
            className={`absolute ${
              menutoggle ? "left-0" : "-left-full"
            } transition-all duration-500 w-[78%] md:w-[38.5%] *:border-t *:border-gray-800 *:pl-4 *:py-4 z-30 *:focus:outline-none *:outline-none text-white font-semibold text-sm uppercase flex flex-col bg-[#1D1924]`}
          >
            <Link
              to={"/"}
              onClick={() => {
                handleMenutoggle();
                changePagesScrolltop();
              }}
              className=" focus:outline-none hover:text-[#F50087] transition-all duration-300"
            >
              Home
            </Link>

            <Link
              onClick={() => {
                handleMenutoggle();
                changePagesScrolltop();
              }}
              to={"/reducing-mosaic"}
              className=" focus:outline-none hover:text-[#F50087] transition-all duration-300"
            >
              Reducing Mosaic (36163)
            </Link>

            <Link
              onClick={() => {
                handleMenutoggle();
                changePagesScrolltop();
              }}
              to={"/censored"}
              className=" focus:outline-none hover:text-[#F50087] transition-all duration-300"
            >
              Censored (128279)
            </Link>

            <Link
              onClick={() => {
                handleMenutoggle();
                changePagesScrolltop();
              }}
              to={"/amateur"}
              className=" focus:outline-none hover:text-[#F50087] transition-all duration-300"
            >
              Amateur (34953)
            </Link>

            <Link
              onClick={() => {
                handleMenutoggle();
                changePagesScrolltop();
              }}
              to={"/uncensored"}
              className=" focus:outline-none hover:text-[#F50087] transition-all duration-300"
            >
              Uncensored (33079)
            </Link>

            <Link
              onClick={() => {
                handleMenutoggle();
                changePagesScrolltop();
              }}
              to={"/chinese-av"}
              className=" focus:outline-none hover:text-[#F50087] transition-all duration-300"
            >
              Chinese AV (26067)
            </Link>

            <Link
              onClick={() => {
                handleMenutoggle();
                changePagesScrolltop();
              }}
              to={"/live-cam"}
              className=" focus:outline-none hover:text-[#F50087] transition-all duration-300"
            >
              LIVE CAM
            </Link>

            <Link
              onClick={() => {
                handleMenutoggle();
                changePagesScrolltop();
              }}
              to={"/more-sites"}
              className=" focus:outline-none hover:text-[#F50087] transition-all duration-300"
            >
              More sites
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
