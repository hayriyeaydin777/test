import React from 'react';

import { Menu, Item, Separator } from 'react-contexify';

import 'react-contexify/dist/ReactContexify.css';

import { Link } from 'gatsby';

import svg from '../../../../statics/svg';

export default function SettingsMenu() {
  return (
    <>
      <Menu id="settings-dropdown-menu" className="context-menu widget-settings-dropdown-menu">
        <Item disabled>Ayarlar</Item>
        <Separator />
        <Item>
          <svg.salesperson className="img-fluid context-menu-icon" />
          <span>Hesabım</span>
        </Item>
        <Item>
          <svg.shoppingcart className="img-fluid context-menu-icon" />
          <span>Sepetim</span>
        </Item>
        <Item>
          <svg.settings className="img-fluid context-menu-icon" />
          <span>Ayarlar</span>
        </Item>
        <Item>
          <svg.maildown className="img-fluid context-menu-icon" />
          <span>Mesajlarım</span>
        </Item>
        <Separator />
        <Item>
          <svg.logout className="img-fluid context-menu-icon" />
          <span>Çıkış</span>
        </Item>
      </Menu>
    </>
  );
}
