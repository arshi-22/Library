import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { wishList } = useSelector((state) => state.books);

  return (
    <header>
      <div className="text-white bg-slate-800 p-2 flex justify-between items-center">
        <h1 className="font-semibold">Library</h1>
        <div className="flex ">
          <svg width={24} height={25} viewBox="0 0 24 24" cursor={"pointer"}>
            <path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" fill="orange"></path>
          </svg>
          <div className="flex text-whitetext-sm ">{wishList?.length}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
