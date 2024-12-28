import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; // Changed from 440px to 100% for full width stacking

  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
  }
`;
export const Title = styled.h2`
  margin: 10px 0;

  @media screen and (max-width: 800px) {
    font-size: 24px;
    text-align: center;
  }
`;
