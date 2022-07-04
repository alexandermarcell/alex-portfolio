import Work from './components/work/Work';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className='w-full max-w-screen-2xl mx-auto p-1 box-border'>
      <Navigation />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;