import styled from 'styled-components';
import { ReactComponent as ShoppingIconSvg } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 60px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 6px;
  margin-inline: 10px;
`;

export const ShoppingIcon = styled(ShoppingIconSvg)`
  width: 30px;
  height: 30px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 12px;
`;
