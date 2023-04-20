import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import PaginationComponent from '../../components/Pagination';
import api from '../../utils/api';
import './styles.css';

export default function HomePage() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadBeersRandom();
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadBeersRandom = async () => {
    const response = await api.loadBeerPage(page);
    setBeers(response.data);
  };

  const handleGetPage = (event, page) => {
    setPage(page);
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
      <PaginationComponent
        spacing={2}
        count={10}
        color={'secondary'}
        shape={'rounded'}
        variant={'outlined'}
        onChange={handleGetPage}
      />
    </div>
  );
}
