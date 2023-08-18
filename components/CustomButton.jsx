import React from "react";

const CustomButton = ({ text, reverse }) => {
  return (
    <button
      className={`${
        reverse
          ? "border-white bg-white hover:bg-black text-black hover:text-white"
          : "border-black bg-black hover:bg-white text-white hover:text-black"
      } w-fit py-[18px] px-[36px] duration-200 border-[2px] font-unbounded text-[14px] font-bold`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
