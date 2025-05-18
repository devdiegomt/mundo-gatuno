import classes from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className="footer">
      Desarrollado por
      <b>
        <a
          className={classes["footer__link"]}
          href="https://devdiegomt.vercel.app/"
        >
          Diego Mayorga
        </a>
      </b>
    </footer>
  );
};
