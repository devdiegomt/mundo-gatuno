import classes from "./AboutUs.module.css";
import instagramIcon from "../../assets/social/instagram.png";

export const AboutUsPage = () => {
  return (
    <section className={classes.aboutus}>
      <h1 className={classes["aboutus__title"]}>Sobre Nosotros</h1>
      <p className={classes["aboutus__text"]}>
        Mundo Gatuno es un proyecto de distribución de arena de gatos en
        Zipaquirá, Colombia. Nuestra misión es brindar una experiencia de compra
        y venta de arena de gatos de calidad y con un precio justo.
      </p>
      <p className={classes["aboutus__text"]}>
        Síguenos en nuestras redes sociales para estar al tanto de nuestras
        promociones y novedades.
      </p>
      <div className={classes["aboutus__social"]}>
        <a
          href="https://www.instagram.com/mundogatunozipa/"
          target="_blank"
          rel="noopener"
          className={classes["aboutus__social--link"]}
        >
          <img src={instagramIcon} alt="Instagram" className={classes.social} />
          MundoGatuno
        </a>
      </div>
    </section>
  );
};
