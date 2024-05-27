import React from "react";
import { useDispatch } from "react-redux";
import {
  removeBook,
  removeFromWishList,
  updateBookDetails,
} from "../../features/slice/bookslice";
import Wishlist from "../wishlist/Wishlist";

export const Buttons = ({ bookDetails }) => {
  const dispatch = useDispatch();

  const handleDelete = (book) => {
    dispatch(removeBook(book?.id));
    dispatch(removeFromWishList(book));
  };

  const handleEditDetails = (id) => {
    dispatch(updateBookDetails(id));
  };

  return (
    <div>
      <Wishlist bookDetails={bookDetails} />
      <button
        onClick={() => handleEditDetails(bookDetails?.id)}
        // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        className="text-white   text-sm px-5 py-2.5 text-center dark:hover:bg-gray-800 dark:focus:ring-gray-800"
      >
        <svg width={24} height={25} viewBox="0 0 24 24" cursor={"pointer"}>
          <path
            d="m19 20.25c0-.402-.356-.75-.75-.75-2.561 0-11.939 0-14.5 0-.394 0-.75.348-.75.75s.356.75.75.75h14.5c.394 0 .75-.348.75-.75zm-7.403-3.398 9.124-9.125c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-9.143 9.103c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 7.651-7.616 2.335 2.327-7.637 7.638z"
            fill="blue"
          />
        </svg>
      </button>
      <button
        onClick={() => handleDelete(bookDetails)}
        // className="text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        className="text-white   text-sm px-5 py-2.5 text-center dark:hover:bg-gray-800 dark:focus:ring-gray-800"
      >
        <svg width={24} height={25} viewBox="0 0 24 24" cursor={"pointer"}>
          <path
            d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z"
            fill="red"
          />
        </svg>
      </button>
    </div>
  );
};
