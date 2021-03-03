import React from 'react';
import svg from '../../../statics/svg';
import { useContextMenu } from 'react-contexify';
import { Link } from 'gatsby';
import NavMenuDropdown from '../context-menus/navmenu-dropdown/NavMenuDropdown';

const NavMenu = ({ data }) => {

  const { show: showDropdownMenu } = useContextMenu({ id: 'navmenu-dropdown-menu' });

  function displayDropdownMenu(e) {
    showDropdownMenu(e, {
      position: {
        x: 617,
        y: 108,
      },
    });
  }

  const navIcon = (className) => {
    if (typeof className === 'string') {
      const svgClass = className.split(' ');
      const nav = svgClass[0];
      const icon = svgClass[1];

      if (svg[nav][icon]) return svg[nav][icon]({ className: 'svg-icon' });
    }
  };

  const el = (val, key) => {
    return (
      <li
        key={key}
        style={{ order: `${val.order}` }}
        className={val.isTabs ? `nav-item-${key} dropdown` : `nav-item-${key}`}
      >
        <Link to={`/${val.page}`} activeClassName="active">
     
          <span className="icon">{navIcon(val.className)}</span>
          <span className="title">{val.title}</span>
        </Link>
        {val.tabs && val.isTabs && (
          <ul className="drop">
            {val.tabs.map((tab_val, tab_key) => el(tab_val, `${key}-${tab_key}`))}
          </ul>
        )}
      </li>
    );
  };

  const el2 = (val, key) => {
    const getClassName = val.className;

    if (getClassName === 'nav hamburgerlistmenu') {
      return (
        <li key={key} style={{ order: `${val.order}` }} className="nav hamburgerlistmenu" onClick={displayDropdownMenu}>
          <Link to="/" >
            <span className="icon">{navIcon(val.className)}</span>
            <span className="title">{val.title}</span>
          </Link>
        </li>
      );
    }
  };

  return (
    <>
      <ul className="nav-list">
        {/* tab active page redirect
                <li>
                    <Link
                        to={"/search"}
                        state={{tabActive: 4}}
                    >
                        Oem
                    </Link>
                </li>
                */}
        {data.map((val, key) => el(val, key))}
        {data.map((val, key) => el2(val, key))}
      </ul>
      {/* <ul className="nav-list is-mobile-menu">{data.map((val, key) => el2(val, key))}</ul> */}
      <NavMenuDropdown />
    </>
  );
};

export default NavMenu;
