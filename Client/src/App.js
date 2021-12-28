import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsProvider from "./context/newsContext";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import New from "./components/views/news/New";
import Archived from "./components/views/archived/Archived";

function App() {
  return (
    <NewsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<New />}></Route>
          <Route path="/archived" element={<Archived />}></Route>
        </Routes>
        <Footer />
      </Router>
    </NewsProvider>
  );
}

export default App;
