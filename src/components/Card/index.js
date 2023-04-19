import React from 'react';
import './styles.css';

export default function Card({
  id,
  name,
  image_url,
  tagline,
  first_brewed,
  attenuation_level,
  ibu,
  abv,
}) {
  return (
    <article className="cardStyle">
      <div className="containerImage">
        <img className="image" alt="Beer" src={image_url} />
      </div>
      <div className="cardContainer">
        <h4>
          <b>ID: {id}</b>
        </h4>
        <p>
          <span>Name: {name}</span>
        </p>
        <p>Tag line: {tagline}</p>
        <p>Attenuation level: {attenuation_level}</p>
        <p>Ibu: {ibu}</p>
        <p>Abv: {abv}</p>
        <p>First brewed: {first_brewed}</p>
      </div>
    </article>
  );
}
