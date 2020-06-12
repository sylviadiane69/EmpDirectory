import React from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Header />
      <SearchForm />
      <Wrapper>
        <Table />
      </Wrapper>
    </div>
  );
}

export default App;


