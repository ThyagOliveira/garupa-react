import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import api from '../../utils/api';
import './styles.css';

export default function HomePage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    loadBeersRandom();
  }, []);

  const loadBeersRandom = async () => {
    const page = Math.floor(Math.random() * 25 + 1);
    const size = 20;

    const response = await api.loadBeerPage(page, size);
    setBeers(response.data);
  };

  return (
    <div className="homeContainer">
      {beers.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          image_url={item.image_url}
          tagline={item.tagline}
          first_brewed={item.first_brewed}
          attenuation_level={item.attenuation_level}
          ibu={item.ibu == null ? 0 : item.ibu}
          abv={item.abv == null ? 0 : item.abv}
        />
      ))}
    </div>
  );
}
