import styled from "styled-components";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieDetails } from "../api/api";

import BackButton from "../components/BackButton";
import MovieCard from "../components/MovieCard";

const PageWrapper = styled.div`
  background-image: ${(props) => 
   props.$backdrop_path ? `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://media.themoviedb.org/t/p/original${props.$backdrop_path})`: 'none'};
  /* background-color: rgba(0, 0, 0, 0.7); */
  background-blend-mode: darken;
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
  background-repeat: no-repeat;

  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;


  @media (max-width: 768px) {
    justify-content: flex-end;
    padding: 0 25px;
    

  background-attachment: scroll;
  background-attachment: fixed;
  }
`;

const MovieDetail = () => {
  const params = useParams();
  console.log(params);

  const [movieData, setMovieData] = useState();

  useEffect(() => {
    const movieLoad = async () => {
      const response = await getMovieDetails(params.id);

      setMovieData(response);
    };
    movieLoad();
  }, [params.id]);

  return (
    <PageWrapper $backdrop_path={movieData?.backdrop_path}
    >
      <BackButton />
      {movieData ? <MovieCard details={movieData} /> : <p>Loading!!</p>}
    </PageWrapper>
  );
};

export default MovieDetail;
