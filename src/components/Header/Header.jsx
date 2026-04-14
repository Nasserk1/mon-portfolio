import './Header.css';
import { FcAddressBook } from "react-icons/fc";
import { Link } from 'react-router-dom';


export function Header() {
  return (
    <header>
    <div className="title-container">
    <h1 id="Titre">Mon Portfolio<FcAddressBook className="icon" /></h1>
    
    </div>
    <nav className="navbar">
        <Link to="/">Accueil</Link>
        <Link to="/skills">Compétences développées</Link>
        <Link to="/contact">Contact</Link>
      </nav>


    </header>
  );
}