// src/components/MovieCard.jsx
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import MovieTitle from './MovieTitle';

//slide in animation
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px); 
  }
  to {
    opacity: 1;
    transform: translateY(0); 
  }
`;

const CardContainer = styled.div`
  display: flex;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  width: 100%;

  /* --- ANIMATION --- */
  opacity: 0; 
  
  /* We used 'index' prop to calculate the delay */
  animation: ${slideIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.index ? props.index * 0.1 : 0}s;
  
  @media (min-width: 1024px) {
    width: calc(20%); 
    margin-bottom: 0;
  }

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
  
  /* When you hover over ImageContainer, change the overlay inside it */
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

function MovieCard({ id, title, poster_path, release_date, index }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <CardContainer index={index}>
        <StyledLink to={`/movie/${id}`}>
          <div style= {{position: 'relative', width: '100%'}}>
            <ImageContainer>
              <PosterImage src={imageUrl} alt={title} />
                <Overlay>
                 <MovieTitle title={title} release_date={release_date}/>
                </Overlay>
            </ImageContainer>
          </div>
        </StyledLink>
    </CardContainer>
  )
}

export default MovieCard;