import styled from "styled-components";

/* const CardWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-end;
  padding: 50px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: #fff;
`;

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 3 1;
  grid-template-rows: 1 3;
  gap: 20px;
  align-items: flex-end;
`;

const MovieTitle = () => {
  return <></>;
}; */

const MovieCard = ({ details }) => {
  console.log(details);

  const path =
    "https://media.themoviedb.org/t/p/w300_and_h450_face" + details.poster_path;

  console.log(path);
  return (
    <>
      <img src={path}></img>
      <h1>{details.title}</h1>
      <h2>{details.vote_average}</h2>
      <p>{details.overview}</p>
    </>
  );
};

export default MovieCard;
