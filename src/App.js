import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/products/Products.jsx";
import Contact from "./pages/contact/Contact.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/productos" element={<Products />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
