import seats from "../../assets/seats.jpg"
import style from "../home/Home.module.scss"


export const HomePage = () => {

  return (
    <section className={style.homeContainer}>
    <header>
      <img className={style.seats} src={seats} alt="Image of red cinema seats" />
    </header>
    <section>
      <h3>Seneste nyt...</h3>
      <article>

      </article>
    </section>
    </section>
  );
};