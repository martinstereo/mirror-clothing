import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as MirrorLogo } from '../../assets/mirror.svg';

export const StyledMirrorLogo = styled(MirrorLogo)`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 35px;
    height: 35px;
  }

  @media screen and (max-width: 500px) {
    width: 25px;
    height: 25px;
  }
`;

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;

  @media screen and (max-width: 800px) {
    height: 60px;
    //padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 15px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  @media screen and (max-width: 800px) {
    gap: 5px;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
  font-size: 25px;
  white-space: nowrap;

  @media screen and (max-width: 800px) {
    padding: 8px 12px;
    font-size: 14px;
  }

  @media screen and (max-width: 500px) {
    padding: 6px 10px;
    font-size: 15px;
  }
`;
