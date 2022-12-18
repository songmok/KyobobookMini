import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import HomeList from "./components/HomeList";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import Novel from "./pages/Novel";
import Cook from "./pages/Cook";
import Health from "./pages/Health";
import Language from "./pages/Language";
import ComputerIT from "./pages/ComputerIT";

// // axios api
// import instance from "./api/axios";
// import requests from "./api/request";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeList />} />
          </Route>
          <Route path="/novel" element={<Novel />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
