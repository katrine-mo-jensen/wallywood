import style from "../Footer/footer.module.scss";
import facebook from '../../assets/socialIcons/facebook.png'
import instagram from '../../assets/socialIcons/instagram.png'
import twitter from '../../assets/socialIcons/twitter.png'
import pinterest from '../../assets/socialIcons/pinterest.png'


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
          <img className={style.icons} src={pinterest} alt="Logo af Pinterest" />
          <img className={style.icons} src={instagram} alt="Logo af Instagram" />
          <img className={style.icons} src={facebook} alt="Logo af Facebook" />
          <img className={style.icons} src={twitter} alt="Logo af Twitter" />
        </section>
      </div>
    </footer>
  );
};
