import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Novel from "./pages/Novel";
import Cook from "./pages/Cook";
import Health from "./pages/Health";
import Language from "./pages/Language";
import ComputerIT from "./pages/ComputerIT";
import Detail from "./components/Detail";

// // axios api
import instance from "./api/axios";
import requests from "./api/request";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [novel, setNovel] = useState([]);
  const [cook, setCook] = useState([]);
  const [detail, setDetail] = useState([]);

  const fetchData = async () => {
    // 멤버목록 가져오기
    const params = {
      start: 1,
      count: 5,
    };
    const resultNovel = await instance.get(requests.fetchNovel, { params });
    setNovel(resultNovel.data);
    const resultCook = await instance.get(requests.fetchCook, { params });
    setCook(resultCook.data);
    const resultDetail = await instance.get(requests.fetchDetail, { params });
    setDetail(resultDetail.data);

    // setMembers();
    // setSongs();
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novel" element={<Novel novel={novel} />} />
          <Route path="/cook" element={<Cook cook={cook} />} />
          <Route path="/health" element={<Health />} />
          <Route path="/language" element={<Language />} />
          <Route path="/computerit" element={<ComputerIT />} />
          <Route path="/detail" element={<Detail detail={detail} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
