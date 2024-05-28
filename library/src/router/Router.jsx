import {
  Route,
  BrowserRouter as Router,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Books from "../pages/home/Books";
import AddBook from "../pages/addbooks/AddBook";
import { Header } from "../components";
import { NotFoundPage } from "../pages/errorPage/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/books",
        element: <Books />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/addnewBook",
        element: <AddBook />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/editbookdetails/:bookId",
        element: <AddBook />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
]);

export const RouteElements = () => {
  return (
    <>
      <Route path="/books" Component={<Books />} />
      <Route path="/addnewBook" Component={<AddBook />} />
      <Route path={"/editbookdetails/:bookId"} Component={AddBook} />
    </>
  );
};
