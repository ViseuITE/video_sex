import React from "react";
import ReactPlayer from "react-player";

const HighlightVideo = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-3xl w-full rounded-lg overflow-hidden shadow-lg">
        <ReactPlayer
          url="https://vimeo.com/76979871" // Sample video from Vimeo
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};  

export default HighlightVideo;
