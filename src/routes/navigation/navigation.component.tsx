import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  StyledMirrorLogo,
} from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <StyledMirrorLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ?
            <NavLink to='' as='span' onClick={signOutUser} style={{ cursor: 'pointer' }}>
              SIGN OUT
            </NavLink>
          : <NavLink to='/auth'>SIGN IN</NavLink>}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
