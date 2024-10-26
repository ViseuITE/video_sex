import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Cards from "../components/Cards";
import { videosMovie } from "../data/VideosMovie";

function Home() {
  const [Censored, setCensored] = useState([]);
  const [Uncensored, setUncensored] = useState([]);
  const [Amateur, setAmateur] = useState([]);

  useEffect(() => {
    const resultcensored = [];
    const resultuncensored = [];
    const resultamateur = [];

    // Reverse the videosMovie array to iterate in reverse order
    const reversedVideos = videosMovie.slice().reverse();

    // Loop through the reversed array and categorize videos
    reversedVideos.forEach((item) => {
      if (resultcensored.length < 16 && item.category === "censored") {
        resultcensored.push(item);
      }
    });

    reversedVideos.forEach((item) => {
      if (resultuncensored.length < 16 && item.category === "uncensored") {
        resultuncensored.push(item);
      }
    });

    reversedVideos.forEach((item) => {
      if (resultamateur.length < 16 && item.category === "amateur") {
        resultamateur.push(item);
      }
    });

    setCensored(resultcensored);
    setUncensored(resultuncensored);
    setAmateur(resultamateur);
  }, []);


  return (
    <div className="bg-[#0A0511] px-4 md:px-6 lg:px-8 xl:px-0">
      <div className="max-w-[1150px] mx-auto md:px-2 pb-16">
        <div>
          <Categories />
        </div>

        <div>
          <div className="flex items-center *:w-full lg:pt-9 md:pt-7 pt-5 *:rounded space-x-0.5">
            <div className="h-[125px] flex items-center overflow-hidden">
              <img
                className="w-full"
                src={require("../assets/videoframe1.png")}
                alt=""
              />
            </div>

            <div className="h-[125px] flex items-center overflow-hidden">
              <img
                className="w-full"
                src={require("../assets/videoframe2.png")}
                alt=""
              />
            </div>

            <div className="h-[125px] hidden md:flex items-center overflow-hidden">
              <img
                className="w-full"
                src={require("../assets/videoframe3.png")}
                alt=""
              />
            </div>

            <div className="h-[125px] hidden md:flex items-center overflow-hidden">
              <img
                className="w-full"
                src={require("../assets/videoframe4.png")}
                alt=""
              />
            </div>

            <div className="h-[125px] hidden lg:flex items-center overflow-hidden">
              <img
                className="w-full"
                src={require("../assets/videoframe5.png")}
                alt=""
              />
            </div>

            <div className="h-[125px] hidden md:flex items-center overflow-hidden">
              <img
                className="w-full"
                src={require("../assets/videoframe6.png")}
                alt=""
              />
            </div>

            <div className="h-[125px] hidden lg:flex items-center overflow-hidden">
              <img
                className="w-full"
                src={require("../assets/videoframe7.png")}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="pt-8">
          <Cards
            cards={Censored}
            categoryname={"Censored"}
            linkofcategory={"censored"}
            ads={"penextkam.jpg"}
            numbersofcategory={13483}
          />
        </div>

        <div className="pt-8">
          <Cards
            cards={Uncensored}
            categoryname={"Uncensored"}
            linkofcategory={"uncensored"}
            ads={"penextkam.jpg"}
            numbersofcategory={33097}
          />
        </div>

        <div className="pt-8">
          <Cards
            cards={Amateur}
            categoryname={"Amateur"}
            linkofcategory={"amateur"}
            ads={"penextkam.jpg"}
            numbersofcategory={35004}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
