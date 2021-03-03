import React, { memo, useState } from 'react';

import styled from 'styled-components';

import awesomeIcon from '../../../../statics/icon';

import TabComponent from '../../../../components/TabComponent';
import BrandNetSaleTurnover from '../partials/brand-net-sale-by-turnover';
import BrandNetSaleOne from '../partials/brand-net-sale-by-one';
import AdvantagePurchase from '../partials/advantage-purchase';
import FinancialReview from '../partials/financial-review';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import clientsdata from '../../search/services/clientsdata';

const theme = {
  blue: {
    default: '#3a8bb8',
    hover: '#235e7c',
    active: '#235e7c',
  },
  white: {
    default: '#ffff',
    hover: '#75ba32',
  },
  grey: {
    default: '#A9A9A9',
    hover: '#75ba32',
    active: '#696969',
  },
  green: {
    default: '#88e132',
    hover: '#75ba32',
    active: '#75ba32',
  },
};

const TabLeft = styled.button`
  font-size: 7pt;
  padding: 10px 35px;
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
  color: white;
  padding: 10px 20px;
  margin: 0 0 0 5px;
  cursor: pointer;
  background: ${(props) => theme[props.theme].default};
  border-radius: 20px;
  white-space: nowrap;
  border: 1px solid #3a8bb8;
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

const TabMiddle = styled.button`
  font-size: 7pt;
  color: white;
  padding: 10px 20px;
  margin: 0 0 0 5px;
  cursor: pointer;
  background: ${(props) => theme[props.theme].default};
  border-radius: 20px;
  white-space: nowrap;
  border: none;
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
  color: white;
  padding: 10px 20px;
  margin: 0 0 0 5px;
  cursor: pointer;
  background: ${(props) => theme[props.theme].default};
  border-radius: 20px;
  white-space: nowrap;
  border: none;
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

const ButtonGroupMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const ButtonGroupBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const TabDiv = styled.div`
  background: transparent;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 15px;

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
const TabDivMiddle = styled.div`
  background: transparent;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 15px;
`;

const TabDivBottom = styled.div`
  background: transparent;
  display: flex;
  position: relative;
  align-items: center;
`;

const ReportButtons = memo(() => {
  const typesLeft = [
    {
      id: 1,
      name: 'RAPOR',
    },
  ];

  const typesRight = [
    {
      id: 2,
      name: 'E-MAIL OLARAK GÖNDER',
      icon: (props) => <awesomeIcon.faEnvelope className={props.className} />,
      style: {
        color: '#f0ad4e',
      },
    },
    {
      id: 3,
      name: 'PDF OLARAK İNDİR',
      icon: (props) => <awesomeIcon.faFilePdf className={props.className} />,
      style: {
        color: '#d9534f',
      },
    },
    {
      id: 4,
      name: "EXCEL'İ MAİL OLARAK GÖNDER",
      icon: (props) => <awesomeIcon.faExcel className={props.className} />,
      style: {
        color: '#4caf50',
      },
    },
  ];

  /*  const typesMiddle = [
        {
            id: 5,
            name: "ABDULLAH DEMİRCAL POWER OTOMOTİV"
        },
    ]; */

  const typesBottom = [
    {
      id: 5,
      name: 'MARKA NET SATIŞ RAPORU - CİROSAL',
      component: () => <BrandNetSaleTurnover />,
    },
    {
      id: 6,
      name: 'MARKA NET SATIŞ RAPORU - ADETSEL',
      component: () => <BrandNetSaleOne />,
    },
    {
      id: 7,
      name: 'AVANTAJLI TAKSİT ÇEKİM TABLOSU',
      component: () => <AdvantagePurchase />,
    },
    {
      id: 8,
      name: 'FİNANSAL ÖZET RAPORU',
      component: () => <FinancialReview />,
    },
    {
      id: 9,
      name: '',
      icon: (props) => <awesomeIcon.faPlus className={props.className} />,
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
    /*     ...typesMiddle, */
    ...typesBottom,
  ];

  TabLeft.defaultProps = {
    theme: 'blue',
  };
  TabRight.defaultProps = {
    theme: 'white',
  };
  /*  TabMiddle.defaultProps = {
        theme: "grey",
    }; */
  TabBottom.defaultProps = {
    theme: 'green',
  };

  const [active, setActive] = useState(1);
  const [tabAction, setTabAction] = useState([
    {
      action: types[1]['name'],
      id: types[1]['id'],
    },
  ]);

  const [clients, setClients] = useState('');
  const handleClients = (event) => setClients(event.target.innerText);

  const options_clients = clientsdata.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <>
      <TabDiv className="row flex-nowrap tab-button-group">
        <ButtonGroupLeft className="col row">
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
          {typesRight.map((type) => (
            <TabRight
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
            </TabRight>
          ))}
        </ButtonGroupRight>
      </TabDiv>

      <TabDivMiddle className="row flex-nowrap tab-button-group report-middle-tab">
        {/* <ButtonGroupMiddle className="col row">
					{typesMiddle.map(type => (
						<TabMiddle
                            key={type.id}
                            style={type.style}
							active={active === type.id}
							onClick={() => {
                                setActive(type.id),
                                setTabAction([...tabAction, {"action": type.name, id: type.id}])
                                }
                            }>
                            {
                                type.icon
                                && type.icon({className: "icon"})
                            }
							{type.name}
						</TabMiddle>
					))}
                </ButtonGroupMiddle> */}

        <Autocomplete
          options={options_clients.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          getOptionLabel={(option) => option.title}
          style={{ border: 'none' }}
          className="report-selectbox"
          name="clients"
          id="clients-selectbox"
          size="small"
          noOptionsText="Aradığınız bulunamadı"
          onChange={handleClients}
          renderInput={(params) => (
            <TextField
              {...params}
              className="clients-selectbox-input"
              placeholder="Müşteriler"
              variant="outlined"
            />
          )}
        />
      </TabDivMiddle>

      <TabDivBottom className="row flex-nowrap tab-button-group">
        <ButtonGroupBottom className="col row">
          {typesBottom.map((type) => (
            <TabBottom
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
            </TabBottom>
          ))}
        </ButtonGroupBottom>
      </TabDivBottom>
      <section className="data-table-section">
        <TabComponent component={types[active]} />
      </section>
    </>
  );
});

export default ReportButtons;
