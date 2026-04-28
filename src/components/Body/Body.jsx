import imageAdaopte from "../../assets/images/groupe-chats-chiens_87414-3270.jpg";
import imageDataviz from "../../assets/images/istockphoto-530007161-170667a.jpg";
import délicesDeMira from "../../assets/images/logo-délices de Mira.jpg";
import icons from "../../assets/icons/tableau-de-bord.gif";
import IntroCodeBlock from "../IntroCodeBlock/IntroCodeBlock";
import "./Body.css";

export function Body() {
  return (
    // 🔥 AJOUT : Nous enveloppons tout dans une div .body-wrapper
    // qui va gérer l'image de fond et la transparence via CSS
    <div className="body-wrapper">
      
      <main>
        <img id="emoji" src={icons} alt="image de présentation" />

        <IntroCodeBlock />
        <br />

        {/* Note: La classe 'body' sur #projects est peut-être superflue 
            si vous l'enveloppez déjà, mais je l'ai laissée. */}
        <section id="projects" className="body">

          {/* CARD 1 */}
          <div className="card">
            <img src={imageAdaopte} alt="projet adaopte" />
            <h2>Projet Adaopte</h2>
            <p>
              Ce projet a été réalisé dans le cadre de ma formation en
              développement web. Il s'agit d'une application de mise en relation
              entre les refuges pour animaux et les personnes souhaitant adopter
              un animal de compagnie. <br /><br />
              L'application permet aux refuges de publier des annonces pour les
              animaux disponibles à l'adoption, et aux utilisateurs de rechercher
              des animaux en fonction de différents critères (type d'animal, âge,
              taille, etc.). Les utilisateurs peuvent également contacter les
              refuges directement depuis l'application pour obtenir plus
              d'informations ou pour organiser une visite.
            </p>
            <a
              href="https://github.com/Nasserk1/adaopte"
              target="_blank" id="link-project-1"
              rel="noopener noreferrer"
            >
              Voir le projet
            </a>
          </div>

          {/* CARD 2 */}
          <div className="card">
            <img src={imageDataviz} alt="projet Dataviz" />
            <h2>Projet Dataviz</h2>
            <p>
              Ce projet a été réalisé dans le cadre de ma formation en
              développement web. Il s'agit d'une application de visualisation de
              données. <br /><br />
              L'application permet de représenter graphiquement des informations
              complexes pour faciliter leur compréhension.
            </p>
            <a
              href="https://github.com/Nasserk1/dataviz-project"
              target="_blank" id="link-project-2"
              rel="noopener noreferrer"
            >
              Voir le projet
            </a>
          </div>

          {/* CARD 3 */}
          <div className="card">
            <img src={imageDelicesdeMira} alt="site vitrine les délices de Mira" />
            <h2>Projet Ada Quiz Project</h2>
            <p>
              ADA Quiz Project est une application de quiz dédiée à la géographie.
              Elle a été développée dans le cadre de ma formation en développement web, avec l’objectif de proposer un outil ludique permettant de tester ses connaissances sur les pays, les capitales et les frontières du monde.
              <br />
              L’application génère des questions aléatoires, calcule un score et offre une interface simple et intuitive pour rendre l’expérience agréable et accessible.
              Ce projet m’a permis de renforcer mes compétences en JavaScript, en logique applicative et en manipulation du DOM, tout en travaillant sur une approche pédagogique et interactive.
              <br />
              C’est un projet formateur qui illustre ma progression dans l’apprentissage du développement web et ma capacité à concevoir des applications dynamiques et fonctionnelles.
            </p>
            <a
              href="src/assets/images/logo-délices de Mira.jpg"
              target="_blank" id="link-project-3"
              rel="noopener noreferrer"
            >
              Voir le projet
            </a>
          </div>

        </section>
      </main>

    </div> // 🔥 FIN du body-wrapper
  );
}