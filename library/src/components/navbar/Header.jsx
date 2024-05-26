import React from "react";

const Header = () => {
  return (
    <header>
      <div className="bg-slate-800 p-2 flex justify-between items-center">
        <h1 className="text-white font-semibold">Library</h1>
        <svg width={24} height={25} viewBox="0 0 24 24" cursor={"pointer"}>
          <path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" fill="red"></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
