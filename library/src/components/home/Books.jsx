import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookList, removeBook } from "../../features/slice/bookslice";
import Wishlist from "../wishlist/Wishlist";

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookList(books));
    console.log("stateeeeeeeeeeeeeee", books);
    // fetch("http://localhost:8080/api/v1/books").then((response) =>
    //   console.log("hhhhhhhhhhhi", response.json())
    // );
  }, []);

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="m-2  flex flex-wrap justify-center ">
      {books?.length &&
        books.map((book) => (
          <div
            key={book.id}
            className=" flex flex-col w-full m-1 md:max-w-sm xl:max-w-xs bg-gray border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-50"
          >
            <a href="#">
              <img className="p-8 rounded-t-lg" src="" alt="bookimg" />
            </a>
            <div>
              <a href="#">
                <h5 className="m-2 text-xl font-semibold tracking-tigt text-gray-900 dark:text-white md:text-3xl md:mt-2 mb-1">
                  Title: {book.title}
                </h5>
              </a>
            </div>
            <div className="m-2 flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                Author : {book.author}
              </span>
            </div>

            <div className="flex items-center justify-between p-3">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {book.price}
              </span>

              <Wishlist />
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Edit
              </button>

              <button
                onClick={() => handleDelete(book.id)}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Books;