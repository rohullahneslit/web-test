import React from "react";
import { Home } from "pages";
import { Header, Footer } from "components";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  );
};

export default App;
