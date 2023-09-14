import seats from "../../assets/seats.jpg";
import style from "../home/Home.module.scss";
import { useFetch } from "../../components/fetching/Fetch";

export const HomePage = () => {
  const url = "http://localhost:4000/poster/list?limit=2";
  const { data } = useFetch(url);

  return (
    <section className={style.homeContainer}>
      <header>
        <img
          className={style.seats}
          src={seats}
          alt="Image of red cinema seats"
        />
      </header>

      <section className={style.theLatest}>
        <h3>Seneste nyt...</h3>
        <section className={style.displayLatest}>
          {data?.map((item, index) => {
            return (
              <section key={index}>
                <img src={item.image} alt={("Poster of", item.name)} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Genre: {item.genres[0].title}</p>
                  <button>Læs mere</button>
                </div>
              </section>
            );
          })}
        </section>
      </section>
    </section>
  );
};
