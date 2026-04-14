import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Body } from './components/Body/Body';
import {Skills} from './pages/skills/Skills'; // Import de ta nouvelle page
import { Contact } from './pages/contact/Contact'; // Import de ta page de contact

function App() {
  return (
    <Router>
      <Header />
      
      {/* UN SEUL bloc Routes pour tout le monde */}
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Body />} />
        
        {/* Page de compétences */}
        <Route path="/skills" element={<Skills />} />
        
        {/* Page de contact - Maintenant à sa place ! */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );

}
export default App;