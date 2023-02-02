import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import pages
import {
  Home,
  CategoryProduct,
  ProductSingle,
  Cart,
  Search,
} from "./pages/index";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
