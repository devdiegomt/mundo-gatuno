import classes from "./AboutUs.module.css";
import instagramIcon from "../../assets/social/instagram.png";

export const AboutUsPage = () => {
  return (
    <section className={classes.aboutus}>
      <div className={classes.container}>
        <h1 className={classes.title}>Sobre Nosotros</h1>
        <p className={classes.text}>
          <strong>Mundo Gatuno</strong> es un proyecto dedicado a la
          distribución de arena para gatos en Zipaquirá, Colombia. Nuestro
          objetivo es ofrecer productos de calidad con precios justos, brindando
          a cada hogar una experiencia de compra confiable y accesible.
        </p>
        <p className={classes.text}>
          Conectamos con nuestra comunidad a través de redes sociales,
          compartiendo novedades, promociones y consejos para el bienestar de
          tus gatos.
        </p>
        <div className={classes.social}>
          <a
            href="https://www.instagram.com/mundogatunozipa/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialLink}
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className={classes.socialIcon}
            />
            <span>@mundogatunozipa</span>
          </a>
        </div>
      </div>
    </section>
  );
};
