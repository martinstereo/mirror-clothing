import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  padding: 0 20px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;
    row-gap: 30px;
    padding: 0 15px;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 10px;
    row-gap: 20px;
    padding: 0 10px;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 25px;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 32px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;
