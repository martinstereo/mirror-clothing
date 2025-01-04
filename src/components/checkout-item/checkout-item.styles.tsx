import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextSpan = styled.span`
  width: 23%;
`;

export const Quantity = styled(TextSpan)`
  display: flex;
`;

interface ArrowContainerProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const ArrowContainer = styled.div<ArrowContainerProps>`
  cursor: pointer;
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
  width: 20px;
  text-align: center;
`;

interface RemoveButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const RemoveButton = styled.div<RemoveButtonProps>`
  padding-left: 12px;
  cursor: pointer;
`;
