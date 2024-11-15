import { Outlet } from "react-router-dom";
import { Fragment } from "react";

const NavigationBar = () => {
  return (
    <Fragment>
      <div>
        <h1>Navigation Bar</h1>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar