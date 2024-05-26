import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addBooks } from "../../features/slice/bookslice";
import { nanoid } from "@reduxjs/toolkit";

const AddBook = () => {
  const [bookDetails, setBookDetails] = useState({
    id: nanoid(),
    title: "",
    author: "",
    price: "",
  });
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAdd = (data) => {
    dispatch(addBooks(data));
    setBookDetails({ id: nanoid(), title: "", author: "", price: "" });
  };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   name === "title"
  //     ? setBookDetails({ ...bookDetails, title: value })
  //     : name === "author"
  //     ? setBookDetails({ ...bookDetails, author: value })
  //     : setBookDetails({ ...bookDetails, price: value });
  // };

  return (
    <form
      className="max-w-sm mx-auto border border-gray-400 rounded"
      onSubmit={handleSubmit(handleAdd)}
    >
      <div className="m-5">
        <label className="block mb-2 text-sm font-medium">Book Title</label>
        <input
          type="text"
          id="booktitle"
          aria-describedby="helper-text-explanation"
          className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="title"
          placeholder="Enter book title"
          // value={bookDetails.title}
          {...register("title")}
        />
      </div>
      <div className="m-5">
        <label className="block mb-2 text-sm font-medium">Author Name</label>
        <input
          type="text"
          name="author"
          {...register("author")}
          className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter author name"
          // value={bookDetails.author}
        />
      </div>
      <div className="m-5">
        <label className="block mb-2 text-sm font-medium">Price</label>
        <input
          type="number"
          name="price"
          {...register("price")}
          className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter price"
          // value={bookDetails.price}
        />
      </div>
      <div className="m-5">
        <button type="submit" className="bg-indigo-500 rounded w-52 h-10">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddBook;
