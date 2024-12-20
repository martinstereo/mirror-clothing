import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as MirrorLogo } from '../../assets/mirror.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';

const NavigationBar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutHandler = () => {
    dispatch(signOutStart());
  };

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
            <NavLink as='span' onClick={signOutHandler}>
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
