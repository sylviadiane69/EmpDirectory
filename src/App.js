import React from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Table from "./components/Table";
import Data from "./components/Data"

function App() {
  return (
    <div>
      <Header />
      <SearchForm />
      <Table />
      <Data />
    </div>
  );
}

export default App;