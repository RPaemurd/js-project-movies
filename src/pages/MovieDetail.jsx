import styled from "styled-components";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieDetails } from "../api/api";

import BackButton from "../components/BackButton";
import MovieCard from "../components/MovieCard";

/* const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 124px;
  background-color: red;
  padding: 16px auto 42px;
`; */

/* const MovieDetail = () => {
  const [caca, setCaca] = useState({});

  useEffect(() => {
    async function stupid() {
      const data = await getMovieDetails("1218925");

      setCaca(data);
    }
    stupid();
  }, []);

  return (
    <PageWrapper>
      <BackButton />
      <h1>El motosierro is as good as {caca.vote_average}</h1>
      <pre>Hello, this is {JSON.stringify(caca, null, 2)}</pre>
    </PageWrapper>
  );
};

export default MovieDetail; */

const PageWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 42px auto 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  min-height: 100vh;
  width: 100vw;
`;

const MovieDetail = () => {
  const params = useParams();
  console.log(params);

  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    const movieLoad = async () => {
      const response = await getMovieDetails(params.id);

      setMovieData(response);
    };
    movieLoad();
  }, [params.id]);

  return (
    <PageWrapper>
      <BackButton />
      <MovieCard details={movieData} />
    </PageWrapper>
  );
};

export default MovieDetail;
