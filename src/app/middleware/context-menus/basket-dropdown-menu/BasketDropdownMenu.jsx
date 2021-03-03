import React, { memo } from 'react';

import { Menu, Item, useContextMenu } from 'react-contexify';

import 'react-contexify/dist/ReactContexify.css';

import awesomeIcon from '../../../../statics/icon';

export default function BasketDropdownMenu() {
  function handleItemClick({}) {
    /* console.log("hey") */
  }

  return (
    <>
      <Menu id="basket-dropdown-menu" className="context-menu widget-basket-dropdown-menu">
        <Item onClick={handleItemClick}>
          <span>
            <awesomeIcon.faShoppingCart />
          </span>
          Genel Sepet
        </Item>
        <Item onClick={handleItemClick}>
          <span>
            <awesomeIcon.faShoppingCart />
          </span>
          Yüce Yazılım
        </Item>
        <Item onClick={handleItemClick}>
          <span>
            <awesomeIcon.faShoppingCart />
          </span>
          N11
        </Item>
        <Item onClick={handleItemClick}>
          <span>
            <awesomeIcon.faShoppingCart />
          </span>
          Aylık Sepet
        </Item>
      </Menu>
    </>
  );
}
