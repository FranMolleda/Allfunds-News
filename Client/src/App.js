import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsProvider from "./context/newsContext";
import Header from "./components/Layout/Header";
import News from "./components/news/News";
import Archives from "./components/archives/Archives";

function App() {
  return (
    <NewsProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<News />}></Route>
            <Route path="/archives" element={<Archives />}></Route>
          </Routes>
        </div>
      </Router>
    </NewsProvider>
  );
}

export default App;
