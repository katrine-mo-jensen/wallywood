import style from "../Footer/footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <section>
        <div>
          <h6>Wallywood</h6>
          <p>Øster Uttrupvej 1</p>
          <p>9000 Aalborg</p>
        </div>
        <div>
          <p>CVR: 12345678 </p>
          <p>MAIL: info@plakatshoppen.dk </p>
          <p>MOBIL: +45 9812 3456</p>
        </div>
      </section>
      <section>
        <FontAwesomeIcon icon="fa-brands fa-square-pinterest" />
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-square-twitter" />
      </section>
    </footer>
  );
};
