import classes from "./Contact.module.css";

export const ContactPage = () => {
  return (
    <section className={classes.contact}>
      <div className={classes.container}>
        <h1 className={classes.title}>Contáctanos</h1>
        <p className={classes.text}>
          ¿Tienes preguntas, quieres hacer un pedido o deseas más información sobre nuestros productos?
          Estamos aquí para ayudarte.
        </p>

        <div className={classes.info}>
          <p>
            <strong>📍 Ubicación:</strong> Zipaquirá, Cundinamarca, Colombia
          </p>
          <p>
            <strong>📞 Teléfono / WhatsApp:</strong>{" "}
            <a href="https://wa.me/573209097278" target="_blank" rel="noopener noreferrer">
              +57 320 909 7278
            </a>
          </p>
          <p>
            <strong>🕒 Horario de atención:</strong> Lunes a sábado, 8:00 a.m. - 6:00 p.m.
          </p>
        </div>

        <p className={classes.cta}>
          No dudes en escribirnos, ¡nos encanta ayudarte a cuidar de tu gato!
        </p>
      </div>
    </section>
  );
};
