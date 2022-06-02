import './App.scss';
import Footer from './components/footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import About from './components/about/About';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Layout>
          <Routes>
            <Route path='/' element={<Work/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </Layout>
        <Footer />
      </Router>
    </div>
  );
}

export default App;