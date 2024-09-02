import logo from './logo.svg';
import './App.css';
import Header from './components/Navbar/Header/Header';
import Home from './components/HomePage/Home';
import Footer from './components/Navbar/Footer/Footer';
import WhatsAppButton from './components/WhatsupButton/WhatsupButton';

function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
      <WhatsAppButton/>
    </>
  );
}

export default App;
