import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { Header } from "./components";
import AddBook from "./pages/addbooks/AddBook";
import Books from "./pages/home/Books";
import { RouteElements, router } from "./router/Router";

function App() {
  return <RouterProvider router={router} />;
}

{
  /* <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/books" Component={Books} />
        <Route path="/addnewBook" Component={AddBook} />
        <Route path="/editBook/id" Component={AddBook} />
      </Routes>
    </BrowserRouter> */
}
export default App;
