import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Page from "../src/Components/EnterPage/EnterPage1.jsx" ;
import HomePage from "../src/Components/HomePage/HomePage";
import EnterPage1 from "./Components/EnterPage/EnterPage1";
import Category from "./page/CategoryPage/Category.jsx";
import Dproduct from "./page/ProductPage/productPage.jsx";
//import { useState } from "react"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EnterPage1 />} />
          {/*<Route path="/Page" element={<Page/>}/>*/}
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/Category" element={<Category />} />;
          <Route path="*" element={<EnterPage1 />} />;
          <Route path="/product" element={<Dproduct />} />;
        </Routes>
      </BrowserRouter>
    </div>
  );
}
