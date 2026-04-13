import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Body } from './components/Body/Body';
import {Skills} from './pages/Skills'; // Import de ta nouvelle page

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        {/* Route pour la page d'accueil (ton Body actuel) */}
        <Route path="/" element={<Body />} />
        
        {/* Route pour ta page de compétences */}
        <Route path="/skills" element={<Skills />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;