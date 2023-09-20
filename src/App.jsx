import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Client from "./pages/Client";
import Article from "./pages/Article";
import NewsArticle from "./pages/News-article";

function App() {
  return (
    <div className="place-content-center min-h-screen bg-white overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/client" element={<Client />} />
        <Route path="/article" element={<Article/>} />
        <Route path="/news-article/:id" element={<NewsArticle/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
