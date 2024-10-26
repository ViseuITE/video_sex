import React, { useState } from "react";
import { CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";

function Cards({
  cards,
  categoryname,
  linkofcategory,
  numbersofcategory,
  ads,
}) {
  const [isLoading, setLoading] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const handleHover = (id) => {
    setLoading(true);
    setHoveredId(id);
    // Simulate loading time (4 seconds), then hide the frame
    setTimeout(() => {
      setLoading(false);
    }, 600);
  };

  const handleMouseLeave = () => {
    setLoading(false);
    setHoveredId(null);
  };

    const changePagesScrolltop = () => {
      window.scrollTo(0, 0);
    };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-2xl text-xl font-semibold text-white">
          {categoryname} ({numbersofcategory})
        </h1>
        <div className="flex items-center space-x-2.5">
          <button className="bg-[#F10086] rounded-md text-white px-3 py-2 focus:outline-none select-none text-xs font-semibold">
            + Date
          </button>
          <button className="bg-[#F10086] rounded-md text-white px-3 py-2 focus:outline-none select-none text-xs font-semibold">
            + More
          </button>
        </div>
      </div>

      <div>
        <ul className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-4 xl:gap-[24px]">
          {cards?.length > 0 &&
            cards.map((e, i) => (
              <li
                onMouseOver={() => handleHover(e.id)}
                onMouseLeave={handleMouseLeave}
                className="cursor-pointer group z-20 focus:outline-none"
                key={i + e.id}
              >
                <Link
                  to={`/details/${e.id}`}
                  className="focus:outline-none sticky z-20"
                >
                  <div className="relative xl:h-44 lg:h-[160px] md:h-[150px] h-[120px] flex items-center overflow-hidden">
                    {/* Video element with smooth fade-in */}
                    <video
                      className={`w-full focus:outline-none outline-none transition-opacity duration-500 ease-in-out ${
                        hoveredId === e.id && !isLoading
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      loop
                      muted
                      autoPlay
                    >
                      <source src={require(`../assets/videos/${e.videourl}`)} />
                    </video>

                    {/* Image frame with smooth fade-out after loading */}
                    <div
                      className={`absolute top-0 left-0 xl:h-44 lg:h-[160px] md:h-[150px] h-[120px] w-full transition-opacity duration-500 ease-in-out
                        ${
                          hoveredId === e.id && !isLoading
                            ? "opacity-0"
                            : "opacity-100"
                        }`}
                    >
                      {/* Removed inner Link here */}
                      <img
                        className="w-full h-full"
                        src={require(`../assets/${e.imageframe}`)}
                        alt=""
                      />
                    </div>

                    {/* Loading spinner */}
                    {hoveredId === e.id && isLoading && (
                      <div className="absolute w-full h-full z-10 flex items-center justify-center">
                        <svg className="svg" viewBox="25 25 50 50">
                          <circle
                            className="circle"
                            r="20"
                            cy="50"
                            cx="50"
                          ></circle>
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Card description */}
                  <div className="pt-2 space-y-2.5">
                    <p className="text-white md:text-sm text-xs">
                      {e.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-1">
                        <CiYoutube className="text-[#CC0173] md:text-xl text-lg translate-y-1" />
                        <p className="text-gray-50 md:text-sm text-xs font-semibold flex">
                          {e.name}
                        </p>
                      </div>
                      <div className="text-gray-400 md:text-[11px] text-[10px] font-semibold">
                        {e.date}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <div className="space-y-10 pt-2">
        <div className="flex items-center justify-center">
          <Link
            to={`/${linkofcategory}`}
            onClick={changePagesScrolltop}
            className=" w-[220.31px] flex items-center justify-center focus:outline-none select-none h-[51.60px] hover:bg-[#2b2731] transition-all duration-300 rounded-xl font-semibold text-white text-xs border border-gray-700"
          >
            More {categoryname} Videos
          </Link>
        </div>

        <div
          className={`flex items-center justify-center ${
            ads === "" ? "hidden" : "block"
          }`}
        >
          {ads && (
            <img
              className=" xl:h-[90px]"
              src={require(`../assets/${ads}`)}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
