import React from "react";

const ButtonSecondry = ({ children, addClass }) => {
  return (
    <div
      className="mt-3 sm:mt-0 sm:ml-3">
      <button
        className={
        "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-green-500 md:py-4 md:text-lg md:px-10"+
        addClass
        }
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonSecondry;