import React from 'react';

import { Menu, Item } from 'react-contexify';

import { Link } from 'gatsby';

export default function NavMenuDropdown() {
  function handleItemClick({}) {}

  return (
    <>
      <Menu id="navmenu-dropdown-menu" className="navmenu-dropdown-menu">
        <Item onClick={handleItemClick}>
          <Link to="/catelog/">Online Öde </Link>
        </Item>
        <Item onClick={handleItemClick}>
          <Link to="/catelog/">Katalog </Link>
        </Item>
        <Item onClick={handleItemClick}>
          <Link to="/report/">Rapor </Link>
        </Item>

        <Item onClick={handleItemClick}>
          <Link to="/others/">İletişim</Link>
        </Item>

        <Item onClick={handleItemClick}>
          <Link to="/salesperson/">Plasiyer </Link>
        </Item>

        <Item onClick={handleItemClick}>
          <Link to="/new-products/">Yeni Ürünler </Link>
        </Item>

        <Item onClick={handleItemClick}>
          <Link to="/campaign-products/">Kampanyalı Ürünler </Link>
        </Item>
      </Menu>
    </>
  );
}
