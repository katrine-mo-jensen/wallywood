import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import style from "../posters/PosterDetails.module.scss";
import { OnClickButton } from "../../components/onClick/OnClickButton";
import { useFetch } from "../../components/fetching/Fetch";

export function PosterDetails() {
  const { slug } = useParams();

  const url = `http://localhost:4000/poster/details/${slug}`;
  const { data } = useFetch(url);

  let description = data.description;

  return (
    <>
      <section className={style.details}>
        {data && (
          <figure>
            <img src={data.image} alt={data.name} />
            <article>
              <h3>{data.name}</h3>
              {data.genres?.map((item, index) => {
                return <p key={index}>{item.title}</p>;
              })}
              <p>
                Beskrivelse: {description ? description : "Kommer snart..."}
              </p>
              <p>
                Størrelse: {data.width} x {data.height}
              </p>
              <p>Pris: {data.price}</p>
              <p>Lager: {data.stock}</p>
            </article>
          </figure>
        )}
        <div>
          <OnClickButton>
            <Link to="/plakater">Tilbage</Link>
          </OnClickButton>
        </div>
      </section>
    </>
  );
}
