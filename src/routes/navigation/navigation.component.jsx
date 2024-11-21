import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';
import { UserContext } from '../../contexts/user.context';

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            <h3>Shop</h3>
          </Link>
          <Link className="nav-link" to="/auth">
            <h3>Sign in</h3>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
