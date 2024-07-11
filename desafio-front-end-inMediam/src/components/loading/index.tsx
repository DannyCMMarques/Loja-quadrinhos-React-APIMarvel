import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50 block">
      <div className="flex justify-center items-center h-full">
        <div className="border-4 border-t-transparent border-white rounded-full w-10 h-10 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
