/* import { useEffect } from 'react';
import { getPopularMovies } from '../api/api';

function Home() {

  useEffect(() => {
    console.log("trying to fetch..."); 
    
    //just did a simple check to see if the data comes through
    getPopularMovies()
      .then(data => console.log("data from the api", data))
      .catch(err => console.error("error", err));
  }, []);
};

export default Home */

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPopularMovies } from '../api/api';
import MovieInfo from '../components/MovieInfo';

const HomeContainer = styled.div`
  width: 100vw;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then(data => setMovies(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <HomeContainer>
      
      <Grid>
        {movies.map((movie) => (
          <MovieInfo 
            key={movie.id} 
            id={movie.id}
            title={movie.title} 
            poster_path={movie.poster_path} 
            release_date={movie.release_date}
          />
        ))}
      </Grid>
    </HomeContainer>
  );
}

export default Home
