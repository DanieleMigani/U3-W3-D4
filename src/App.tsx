import {} from "react-bootstrap";
import MyNav from "./components/MyNav";

import FetchArticles from "./components/FetchArticles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticleDetails from "./components/ArticleDetails";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        
        <Routes>
          <Route path="/" element={<FetchArticles />}/>
           <Route path="/ArticleDetails/:articleId" element={<ArticleDetails />}/>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
