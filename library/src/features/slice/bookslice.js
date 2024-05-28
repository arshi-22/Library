import { createSlice, nanoid } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  books: [],
  book: {},
  wishList: [],
  wishListCount: 0,
};

export const bookSlice = createSlice({
  name: "books",
  initialState: INITIAL_STATE,
  reducers: {
    setBooks: (state, action) => {
      console.log("----action-------->", action.payload);
      state.books = action.payload.data;
      console.log("----sate-------->", state.books);
    },

    updateBookDetails: (state, action) => {
      state.book = action.payload
        ? state.books.find((item) => item?.id === action.payload)
        : [];
    },

    addToWishList: (state, action) => {
      state.wishList.push({
        ...action.payload,
      });
    },

    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item?.id !== action.payload?.id
      );
    },

    addBooks: (state, action) => {
      const book = {
        id: nanoid(),
        bookName: action.payload.bookName,
        author: action.payload.author,
        prize: action.payload.prize,
      };
      state.books.push(book);
    },

    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book?.id !== action.payload);
    },
  },
});

export const {
  setBooks,
  updateBookDetails,
  addBooks,
  removeBook,
  bookList,
  addToWishList,
  removeFromWishList,
} = bookSlice.actions;

export default bookSlice.reducer;
