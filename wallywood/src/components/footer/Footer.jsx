import style from "../Footer/footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className={style.footerContainer}>
        <section className={style.infoBox}>
          <div className={style.address}>
            <h6>Wallywood</h6>
            <p>Øster Uttrupvej 1</p>
            <p>9000 Aalborg</p>
          </div>
          <div className={style.contactInfo}>
            <p>CVR: 12345678 </p>
            <p>MAIL: info@plakatshoppen.dk </p>
            <p>MOBIL: +45 9812 3456</p>
          </div>
        </section>
        <section className={style.socialMedia}>
          <img src="#" alt="Logo af Pinterest" />
          <img src="#" alt="Logo af Instagram" />
          <img src="#" alt="Logo af Facebook" />
          <img src="#" alt="Logo af Twitter" />
        </section>
      </div>
    </footer>
  );
};
