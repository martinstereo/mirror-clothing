import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  gap: 200px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    margin: 20px auto;
    row-gap: 20px;
  }
`;
