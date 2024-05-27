import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBooks,
  removeBook,
  removeFromWishList,
  updateBookDetails,
} from "../../features/slice/bookslice";
import Wishlist from "../wishlist/Wishlist";
import { getBooks } from "../../service/bookService";

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const fetchBooks = async () => {
    const response = await fetch(
      window.appSettings.BASE_API_URL + "api/v1/books/"
    )
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
    // getBooks(
    //   window.appSettings.BASE_API_URL + "api/v1/books/"
    // );
    return response;
  };

  useEffect(() => {
    let response = fetchBooks();
    response?.data
      ? dispatch(setBooks(response?.data))
      : dispatch(setBooks([]));
  }, []);

  const handleDelete = (book) => {
    dispatch(removeBook(book?.id));
    dispatch(removeFromWishList(book));
  };

  const handleEditDetails = (id) => {
    dispatch(updateBookDetails(id));
  };

  return (
    <div className="m-2 flex flex-wrap justify-center ">
      {books?.length &&
        books.map((book) => (
          <div
            key={book?.id}
            className="flex flex-col w-full m-1 md:max-w-sm xl:max-w-xs bg-gray border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-50"
          >
            <a href="#">
              <img className="p-8 rounded-t-lg" src="" alt="bookimg" />
            </a>
            <div>
              <a href="#">
                <h5 className="m-2 text-xl font-semibold tracking-tigt text-gray-900 dark:text-white md:text-3xl md:mt-2 mb-1">
                  Title: {book?.title}
                </h5>
              </a>
            </div>
            <div className="m-2 flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                Author : {book?.author}
              </span>
            </div>

            <div className="flex items-center justify-between p-3">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {book?.price}
              </span>

              <Wishlist bookDetails={book} />
              <button
                onClick={() => handleEditDetails(book?.id)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(book)}
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
