import React from "react";

const CustomButton = ({ text }) => {
  return (
    <button className="w-fit py-[18px] px-[36px] border-black bg-black hover:bg-white text-white hover:text-black duration-200 border-[2px] font-unbounded text-[14px] font-bold">
      {text}
    </button>
  );
};

export default CustomButton;
