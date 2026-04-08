import imageAdaopte from "../../assets/images/groupe-chats-chiens_87414-3270.jpg";
import imageDataviz from "../../assets/images/istockphoto-530007161-170667a.jpg";
import icons from "../../assets/icons/tableau-de-bord.gif";
import IntroCodeBlock from "../IntroCodeBlock/IntroCodeBlock";
import './Body.css';

export function Body() {
  return (
    <main>
    <img id="emoji" src={icons} alt="image de présentation"/>
    <IntroCodeBlock /> 
    <br />
    <section id="projects" className="body">
    
    <div id="card1">
      <img id="img1" src={imageAdaopte} alt="projet adaopte"/>
      <h2>Projet Adaopte</h2>
      <p>Ce projet a été réalisé dans le cadre de ma formation en développement web. Il s'agit d'une application de mise en relation entre les refuges pour animaux et les personnes souhaitant adopter un animal de compagnie. <br></br> <br />L'application permet aux refuges de publier des annonces pour les animaux disponibles à l'adoption, et aux utilisateurs de rechercher des animaux en fonction de différents critères (type d'animal, âge, taille, etc.). Les utilisateurs peuvent également contacter les refuges directement depuis l'application pour obtenir plus d'informations ou pour organiser une visite.</p>  
      <a
        href="https://github.com/Nasserk1/adaopte"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir le projet
      </a>
    </div>
     <div id="card2">
      <img id="img2" src={imageDataviz} alt="projet Dataviz"/>
      <h2>Projet Dataviz</h2>
      <p>Ce projet a été réalisé dans le cadre de ma formation en développement web. Il s'agit d'une application de visualisation de données. <br /> <br /> L'application permet de représenter graphiquement des informations complexes pour faciliter leur compréhension.</p>  
      <a
        href="https://github.com/Nasserk1/dataviz-project"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir le projet
      </a>
    </div>

    
    </section>
  </main>
  )
}