import styled from 'styled-components';

const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff; 
  margin: 0;
`;

const ReleaseText = styled.h3`
    color: #ffffff; 
`;

const TextWrapper = styled.div`
    margin-left: 1.5rem;
    margin-bottom: 2rem;
`;

function MovieTitle({ title, release_date }) {
  return (
    <TextWrapper>
        <Title>{title}</Title>
        <ReleaseText>{release_date}</ReleaseText>
    </TextWrapper>
  );
}

export default MovieTitle;