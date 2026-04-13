import { useEffect, useState } from "react";
import "./IntroCodeBlock.css";

export default function IntroCodeBlock() {
  const [displayedText, setDisplayedText] = useState("");

  const fullText = `
/**
 * Hello World !!!
 * Bienvenue sur mon portfolio !
 *
 * Je suis Nasser KHELIFI et je suis actuellement en reconversion professionnelle
 * et en formation pour valider le Titre Professionnel
 * de Concepteur Développeur d’Applications (CDA).
 *
 * Passionné par le développement web, j’apprends à concevoir
 * et développer des applications modernes, performantes
 * et centrées sur l’expérience utilisateur.
 *
 * Vous trouverez ici mes projets récents,
 * mes compétences en évolution,
 * ainsi qu’un aperçu de mon parcours et de ma transition vers ce métier.
 *
 * Merci de votre visite et bonne exploration !
 */
`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 12); // vitesse de frappe

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="code-container">
      <div className="code-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <span className="filename">intro.js</span>
      </div>

      <pre className="code-block">
        <code>{displayedText}</code>
      </pre>
    </div>
  );
}
