import './Header.css';
import { FcAddressBook } from "react-icons/fc";


export function Header() {
  return (
    <header>
    <div className="title-container">
    <h1 id="Titre">Mon Portfolio<FcAddressBook className="icon" /></h1>
    
    </div>
    <nav className="navbar">
          <a href="#hero">Accueil</a>
          <a href="#skills">Compétences développées</a>
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>
        
    </nav>


    </header>
  );
}