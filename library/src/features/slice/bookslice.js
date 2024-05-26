import { createSlice, nanoid } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  books: [],
  wishList: [],
  wishListCount: 0,
};

export const bookSlice = createSlice({
  name: "books",
  initialState: INITIAL_STATE,
  reducers: {
    setBooks: (state, action) => {
      state.books.push(action.payload);
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
        title: action.payload.title,
        author: action.payload.author,
        price: action.payload.price,
      };
      state.books.push(book);
    },

    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book?.id !== action.payload);
    },
  },
});

export const {
  addBooks,
  removeBook,
  bookList,
  addToWishList,
  removeFromWishList,
  setBooks,
} = bookSlice.actions;

export default bookSlice.reducer;
