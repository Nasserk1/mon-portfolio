import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Body } from './components/Body/Body';
import { Skills } from './pages/skills/Skills';
import { Contact } from './pages/contact/Contact';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/*" element={<Body />} />
        <Route path="/skills/*" element={<Skills />} />
        <Route path="/contact/*" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
