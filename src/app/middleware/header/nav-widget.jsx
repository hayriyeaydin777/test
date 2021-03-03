import React from 'react';
import { Link } from 'gatsby';

import awesomeIcon from '../../../statics/icon';

import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

import { useContextMenu } from 'react-contexify';

import BasketDropdownMenu from '../context-menus/basket-dropdown-menu/BasketDropdownMenu';
import SettingsMenu from '../context-menus/settings-menu/SettingsMenu';
import UserMenu from '../context-menus/user-dropdown-menu/UserMenu';

import svg from '../../../statics/svg';
import userPicture from '../../../statics/png/images/user-profile.png';
import AnnouncementPopUp from '../../../components/AnnouncementPopUp';

const NavWidget = ({ data }) => {
  const { show: showBasketMenu } = useContextMenu({ id: 'basket-dropdown-menu' });
  const { show: showSettingsMenu } = useContextMenu({ id: 'settings-dropdown-menu' });
  const { show: showUserMenu } = useContextMenu({ id: 'user-dropdown-menu' });

  function displayBasketMenu(e) {
    showBasketMenu(e);
  }
  function displaySettingsMenu(e) {
    showSettingsMenu(e);
  }
  function displayUserMenu(e) {
    showUserMenu(e);
  }

  const StyledBadge = withStyles((theme) => ({
    badge: {
      top: 5,
      right: 0,
    },
  }))(Badge);

  return (
    <>
      <div className="col-xl-3 col-lg-3 p-0 logo-widget-wrapper">
        <div className="col-xl-5 col-lg-6 p-0 logo-widget">
          <svg.logowidget className="img-fluid" />
        </div>
        <div className="headset-icon-wrapper">
          <svg.headset className="img-fluid svg-headset" />
        </div>
      </div>
      <div className="col-xl-4 col-lg-5 p-0 widget-icons-wrapper">
        <ul className="p-0 m-0">
          <li>
            <Link to="/points/">
              <svg.award className="img-fluid widget-svg-icon" />
              <span className="widget-span">10.000</span>
            </Link>
          </li>
          <hr />
          <li title="Döviz Kuru">
            <span className="d-block"> $ 8,48 </span>
            <span> € 7,38 </span>
          </li>
          <hr />
          <li>
            <StyledBadge badgeContent={4} color="error">
              <svg.circlecheck className="img-fluid widget-svg-icon" />
            </StyledBadge>
          </li>
          <li>
            <StyledBadge badgeContent={4} color="error">
              <svg.circleclose className="img-fluid widget-svg-icon" />
            </StyledBadge>
          </li>
          <li>
            <StyledBadge badgeContent={4} color="error">
              <AnnouncementPopUp />
            </StyledBadge>
          </li>
          <li>
            <StyledBadge badgeContent={4} color="error" onClick={displayBasketMenu}>
              <svg.shoppingcart className="img-fluid widget-svg-icon" />
            </StyledBadge>
          </li>
          <li onClick={displaySettingsMenu}>
            <svg.settings className="img-fluid widget-svg-icon" />
            <svg.arrowdown className="img-fluid" className="widget-svg-arrow-down" />
          </li>
          <hr />
        </ul>
      </div>
      <div className="col-xl-5 col-lg-4 p-0 widget-user-menu">
        <div className="col-xl-1 col-lg-2 p-0">
          <img className="img-fluid" src={userPicture} />
        </div>
        <div className="col-xl-7 col-lg-8 p-0">
          <ul>
            <li>FİRMA İSMİ</li>
            <li>
              <span>
                <svg.phone />
              </span>
              <span>0532 400 00 00</span>
            </li>
            <li>
              <span>
                <svg.envelope />
              </span>
              <span>yuceyazilim@yuceyazilim.com</span>
            </li>
          </ul>
        </div>
        <hr />
        <div className="col-xl-4 col-lg-2 p-0 text-center">
          <div onClick={displayUserMenu}>
            <svg.salesperson className="img-fluid widget-svg-icon" />
            <svg.arrowdown className="img-fluid" className="widget-svg-arrow-down" />
          </div>
        </div>
      </div>

      <SettingsMenu />
      <BasketDropdownMenu />
      <UserMenu />
    </>
  );
};

export default NavWidget;
