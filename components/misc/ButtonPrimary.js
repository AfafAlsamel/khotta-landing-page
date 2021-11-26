import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <div
      className="rounded-md shadow"
      >
      <button
        className={
          "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-green-700 md:py-4 md:text-lg md:px-10" +
          addClass
        }
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonPrimary;