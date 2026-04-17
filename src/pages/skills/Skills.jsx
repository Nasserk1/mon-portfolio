import "./Skills.css";
import { Link } from 'react-router-dom';



export function Skills() {
  return (
    <main className="main-wrapper">
        <h1>Compétences développées</h1>
        <section id="projects" className="body">
        
                  {/* CARD 1 */}
                  <div className="card">
                    
                    <h2>Développement d'applications web</h2>
                    <p>Actuellement en reconversion vers le développement Full-Stack à l'Ada Tech School, je combine une solide expertise en gestion de projets complexes avec une maîtrise technique croissante de l'écosystème web. 
                        <br />
                        Passionné par la création de solutions numériques centrées sur l'utilisateur, je développe des applications robustes en JavaScript et React, tout en intégrant des bases de données MySQL via des API REST. 
                        <br /> <br />
                        Mon profil se distingue par une adoption précurseur des outils d'Intelligence Artificielle (Agents IA, LLM, N8N) et du Vibe Coding, me permettant d'optimiser les cycles de développement. 
                        <br /><br />Fort de mon expérience de manager et de consultant, j'aborde le code avec une vision stratégique, une rigueur méthodologique Agile et une capacité éprouvée à structurer des projets ambitieux, de la conception à la mise en ligne.</p>
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
                   
                     <a href={`${import.meta.env.BASE_URL}cv/CVDev.PNG`} target="_blank" rel="noopener noreferrer">
                      Voir mon CV orienté développement web
                      </a>

                  </div>
        
                  {/* CARD 2 */}
                  <div className="card">
                    
                    <h2>Formation professionnelle</h2>
                    <p>
                      Expert en ingénierie de formation et en pilotage de dispositifs complexes , je capitalise sur une solide expérience en direction de centres pour orchestrer la transformation digitale des organisations. 
                      <br />
                      Ma spécialisation actuelle en développement web et en IA à l'ADA Tech School et chez REVOLIA vise à positionner mon expertise au service des organismes de formation. 
                      <br /> <br />
                      Mon objectif est de les accompagner dans l'intégration de la digitalisation et de l'automatisation des processus administratifs et pédagogiques. En maîtrisant le Vibe Coding, les Agents IA et les LLM, je souhaite structurer des solutions innovantes pour la montée en compétences des équipes et l'optimisation des parcours d'apprentissage. 
                      <br /> <br />
                      Cette double compétence me permet d'offrir un appui technique et stratégique concret pour moderniser les pratiques pédagogiques au sein de l'ESS et de la formation professionnelle.
                    </p>
                    <p><strong>@- Ingénierie & Pilotage de formation :</strong> Analyse des besoins et conception de parcours multimodaux (présentiel, distanciel, e-learning).
                    <br />
                    <strong>@- Transformation Digitale :</strong> Accompagnement à l'intégration d'outils numériques et acculturation des équipes aux solutions digitales.
                    <br />
                    <strong>@- Automatisation & IA :</strong> Exploration et mise en œuvre d'automatisations (N8N) et d'Agents IA pour optimiser les tâches administratives et pédagogiques.
                    <br />
                    <strong>@- Maîtrise technologique :</strong> Développement d'interfaces web en JavaScript et React, et gestion de données via des API REST.
                    <br />
                    <strong>@- Gestion de la Qualité :</strong> Pilotage de la conformité réglementaire et maîtrise du référentiel QUALIOPI pour l'amélioration continue.
                    <br />
                    <strong>@- Management & Direction :</strong> Gestion administrative, financière et humaine d'établissements de formation (jusqu'à 35 ETP).
                    <br />
                    <strong>@- Conception de contenus IA :</strong>  Utilisation experte de LLM et d'outils génératifs (Claude, ChatGPT, Gamma) pour la création de supports pédagogiques.</p>
                    <a href={`${import.meta.env.BASE_URL}cv/CV-Formation 2026.pdf`} target="_blank" rel="noopener noreferrer">
                    Voir mon CV orienté formation
                    </a>
                      
                  </div>
                    
                  {/* CARD 3 */}
                  <div className="card">
                    
                    <h2>Economie Sociale et Solidaire (E.S.S.) - Gestion et management</h2>
                    <p>
                      Professionnel engagé de l’Économie Sociale et Solidaire, je dispose d'une expertise de plus de 20 ans dans la direction et le management de structures associatives et d'entreprises. 
                      Mon parcours est marqué par le pilotage de dispositifs complexes, allant de la gestion multisite de résidences sociales à la direction de centres de formation générant 1,2 M€ de chiffre d'affaires annuel. 
                      <br /><br />
                      Expert en ingénierie de projets et en développement de partenariats stratégiques, je maîtrise l'ensemble de la chaîne de valeur : gestion financière, management d’équipes pluridisciplinaires (jusqu’à 30 salariés) et réponses aux appels d'offres publics. 
                      Aujourd'hui, je complète cette vision stratégique par une activité d'auto-entrepreneur en conseil, où j'accompagne les organismes de formation et les associations dans leur modernisation et leur structuration. 
                      <br />
                      Mon objectif est de mettre cette double compétence de gestionnaire et de consultant au service de structures souhaitant allier performance économique, impact social et transition numérique.
                    </p>
                   <p>
                    <strong>@- Direction de structure & Pilotage :</strong> Gestion administrative, financière et économique d’établissements, incluant le suivi d'indicateurs et le reporting à la gouvernance.
                    <br />
                    <strong>@- Management d'équipes & RH :</strong> Recrutement, encadrement et montée en compétences de salariés et d'intervenants au sein de structures comptant jusqu'à 35 ETP.
                    <br />
                    <strong>@- Gestion multisite & Opérations :</strong> Pilotage d'activités sur plusieurs sites, notamment dans les secteurs de l'habitat social (résidences, pensions de famille) et de la formation.
                    <br />
                    <strong>@- Développement stratégique :</strong> Rédaction de réponses complexes aux appels d’offres et appels à projets pour sécuriser et diversifier les financements.
                    <br />
                    <strong>@- Expertise ESS :</strong> Coordination de dispositifs de formation spécialisés (Licence GOESS, OASIS Handicap) et animation de réseaux de partenaires locaux et institutionnels.
                    <br />
                    <strong>@- Ingénierie de projet :</strong> Conception et mise en œuvre de nouveaux pôles d'activité, de cellules de reclassement et de projets liés à la Politique de la Ville.
                    <br />
                    <strong>@- Conseil & Accompagnement (Auto-entreprise) :</strong> Appui technique et méthodologique auprès des organismes de formation et des associations depuis 2023.
                    <br />
                    <strong>@- Engagement associatif :</strong> Participation active à la gouvernance de structures (Mission Locale, GEMTIC, AOFM) en tant que membre du bureau.
                   </p>
                   <a href={`${import.meta.env.BASE_URL}cv/CV ESS - Direction.pdf`} target="_blank" rel="noopener noreferrer">
                    Voir mon CV orienté ESS et Direction
                    </a>
                  </div>
        
                </section>

        
      </main>

    
  );
}