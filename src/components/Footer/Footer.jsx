import './Footer.css';
import { FcAddressBook } from "react-icons/fc";



export function Footer() {
  return (
    <footer>
    <div className="footer-container">
    <h1 id="Titre2">Mon Portfolio<FcAddressBook className="icon" /></h1>
    <p>&copy; 2026 Mon Portfolio. Tous droits réservés.</p>
    <a href="retourAccueil">Retour en haut de la page Accueil</a>
    </div>
                
    </footer>
  );
}