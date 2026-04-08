import { useEffect, useState } from "react";
import "./IntroCodeBlock.css";

export default function IntroCodeBlock() {
  const [displayedText, setDisplayedText] = useState("");

  const fullText = `
/**
 * Hello World !!!
 * Bienvenue sur mon portfolio !
 * Je suis un développeur web passionné par la création de sites web modernes et fonctionnels.
 * Sur ce site, vous trouverez une sélection de mes projets les plus récents,
 * ainsi que des informations sur mes compétences et mon parcours professionnel.
 * N'hésitez pas à parcourir les différentes sections pour en savoir plus sur moi et mes réalisations.
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
