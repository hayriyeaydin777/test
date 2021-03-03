import React, { memo, useState } from 'react';

import styled from 'styled-components';
import Catalog from '../index';

import awesomeIcon from '../../../../statics/icon';

import svg from '../../../../statics/svg';

import { Row } from 'react-bootstrap';

const theme = {
  blue: {
    default: '#3a8bb8',
    hover: '#235e7c',
    active: '#235e7c',
  },
  white: {
    default: '#fff',
    hover: '#75ba32',
  },
};

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

const TabBottom = styled.button`
  font-size: 7pt;
  padding: 10px 20px;
  margin: 0 5px 5px 0;
  cursor: pointer;
  background: ${(props) => theme[props.theme].default};
  border-radius: 20px;
  white-space: nowrap;
  border: 1px solid #3a8bb8;
  outline: 0;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.active &&
    `
    background: ${theme[props.theme].active};
`}
`;

const ButtonGroupLeft = styled.div``;

const TabDiv = styled.div`
  background: transparent;
`;

const CatalogButtons = memo(() => {
  const typesLeft = [
    {
      id: 1,
      name: 'MARKA SEÇ',
      icon: (props) => (
        <awesomeIcon.faChevronDown className={`${props.className} float-right catalog-icon ml-2`} />
      ),
    },
  ];

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

  TabBottom.defaultProps = {
    theme: 'white',
  };

  const [active, setActive] = useState(1);
  const [tabAction, setTabAction] = useState([
    {
      action: types[1]['name'],
      id: types[1]['id'],
    },
  ]);

  return (
    <>
      <TabDiv className="row d-block tab-button-group">
        <ButtonGroupLeft className="d-block">
          {typesLeft.map((type) => (
            <TabLeft
              key={type.id}
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
      </TabDiv>

      <Row>
        <Catalog className="catalog" />
      </Row>
    </>
  );
});

export default CatalogButtons;
