import "./Skills.css";
import { Link } from 'react-router-dom';


export function Skills() {
  return (
    <main>
    
        
        
        <h1>Compétences développées</h1>
        <section id="projects" className="body">
        
                  {/* CARD 1 */}
                  <div className="card">
                    
                    <h2>Développement d'applications web</h2>
                    <p>
                      <strong>@- Langages de programmation & Web :</strong> Maîtrise du JavaScript, de l'HTML5 et du CSS3 pour le développement d'interfaces dynamiques et modernes.
                      <br />
                      <strong>@- Frameworks & Bibliothèques :</strong> Utilisation de React pour la création de composants UI et de Tailwind CSS pour un stylisage efficace et responsive.
                      <br />
                      <strong>@- Développement Backend :</strong> Bases solides en Node.js et gestion de bases de données relationnelles avec MySQL (modélisation et requêtes CRUD).
                      <br />
                      <strong>@- Intelligence Artificielle & Automatisation :</strong> Expertise émergente dans l'usage des Agents IA, des LLM et de l'automatisation via N8N.
                      <br />
                      <strong>@- Méthodologies & Architecture :</strong> Application des principes Agile, conception d'API REST, respect du responsive design et des bonnes pratiques de debug.
                      <br />
                      <strong>@- Outils de développement :</strong> Maîtrise de l'environnement VS Code et gestion de version avec Git/GitHub pour le travail collaboratif.
                      <br />
                      <strong>@- Soft Skills issus de l'expérience :</strong> Pilotage de projets, gestion de processus et capacité d'adaptation aux nouveaux outils numériques.
                    </p>
                   
                     <a
                      href="src\assets\images\CVDev.PNG"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir mon CV orienté développement web
                    </a>

                  </div>
        
                  {/* CARD 2 */}
                  <div className="card">
                    
                    <h2>Formation professionnelle</h2>
                    <p>
                      Ce projet a été réalisé dans le cadre de ma formation en
                      développement web. Il s'agit d'une application de visualisation de
                      données. <br /><br />
                      L'application permet de représenter graphiquement des informations
                      complexes pour faciliter leur compréhension.
                    </p>
                    
                  </div>
        
                  {/* CARD 3 */}
                  <div className="card">
                    
                    <h2>Economie Sociale et Solidaire (E.S.S.) - Gestion et management</h2>
                    <p>
                      ADA Quiz Project est une application de quiz dédiée à la géographie.
                      Elle a été développée dans le cadre de ma formation en développement web, avec l’objectif de proposer un outil ludique permettant de tester ses connaissances sur les pays, les capitales et les frontières du monde.
                      <br />
                      L’application génère des questions aléatoires, calcule un score et offre une interface simple et intuitive pour rendre l’expérience agréable et accessible.
                      Ce projet m’a permis de renforcer mes compétences en JavaScript, en logique applicative et en manipulation du DOM, tout en travaillant sur une approche pédagogique et interactive.
                      <br />
                      C’est un projet formateur qui illustre ma progression dans l’apprentissage du développement web et ma capacité à concevoir des applications dynamiques et fonctionnelles.
                    </p>
                   
                  </div>
        
                </section>

        
      </main>

    
  );
}