// src/components/MovieCard.jsx
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MovieTitle from './MovieTitle';

const CardContainer = styled.div`
  display: flex;
  width: calc(20%);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const PosterImage = styled.img`
  width: 100%;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); 
  opacity: 0; 
  transition: opacity 0.3s ease-in-out; 
  
  display: flex;
  align-items: flex-end;
`;

const ImageContainer = styled.div`
  position: relative; 
  width: 100%;
  
  /* When you  hoover over ImageContainer, change the overlay inside it */
  &:hover ${Overlay} {
    opacity: 1;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  display: flex; 
`;

function MovieCard({ id, title, poster_path, release_date}) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <CardContainer>
        <StyledLink to={`/movie/${id}`}>
        <ImageContainer>
            <PosterImage src={imageUrl} alt={title} />
            <Overlay>
                 <MovieTitle title={title} release_date={release_date}/>
           </Overlay>
        </ImageContainer>
        </StyledLink>
    </CardContainer>
  )
}

export default MovieCard;