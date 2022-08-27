import React from "react";
import Pages from "./pages/pages";
import Category from "./components/category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/search";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search/>
        <Category/>
        <Pages />
        <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
