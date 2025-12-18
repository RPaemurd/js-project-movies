import styled from "styled-components";

const CardWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 20px;
  margin: 0;
  

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const ImageStyled = styled.img`
  max-width: 30vw;
  max-height: 70vh;
  border: 6px solid #fff; 

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: auto;
  }
`;

const HeadingStyled = styled.div`
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 3 1;
  grid-template-rows: 1 3;
  gap: 4px;
  align-items: flex-end;
  max-width: 50vw;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const GenreWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: #fff;

   @media (max-width: 768px) {
    display: none;
  }
`;

const TitleWrapper = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  color: #fff;
`;

const RatingWrapper = styled.span`
  padding: 2px 4px;
  margin: 0 4px;
  background-color: #fff;
  color: #000;
  max-width: fit-content;
   
`;

const TextWrapper = styled.p`
  color: #fff;

   @media (max-width: 768px) {
    display: none;
  }
`;

const DetailsWrapper = styled.p`
  margin: 0;
  padding: 4px 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: #fff;

`;

const MovieCardInside = ({ details }) => {
  /*  console.log(details); */

  const path =
    "https://media.themoviedb.org/t/p/w300_and_h450_face" + details.poster_path;

  const genres = details.genres.map((genre) => (
    <li key={genre.id}>{genre.name}</li>
  ));

  /* const y = genres.map((name) => <li>{name}</li>);*/

  console.log(path);
  return (
    <CardWrapper>
      <ImageStyled src={path}></ImageStyled>
      <InfoWrapper>
        <HeadingStyled>
          <TitleWrapper>
            <span>{details.title}</span>
            <RatingWrapper>⭐️ {details.vote_average}</RatingWrapper>
          </TitleWrapper>
        </HeadingStyled>
        <GenreWrapper>{genres}</GenreWrapper>
        <TextWrapper>
          <span style={{ margin: "0", padding: "4px 4px 4px 0" }}>
            <b>IMDB ID: </b>
          </span>
          {details.imdb_id}
        </TextWrapper>
        {/* <MovieTitle title={title} /> */}

        <DetailsWrapper>{details.overview}</DetailsWrapper>
        {/* <MovieInfo /> */}
      </InfoWrapper>
    </CardWrapper>
  );
};

export default MovieCardInside;
