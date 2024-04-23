import './App.css';
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import ServiceProducts from './components/ServiceProducts';
import ServiceProviders from './components/ServiceProviders';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1 className="only_mobile">Open in Mobile View</h1>
    <div className="content">
        <Navbar />
        <Services />
        <ServiceProducts />
        <ServiceProviders />
        <Footer />
    </div>
    </div>
  );
}

export default App;
