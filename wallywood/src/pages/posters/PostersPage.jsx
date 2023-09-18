import { useState, useEffect } from "react";
import style from '../posters/PostersPage.module.scss';
import { Link, useParams } from 'react-router-dom'
import { OnClickButton } from "../../components/onClick/OnClickButton";

export const PosterPage = () => {
  const [poster, setPoster] = useState([]);
  const [genres, setGenres] = useState([]);
  const [slug, setSlug] = useState("drama");

  useEffect(() => {
    //Fetcher liste af plakater under en genre
    const url = `http://localhost:4000/poster/list/${slug}?limit=30`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPoster(data));
    //Fetcher genres
    const urlGenres = "http://localhost:4000/genre";
    fetch(urlGenres)
      .then((res) => res.json())
      .then((data) => setGenres(data));
  }, [slug]);

  console.log("Her er slug: ", slug);
  console.log("Her er posters: ", poster);
  console.log("Her er genres: ", genres);

  return (
    <>
      <section className={style.posterPage}>
        <div className={style.posterWrapper}>
        <h2>Plakater</h2>
        <section >
          <div className={style.filterContainer}>
            <h3>Filtre</h3>
            <h4>Genres:</h4>
            {genres && (
              <ul>
                {genres?.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        onClick={() => setSlug(item.slug)}
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
            <h4>Prisområde</h4>
            <div>
              <input type="number" placeholder="0" />
              <p> - </p>
              <input type="number" placeholder="3800" />
            </div>
          </div>
          <div className={style.PosterContainer}>
            {poster?.map((item, index) => {
              return (
                <section key={index}>
                  <img src={item.image} alt={item.name} />
                  <Link to={`/details/${item.slug}`}>{item.name}</Link>
                  <h5>{item.price} kr.</h5>
                  <OnClickButton>Læg i kurv</OnClickButton>
                </section>
              );
            })}
          </div>
        </section>
        </div>
      </section>
    </>
  );
};
