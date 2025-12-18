import styled from "styled-components";

import ButtonIcon from "../assets/Buttonicon.svg";

const ButtonStyled = styled.a`
  margin: 12px 0 0 24px;
  display: inline-flex;
  color: #fff;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  cursor: pointer;

  &:hover {
    font-size: 18px;
    gap: 8px;
    transform: scale(1.5);
  }
`;

const ButtonText = styled.p`
  color: #fff;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  cursor: pointer;
`;

const BackButton = () => {
  return (
    <ButtonStyled
      href="/"
      type="link"
      name="return to main"
      className="backLink"
    >
      <img src={ButtonIcon} alt="icon arrow back" aria-hidden="true" />
      <ButtonText>Movies</ButtonText>
    </ButtonStyled>
  );
};

export default BackButton;
