import React, { useState } from "react";
import { CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";

function RandomVideos({ randomVideos }) {
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

  return (
    <div className="">
      <div>
        <ul className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-4 xl:gap-[24px]">
          {randomVideos?.length > 0 &&
            randomVideos.map((e, i) => (
              <li
                onMouseOver={() => handleHover(e.id)}
                onMouseLeave={handleMouseLeave}
                className="cursor-pointer group z-20"
                key={i + e.id}
              >
                <Link
                  to={`/details/${e.id}`}
                  className="focus:outline-none outline-none sticky z-20"
                >
                  <div className="relative xl:h-44 lg:h-[160px] md:h-[150px] h-[120px] flex items-center overflow-hidden">
                    {/* Video element with smooth fade-in */}
                    <video
                      className={`w-full transition-opacity focus:outline-none outline-none duration-500 ease-in-out ${
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
                      {/* Removed the inner Link */}
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
                    <p className="text-white text-sm">{e.description}</p>
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
    </div>
  );
}

export default RandomVideos;
