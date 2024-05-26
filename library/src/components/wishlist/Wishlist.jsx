import React from "react";

const Wishlist = () => {
  return (
    <button className="text-white  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800">
      <svg width={24} height={25} viewBox="0 0 24 24" cursor={"pointer"}>
        <path
          d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
          fill="white"
          className="dark:hover:bg-red"
        ></path>
      </svg>
    </button>
  );
};
export default Wishlist;
