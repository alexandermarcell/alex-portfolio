import './App.scss';
import Hero from './components/hero/Hero';
import Work from './components/work/Work';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;