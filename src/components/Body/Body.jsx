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
              href="https://dataviz-project-vert.vercel.app/"
              target="_blank" id="link-project-2"
              rel="noopener noreferrer"
            >
              Voir le projet
            </a>
          </div>

          {/* CARD 3 */}
          <div className="card">
            <img src={délicesDeMira} alt="site vitrine les délices de Mira" />
            <h2>Projet Les Délices de Mira</h2>
            <p>
              Les Délices de Mira est un site vitrine e‑commerce dédié à la pâtisserie orientale artisanale. Réalisé dans un cadre personnel, le projet met en avant un univers chaleureux et authentique, inspiré des traditions culinaires maghrébines.
              L’objectif était de créer une expérience simple, élégante et immersive permettant aux visiteurs de découvrir les créations, comprendre le savoir‑faire, et commander facilement des pâtisseries faites maison.
                 <br />
              Le site présente une sélection de spécialités (makrouts, cornes de gazelles, dziriettes, sablés algériens, etc.), des informations sur la livraison locale autour de Vienne / Saint‑Romain‑en‑Gal, ainsi qu’un formulaire de contact pour les commandes personnalisées.
              L’ensemble vise à refléter la fraîcheur, la qualité et la passion qui caractérisent l’artisanat culinaire de Mira 
                <br /> <br />
              Stack technique :
                <br />
              Webador (CMS no‑code)
              Utilisé pour la création du site, la gestion du contenu, la mise en page et l’hébergement.
                <br />
              HTML / CSS personnalisés  
              Ajustements visuels pour harmoniser la charte graphique et optimiser la présentation des produits.
                <br />
              Formulaire intégré Webador  
              Pour la gestion des messages et demandes clients.
                <br />
              Optimisation SEO de base  
              Titres, descriptions, structure des pages et performance générale.
            </p>
            <a
              href="https://www.lesdelicesdemira.fr/"
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