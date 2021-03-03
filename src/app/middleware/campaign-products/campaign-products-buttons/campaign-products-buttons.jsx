import React, { memo, useState } from 'react';

import styled from 'styled-components';

import TabComponent from '../../../../components/TabComponent';
import CampaignProductsSlider from '../campaign-products-slider';

const theme = {
  blue: {
    default: '#3a8bb8',
    hover: '#235e7c',
    active: '#235e7c',
  },
  grey: {
    default: '#A9A9A9',
    hover: '#75ba32',
    active: '#696969',
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

const ButtonGroupLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
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

const CampaignProductsButtons = memo(() => {
  const typesLeft = [
    {
      id: 1,
      name: 'KAMPANYALI ÜRÜNLER',
      component: () => <CampaignProductsSlider />,
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

  const [active, setActive] = useState(1);
  const [tabAction, setTabAction] = useState([
    {
      action: types[1]['name'],
      id: types[1]['id'],
    },
  ]);

  return (
    <>
      <TabDiv className="row flex-nowrap tab-button-group">
        <ButtonGroupLeft className="col row">
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
      <section className="data-table-section">
        <TabComponent component={types[active]} />
      </section>
    </>
  );
});

export default CampaignProductsButtons;
