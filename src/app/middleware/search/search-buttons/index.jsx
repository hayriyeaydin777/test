import React, { memo, useLayoutEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import styled from 'styled-components';

import TabPage from '../../../../components/TabPage';
import { default as PopUpPage } from '../../../../components/PopUp';

import TabComponent from '../../../../components/TabComponent';

import awesomeIcon from '../../../../statics/icon';

import SearchResult from '../partials/search-result';
import KitContents from '../partials/kit-contents';
import OemResult from '../partials/oem-result';
import Vehicles from '../partials/vehicles';
import SameProduct from '../partials/same-product';
import Buyings from '../partials/buyings';
import MyFollowings from '../partials/my-followings';

const theme = {
  blue: {
    default: '#3a8bb8',
    hover: '#235e7c',
    active: '#235e7c',
  },
  green: {
    default: '#88e132',
    hover: '#75ba32',
    active: '#75ba32',
  },
  popup: {
    default: '#3a8bb8',
    hover: '#76b4d4',
    active: '#76b4d4',
  },
};

/* const PopUpButton = styled.button`
  font-size: 10px;
  padding: 10px 20px;
  margin: 0 5px 0 0;
  cursor: pointer;
  background: ${(props) => theme[props.theme].default};
  border-radius: 20px;
  white-space: nowrap;
  border: 0;
  outline: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.active &&
    `
	background: ${theme[props.theme].active};
	`}
`; */

const TabLeft = styled.button`
  font-size: 10px;
  padding: 10px 20px;
  margin: 0 5px 0 0;
  cursor: pointer;
  background: ${(props) => theme[props.theme].default};
  border-radius: 20px;
  white-space: nowrap;
  border: 0;
  outline: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.active &&
    `
	background: ${theme[props.theme].active};
	`}
`;

const TabRight = styled.button`
  font-size: 10px;
  padding: 10px 20px;
  margin: 0 0 0 5px;
  cursor: pointer;
  background: ${(props) => theme[props.theme].default};
  border-radius: 20px;
  white-space: nowrap;
  border: 0;
  outline: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.active &&
    `
	background: ${theme[props.theme].active};
  `}
`;

const ButtonGroupLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;
const ButtonGroupRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const TabDiv = styled.div`
  background: transparent;
  display: flex;
  position: relative;
  align-items: center;

  :after {
    content: '';
    display: block;
    background: #69abcb;
    height: 1px;
    z-index: 1;
    position: absolute;
    width: 100%;
  }
`;

const SearchButtons = memo(({ navigate }) => {
  const [tabActive, setTabActive] = useState(1);

  const typesLeft = [
    {
      id: 1,
      order: 0,
      name: 'ARAMA SONUÇLARI',
      component: () => <SearchResult />,
    },
    {
      id: 2,
      order: 2,
      name: 'EŞDEĞER ÜRÜNLER',
      component: () => <SameProduct />,
    },
    {
      id: 3,
      order: 3,
      name: 'KİT İÇERİĞİ',
      component: () => <KitContents />,
    },
    {
      id: 4,
      order: 4,
      name: 'OEM',
      component: () => <OemResult />,
    },
    {
      id: 5,
      order: 5,
      name: 'ARAÇLAR',
      component: () => <Vehicles />,
    },
    {
      id: 6,
      order: 6,
      name: 'ALDIKLARIM',
      component: () => <Buyings />,
    },
  ];

  const typesRight = [
    {
      id: 7,
      order: 7,
      name: 'TAKİP ETTİKLERİM',
      component: () => <MyFollowings />,
    },
  ];

  const types = [
    {
      id: 0,
      name: '',
      icon: '',
    },
    ...typesLeft,
    ...typesRight,
  ];

  TabLeft.defaultProps = {
    theme: 'blue',
  };
  TabRight.defaultProps = {
    theme: 'green',
  };

  /* const typePopUp = [
    {
      id: 8,
      order: 1,
      name: 'GEÇMİŞ',
      popup: (close) => {
        return (
          <PopUpPage title="Geçmiş" className="search-popup" close={close}>
            <div style={{ minWidth: '250px', minHeight: '100%' }}>
              <table style={{ fontSize: '9pt', margin: '0' }} className="table table-sm table-dark">
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Fren</td>
                    <td>Gösterilen: 480</td>
                    <td>
                      <button className="btn btn-link btn-table-past">Tekrarla</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Balata</td>
                    <td>Gösterilen: 640</td>
                    <td>
                      <button className="btn btn-link btn-table-past">Tekrarla</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </PopUpPage>
        );
      },
    },
  ];

  PopUpButton.defaultProps = {
    theme: 'popup',
  }; */

  const [active, setActive] = useState(tabActive);
 /*  const [togglePopUp, setTogglePopUp] = useState({}); */
  const [tabAction, setTabAction] = useState([
    {
      label: types[tabActive]['name'],
      id: types[tabActive]['id'],
    },
  ]);

  useLayoutEffect(() => {
    if (navigate.tabActive) setActive(navigate.tabActive);
    else setTabActive(1);
  });

  return (
    <>
      <TabDiv className="flex-nowrap tab-button-group">
        <ButtonGroupLeft className="col row">
         {/*  {typePopUp.map((type) => (
            <PopUpButton
              key={type.id}
              active={togglePopUp.id === type.id}
              onClick={() => setTogglePopUp(type)}
              style={{ order: type.order }}
            >
              {type.icon && type.icon({ className: 'icon' })}
              {type.name}
            </PopUpButton>
          ))} */}

          {typesLeft.map((type) => (
            <TabLeft
              key={type.id}
              active={active === type.id}
              onClick={() => {
                (navigate.tabActive = false),
                  setActive(type.id),
                  setTabAction([...tabAction, { label: type.name, id: type.id }]);
              }}
              style={{ order: type.order }}
            >
              {type.icon && type.icon({ className: 'icon' })}
              {type.name}
            </TabLeft>
          ))}
        </ButtonGroupLeft>

        <ButtonGroupRight className="col-auto row">
          {typesRight.map((type) => (
            <TabRight
              key={type.id}
              active={active === type.id}
              onClick={() => {
                (navigate.tabActive = false),
                  setActive(type.id),
                  setTabAction([...tabAction, { label: type.name, id: type.id }]);
              }}
              style={{ order: type.order }}
            >
              {type.icon && type.icon({ className: 'icon' })}
              {type.name}
            </TabRight>
          ))}
        </ButtonGroupRight>
      </TabDiv>
      {/* <>{togglePopUp.popup && togglePopUp.popup(setTogglePopUp)}</> */}

      <section className="data-table-section">
        {/*<TabPage component={types[active]} tabs={types} />*/}
        <TabComponent component={types[active]} />
      </section>
    </>
  );
});

export default SearchButtons;
