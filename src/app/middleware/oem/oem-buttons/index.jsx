import React, { memo, useState } from 'react';

import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';

import Input from '@material-ui/core/Input';

import Button from 'react-bootstrap/Button';

import { Row } from 'react-bootstrap';

import TabComponent from '../../../../components/TabComponent';
import OemTab from '../partials/oem-tab';

const theme = {
  blue: {
    default: '#3a8bb8',
    hover: '#235e7c',
    active: '#235e7c',
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
    z-index: -1;
    position: absolute;
    width: 100%;
  }
`;

const OemButtons = memo(() => {
  const typesLeft = [
    {
      id: 1,
      name: 'OEM',
      component: () => <OemTab />,
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
      action: types[1].name,
      id: types[1].id,
    },
  ]);
  const [textBox, setTextBox] = useState({
    search: '',
  });

  const textBoxHandles = (event) =>
    setTextBox({ ...textBox, [event.target.name]: event.target.value });

  (e) => this.setState({ input: e.target.value });
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
          <div className="d-flex col-auto search-button-div">
            <Input
              placeholder="Buraya Yazınız..!"
              className="oem-search-input"
              name="search"
              size="small"
              onChange={(event) => {
                setTextBox(event.target.value);
              }}
              disableUnderline
              value={textBox.search}
            />

            <Button className="btn oem-search-btn">Ara</Button>
          </div>
        </ButtonGroupLeft>
      </TabDiv>
      <section className="data-table-section">
        <TabComponent component={types[active]} />
      </section>
    </>
  );
});

export default OemButtons;
