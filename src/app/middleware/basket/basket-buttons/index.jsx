import React, { memo, useState } from 'react';
import { Row } from 'react-bootstrap';

import styled from 'styled-components';

import awesomeIcon from '../../../../statics/icon';

import { default as PopUpPage } from '../../../../components/PopUp';

import TabComponent from '../../../../components/TabComponent';

import AddBasket from '../addBasket';
import BasketTrain from '../basket-train';
import DailyBasket from '../partials/daily-basket';
import MonthlyBasket from '../partials/monthly-basket';
import OrderSummary from '../b2b-basket/order-summary';

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

const PopUpButtonLeft = styled.button`
  font-size: 7pt;
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

const PopUpButtonRight = styled.button`
  font-size: 7pt;
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

const TabLeft = styled.button`
  font-size: 7pt;
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
  font-size: 7pt;
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

const BasketButtons = memo(() => {
  const [typesLeft, setTypesLeft] = useState([
    {
      id: 1,
      name: 'GÜNLÜK SEPET',
      component: () => <DailyBasket />,
    },
    {
      id: 2,
      name: 'AYLIK SEPET',
      component: () => <MonthlyBasket />,
    },
 /*    {
      id: 3,
      name: 'EXCELDEN SİPARİŞ AKTAR',
      icon: (props) => <awesomeIcon.faExcel className={`${props.className} excel-icon`} />,
      style: {
        backgroundColor: '#FFF',
        border: '1px solid #3a8bb8',
        color: '#4caf50',
      },
    }, */
  ]);

  const types = [
    {
      id: 0,
      name: '',
      icon: '',
    },
    ...typesLeft,
  ];

  TabLeft.defaultProps = {
    theme: 'blue',
  };

  TabRight.defaultProps = {
    theme: 'green',
  };

  PopUpButtonLeft.defaultProps = {
    theme: 'popup',
  };

  PopUpButtonRight.defaultProps = {
    theme: 'green',
  };

  const [active, setActive] = useState(1);
  const [togglePopUp, setTogglePopUp] = useState({});
  const [tabAction, setTabAction] = useState([
    {
      action: types[1]['name'],
      id: types[1]['id'],
    },
  ]);

  const typePopUpLeft = [
    {
      id: 3,
      order: 1,
      name: '',
      icon: (props) => <awesomeIcon.faPlus className={props.className} />,
      popup: (close, typesLeft, setTypesLeft) => (
        <AddBasket close={close} typesLeft={typesLeft} setTypesLeft={setTypesLeft} />
      ),
    },
  ];

  const typePopUpRight = [
    {
      id: 6,
      order: 2,
      name: 'TEKLİF OLUŞTUR',
      popup: (close) => {
        return (
          <PopUpPage title="Teklif Oluştur" className="add-basket-popup-overlay" close={close}>
            <div className="make-offer-popup">
              <div className="make-offer-top-text">
                <p className="text-center">TEKLİF</p>
              </div>
              <div className="add-offer-top d-block text-center mt-3">
                <button className="green-plus">
                  <awesomeIcon.faPlus />
                </button>
                <button className="add-offer-button-new">YENİ TEKLİF OLUŞTUR</button>
                <button className="add-offer-button-old">ESKİ TEKLİFLERİM</button>
              </div>
              <div className="add-offer-bottom text-center mt-4">
                <button className="pick-file text-danger">
                  <awesomeIcon.faFilePdf /> PDF OLARAK İNDİR
                </button>
                <button className="pick-file text-success">
                  <awesomeIcon.faExcel /> EXCEL'İ MAİL OLARAK GÖNDER
                </button>
                <button className="pick-file text-warning">
                  <awesomeIcon.faEnvelope /> E-MAİL OLARAK GÖNDER
                </button>
              </div>
            </div>
          </PopUpPage>
        );
      },
    },
  ];

  return (
    <>
      <TabDiv className="row flex-nowrap tab-button-group">
        <ButtonGroupLeft className="col row">
          {typePopUpLeft.map((type) => (
            <PopUpButtonLeft
              key={type.id}
              active={togglePopUp.id === type.id}
              onClick={() => setTogglePopUp(type)}
              style={{ order: type.order }}
            >
              {type.icon && type.icon({ className: 'icon' })}
              {type.name}
            </PopUpButtonLeft>
          ))}

          {typesLeft.map((type) => (
            <TabLeft
              key={type.id}
              style={type.style}
              active={active === type.id}
              onClick={() => {
                setActive(type.id),
                  setTabAction([...tabAction, { action: type.name, id: type.id }]);
              }}
            >
              {type.icon && type.icon({ className: 'icon' })}
              {type.name}
            </TabLeft>
          ))}
        </ButtonGroupLeft>

        <ButtonGroupRight className="col-auto row">
          {typePopUpRight.map((type) => (
            <PopUpButtonRight
              key={type.id}
              active={togglePopUp.id === type.id}
              onClick={() => setTogglePopUp(type)}
              style={{ order: type.order }}
            >
              {type.icon && type.icon({ className: 'icon' })}
              {type.name}
            </PopUpButtonRight>
          ))}
        </ButtonGroupRight>
      </TabDiv>
      <p />
      <>{togglePopUp.popup && togglePopUp.popup(setTogglePopUp, typesLeft, setTypesLeft)}</>

      {/* <section className="data-table-section">
        <TabComponent component={types[active]} />
      </section> */}
      <div className="basket-page-wrapper">
        <div className="col-9 pl-0">
          <TabComponent component={types[active]} />
        </div>
        <div className="col-3 px-0">
          <OrderSummary />
        </div>
      </div>
      <BasketTrain />
    </>
  );
});

export default BasketButtons;
