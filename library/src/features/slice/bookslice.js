import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getBooks } from "../../service/bookService";

const initialState = {
  books: [],
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    bookList: (state, action) => {
      state.books = getBooks("http://localhost:8080/api/v1/books/")?.data;
    },
    addBooks: (state, action) => {
      console.log("statee noowwwww ", state.books);
      state.books = [];
      const book = {
        id: nanoid(),
        title: action.payload.title,
        author: action.payload.author,
        price: action.payload.price,
      };
      state.books.push(book);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBooks, removeBook, bookList } = bookSlice.actions;

export default bookSlice.reducer;
