import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as MirrorLogo } from '../../assets/mirror.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { UserContext } from '../../contexts/user.context';

import './navigation.styles.scss';

const NavigationBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <MirrorLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            <h3>SHOP</h3>
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              <h3>SIGN OUT</h3>
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              <h3>SIGN IN</h3>
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
