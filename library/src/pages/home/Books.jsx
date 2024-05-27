import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../../features/slice/bookslice";
import { getBooks } from "../../service/bookService";
import { Card } from "../../components/bookcard/Card";

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const fetchBooks = async () => {
    // await fetch(
    //   window.appSettings.BASE_API_URL + "api/v1/books/"
    // )
    //   .then((response) => {
    //     response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     return data;
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    const response = getBooks(
      window.appSettings.BASE_API_URL + "api/v1/books/"
    );
    return response;
  };

  useEffect(() => {
    let response = fetchBooks();
    response?.data
      ? dispatch(setBooks(response?.data))
      : dispatch(setBooks([]));
  }, []);

  return (
    <>
      <Card cardItems={books} />
    </>
  );
};

export default Books;
