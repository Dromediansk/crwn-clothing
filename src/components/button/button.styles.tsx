import styled from "styled-components";

import { SpinnerContainer } from "../spinner/spinner.styles";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Saira Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  &:disabled {
    opacity: 0.3;
    cursor: default;
    background-color: black;
    color: white;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
  &:disabled {
    opacity: 0.3;
    cursor: default;
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const FacebookSignInButton = styled(BaseButton)`
  background-color: #4267b2;
  color: white;
  &:hover {
    background-color: #647eb1;
    border: none;
  }
`;

export const DangerButton = styled(BaseButton)`
  background-color: #fdf2f2;
  color: red;
  border: 1px solid #ffcccc;
  &:hover {
    background-color: #ffc3c3;
    color: red;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
