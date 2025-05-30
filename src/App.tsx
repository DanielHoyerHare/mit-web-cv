import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import ScrollToTop from './Components/ScrollToTop';
import Main from './Pages/Main';
import Contact from './Pages/Contact';
import BackgroundAnimation from "./Components/BackgroundAnimation";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <BackgroundAnimation />
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}
