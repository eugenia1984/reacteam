import { MainLayout } from "./components/layouts";
import Header from "./components/header/Header.jsx";
import { Router } from "./components/router";
import { LoginProvider } from "./components/login";
import Footer from "./components/footer/Footer.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Header />
        <MainLayout>
          <Router />
        </MainLayout>
        <Footer />
      </LoginProvider>
    </div>
  );
}

export default App;