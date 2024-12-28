import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 800px) {
    width: 90%; // Increase width on mobile
    margin: 20px auto 0; // Adjust margin for mobile
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 800px) {
    display: none; // Hide checkout headers on mobile
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 800px) {
    width: 100%; // Full width on mobile
    margin-bottom: 10px;

    &:last-child {
      width: 100%; // Ensure last block also takes full width
    }

    span {
      font-size: 14px; // Reduce span text size on mobile
    }
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 800px) {
    font-size: 24px; // Reduce font size on mobile
    margin-top: 20px; // Adjust margin for mobile
  }
`;
