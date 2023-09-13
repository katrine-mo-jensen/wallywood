import style from "../about/AboutPage.module.scss";
import star from "../../assets/star.png";

export const AboutPage = () => {
  return (
    <section className={style.aboutUsContainer}>
      <article className={style.aboutUs}>
        <h2>Om os</h2>
        <div>
          <article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              scelerisque ac ipsum sed faucibus. Vivamus mollis sagittis
              hendrerit. Donec turpis erat, vestibulum non turpis sed, finibus
              congue velit. Pellentesque sagittis est eget nisi malesuada, a
              aliquet est imperdiet. Aenean dapibus finibus laoreet.
              Pellentesque suscipit hendrerit enim, non tempor erat sodales
              quis. Nullam sed enim eu elit posuere commodo at în nisl. Aliquam
              egestas turpis vel odio consectetur auctor. Cras porttitor orci
              non scelerisque porttitor. Phasellus dictum ligula rutrum neque
              pharetra, faucibus molestie libero ultricies. Aenean risus risus,
              sollicitudin at rutrum vel, venenatis ac urna. Phasellus a
              pulvinar massa.
            </p>
            <p>
              Phasellus faucibus libero eu malesuada tristique. Donec tristique
              lacus in ipsum sollicitudin viverra. Sed porttitor sit amet felis
              accumsan egestas. Fusce quis commodo urna, non feugiat odio. Nam
              in tempus magna. Quisque eu neque sed lacus egestas pulvinar eget
              in lacus. Quisque sit amet sem efficitur sapien bibendum mollis.
              Quisque in eros sit amet justo scelerisque rutrum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              scelerisque ac ipsum sed faucibus. Vivamus mollis sagittis
              hendrerit. Donec turpis erat, vestibulum non turpis sed, finibus
              congue velit. Pellentesque sagittis est eget nisi malesuada, a
              aliquet est imperdiet. Aenean dapibus finibus laoreet.
              Pellentesque suscipit hendrerit enim, non tempor erat sodales
              quis. Nullam sed enim eu elit posuere commodo at în nisl.
            </p>
          </article>
          <img className={style.star} src={star} alt="A signing star sign" />
        </div>
      </article>
    </section>
  );
};
