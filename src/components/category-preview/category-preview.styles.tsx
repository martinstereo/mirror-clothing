import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

export const Title = styled(Link)`
  font-size: 40px;
  margin-bottom: 25px;
  cursor: pointer;
  display: block;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 800px) {
    font-size: 30px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 25px;
    margin-bottom: 15px;
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 30px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;
    row-gap: 25px;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 10px;
    row-gap: 20px;
  }
`;
