import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import PaginationComponent from '../../components/Pagination';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import api from '../../utils/api';
import auth from '../../utils/auth';
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

  function handleLogout() {
    auth.clearLocalStorage();
    window.location.reload();
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Garupa
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Sair
          </Button>
        </Toolbar>
      </AppBar>

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
    </>
  );
}
