import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addBooks, updateBookDetails } from "../../features/slice/bookslice";
import { nanoid } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

const AddBook = () => {
  const { book } = useSelector((state) => state.books);
  const bookId = useParams().bookId;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: { id: nanoid(), title: "", author: "", price: "" },
  });

  const handleAdd = (data) => {
    dispatch(addBooks(data));
    reset({ id: nanoid(), title: "", author: "", price: "" });
  };

  useEffect(() => {
    if (bookId) {
      dispatch(updateBookDetails(bookId));
      console.log(book);
      // setValue([
      //   {
      //     id: book.id,
      //     title: book.bookName,
      //     author: book.author,
      //     price: book.prize,
      //   },
      // ]);
    }
    return () => dispatch(updateBookDetails());
  }, [bookId]);

  return (
    <form
      className="max-w-sm mx-auto border border-gray-400 rounded text-white"
      onSubmit={handleSubmit(handleAdd)}
    >
      <div className="m-5">
        <span className="flex">
          <label className="block mb-2 text-sm font-medium">Book Title</label>
          <p className="text-red-500">*</p>
        </span>
        <input
          type="text"
          id="booktitle"
          aria-describedby="helper-text-explanation"
          className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="title"
          placeholder="Enter book title"
          // value={book?.bookName}
          {...register("title", { required: true })}
        />
        {errors.title && errors.title.type === "required" && (
          <p className="text-red-500 font-sm ">Book title can not be empty</p>
        )}
      </div>
      <div className="m-5">
        <span className="flex">
          <label className="block mb-2 text-sm font-medium">Author Name</label>
          <p className="text-red-500">*</p>
        </span>
        <input
          type="text"
          name="author"
          {...register("author", { required: true })}
          className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter author name"
          // value={book?.author}
        />
        {errors.author && errors.author.type === "required" && (
          <p className="text-red-500 font-sm ">Author name is required</p>
        )}
      </div>
      <div className="m-5">
        <span className="flex">
          <label className="block mb-2 text-sm font-medium">Price</label>
          <p className="text-red-500">*</p>
        </span>
        <input
          type="number"
          name="price"
          {...register("price", { required: true, min: 10 })}
          className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter price"
          // value={book?.prize}
        />
        {errors.price && errors.price.type === "required" && (
          <p className="text-red-500 font-sm ">Price can not be empty</p>
        )}

        {errors.price && errors.price.min && (
          <p className="text-red-500 font-sm ">
            Price should be greater than value 10
          </p>
        )}
      </div>
      <div className="m-5">
        <button type="submit" className="w-52 h-10 bg-green-500 rounded-md">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddBook;
