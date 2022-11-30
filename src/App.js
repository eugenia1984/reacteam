import { MainLayout } from "./components/layouts";
import Header from "./components/header/Header.jsx";
import { Router } from "./components/router";
import { LoginProvider } from "./components/login";
import Footer from "./components/footer/Footer.jsx";
import './App.css';
import ShoppingCart from "./components/shoppingcart/ShoppingCart";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Header />
        <ShoppingCart />
        <MainLayout>
          <Router />
        </MainLayout>
        <Footer />
      </LoginProvider>
    </div>
  );
}

export default App;