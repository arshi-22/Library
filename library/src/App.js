import { Header } from "./components";
import AddBook from "./pages/addbooks/AddBook";
import Books from "./pages/home/Books";

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
