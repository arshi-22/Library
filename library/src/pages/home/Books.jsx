import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../../features/slice/bookslice";
import { getBooks } from "../../service/bookService";
import { Card } from "../../components/bookcard/Card";
import { APP_STATUS, APP_URL } from "../../appConstants";

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const fetchBooks = async (url) => {
    await getBooks(url).then((response) => {
      response?.status === APP_STATUS.OK && dispatch(setBooks(response.data));
    });
  };

  useEffect(() => {
    fetchBooks(window.appSettings.BASE_API_URL + APP_URL.listBooks);
  }, []);

  return (
    <>
      <Card cardItems={books} />
    </>
  );
};

export default Books;
