import styled from 'styled-components';

interface CartIconContainerProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const CartIconContainer = styled.div<CartIconContainerProps>`
  width: 60px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 6px;
  margin-inline: 10px;
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 12px;
`;
