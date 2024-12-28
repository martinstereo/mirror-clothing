import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    min-width: 140px;
    height: 45px;
    padding: 0 25px;
    font-size: 14px;
  }

  @media screen and (max-width: 500px) {
    min-width: 120px;
    height: 40px;
    padding: 0 20px;
    font-size: 12px;
  }

  &:hover {
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

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;

  @media screen and (max-width: 800px) {
    width: 25px;
    height: 25px;
  }

  @media screen and (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;
