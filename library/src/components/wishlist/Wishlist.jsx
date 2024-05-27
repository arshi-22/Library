import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  removeFromWishList,
} from "../../features/slice/bookslice";

const Wishlist = ({ bookDetails }) => {
  const dispatch = useDispatch();
  const { wishList } = useSelector((state) => state.books);

  let item = useMemo(
    () => wishList.find((item) => item?.id === bookDetails?.id),
    [wishList]
  );

  const handleWishList = () => {
    item
      ? dispatch(removeFromWishList(bookDetails))
      : dispatch(addToWishList(bookDetails));
  };

  return (
    <button
      className="text-white   text-sm px-5 py-2.5 text-center dark:hover:bg-gray-800 dark:focus:ring-gray-800"
      onClick={handleWishList}
    >
      <svg width={24} height={25} viewBox="0 0 24 24" cursor={"pointer"}>
        <path
          d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
          fill={item ? "orange" : "white"}
        ></path>
      </svg>
    </button>
  );
};
export default Wishlist;
