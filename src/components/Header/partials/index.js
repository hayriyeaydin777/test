import { Divider } from '@material-ui/core';
import * as React from 'react';
import { Navbar, Row } from 'react-bootstrap';

import Logo from './logo';
import Menu from './menu';
import Widget from './widget';

const Header = ({ children, className, navMenu, navWidget }) => {
  return (
    <>
      {navWidget.status && <Widget className={navWidget.className} element={navWidget.element} />}

      <div className={className}>
        {children}
        {navMenu.status && <Menu className={navMenu.className} element={navMenu.element} />}
      </div>
    </>
  );
};

export default Header;
