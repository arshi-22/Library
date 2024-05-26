import "./App.css";
import AddBook from "./components/addbooks/AddBook";
import Books from "./components/home/Books";
import Header from "./components/navbar/Header";

function App() {
  return (
    <div>
      <Header />
      <AddBook />
      <Books />
    </div>
  );
}

export default App;
