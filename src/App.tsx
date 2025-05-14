import { createBrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Main from './Pages/Main';
import Contact from './Pages/Contact';

const router = createBrowserRouter([
{
  path: "/",
  element: <Main/>
},
{
  path: "/contact",
  element: <Contact/>
}]);

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
