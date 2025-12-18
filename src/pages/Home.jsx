import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPopularMovies } from '../api/api';
import MovieInfo from '../components/MovieInfo'; 

const HomeContainer = styled.div`
  width: 100%; 
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;    

  
  @media (min-width: 768px) {
    flex-direction: row;  
    flex-wrap: wrap;     
    justify-content: center; 
    align-items: flex-start; 
  }
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
        {movies.map((movie, index) => (
          <MovieInfo 
            key={movie.id} 
            id={movie.id}
            title={movie.title} 
            poster_path={movie.poster_path} 
            release_date={movie.release_date}
            index={index}
          />
        ))}
      </Grid>
    </HomeContainer>
  );
}

export default Home;