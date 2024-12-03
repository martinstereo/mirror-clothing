import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ReactComponent as MirrorLogo } from '../../assets/mirror.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <MirrorLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            <h3>SHOP</h3>
          </NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              <h3>SIGN OUT</h3>
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              <h3>SIGN IN</h3>
            </NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default NavigationBar;
