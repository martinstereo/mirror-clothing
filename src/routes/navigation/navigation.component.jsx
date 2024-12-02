import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import { ReactComponent as MirrorLogo } from '../../assets/mirror.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import './navigation.styles.scss';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <MirrorLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            <h3>SHOP</h3>
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              <h3>SIGN OUT</h3>
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              <h3>SIGN IN</h3>
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
