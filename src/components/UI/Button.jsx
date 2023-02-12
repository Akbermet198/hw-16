import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick}) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  background-color: #16c1c1;
  border-radius: 10px;
  color: white;
  padding: 7px 15px;
  margin: 10px  0px;
border: none;
cursor: pointer;
`;
