import { Fragment } from 'react';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className="main-layout">{props.children}</main>
    </Fragment>
  );
};

export default Layout;
