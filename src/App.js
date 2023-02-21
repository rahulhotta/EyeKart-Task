import { useState, useEffect } from "react";
import NavBar from "./Compoents/NavBar/NavBar";
import "./App.css";
import HomePage from "./Compoents/HomePage/HomePage";
import DetailsCard from "./Compoents/DetailsCard/DetailsCard";
import { BooksData } from "./BooksData";
import { Route, Routes } from "react-router-dom";

function App() {
  const [allBooks, setAllBooks] = useState(BooksData);
  const [searchItem, setSearchItem] = useState("");
  const [updatedList, setUpdatedList] = useState(allBooks);
  const [details, setDetails] = useState({});

  useEffect(() => {
    let searchList = allBooks.filter((book) => {
      if (book.title.includes(searchItem) || book.author.includes(searchItem)) {
        return book;
      }
    });
    setUpdatedList(searchList);
  }, [searchItem]);

  return (
    <div className="App">
      <NavBar setSearchItem={setSearchItem} />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              allBooks={searchItem ? updatedList : allBooks}
              searchItem={searchItem}
              setDetails={setDetails}
            />
          }
        />
        <Route
          path="*"
          element={
            <HomePage
              allBooks={searchItem ? updatedList : allBooks}
              searchItem={searchItem}
              setDetails={setDetails}
            />
          }
        />
        <Route
          path="/Details/:id"
          element={<DetailsCard details={details} />}
        />
      </Routes>
    </div>
  );
}

export default App;
