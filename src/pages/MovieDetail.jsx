import styled from "styled-components";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieDetails } from "../api/api";

import BackButton from "../components/BackButton";
import MovieCard from "../components/MovieCard";

const PageWrapper = styled.div`
  background-image: url(${(props) =>
    "https://media.themoviedb.org/t/p/w300_and_h450_face" +
    props.$poster_path});
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: darken;
  background-size: contain;
  background-size: cover;
  box-sizing: border-box;
  padding: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  min-height: 100vh;

  @media (max-width: 768px) {
    justify-content: flex-end;
    background-size: cover;
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
    <PageWrapper $poster_path={movieData?.poster_path}>
      <BackButton />
      {movieData ? <MovieCard details={movieData} /> : <p>Loading!!</p>}
    </PageWrapper>
  );
};

export default MovieDetail;
