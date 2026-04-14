import "./Contact.css";

export function Contact() {
  return (
    <div id="contact-wrapper">
      <div id="card-container">
        <form 
          id="contact-container" 
          action="https://formspree.io/f/mojyvvrj" 
          method="POST"
        >
          <h1>Formulaire de contact :</h1>
          <h2>Je reste à votre écoute afin d'échanger au sujet de mon profil et de mes réalisations.</h2>

          <input type="text" name="nom" placeholder="Votre nom" required />
          <input type="text" name="prenom" placeholder="Votre prénom" required />
          <input type="email" name="email" placeholder="Votre adresse e-mail" required />
          <textarea name="message" placeholder="Votre message" required></textarea>

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}
