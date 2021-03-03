import React, { memo, useState } from 'react';
import { Row } from 'react-bootstrap';

import styled from 'styled-components';
import BaBsReconciliation from "../ba-bs-reconciliation";
import BankAccounts from "../bank-accounts";
import Elements from '../elements';

import TabComponent from '../../../../components/TabComponent';
import UnclosedBills from '../partials/unclosed-bills';
import AccountClosing from '../partials/private-account-closing';
import CurrentAccountTab from '../partials/current-account-tab';
import CurrentAccountChecks from '../partials/current-account-checks';
import BillingDueDate from '../partials/billing-due-date';


const theme = {
    blue: {
        default: "#3a8bb8",
        hover: "#235e7c",
        active: "#235e7c",
    },
};

const TabLeft = styled.button`
    font-size: 7pt;
    padding: 10px 20px;
    margin: 0 5px 0 0;
    cursor: pointer;
    background: ${props => theme[props.theme].default};
    border-radius: 20px;
    white-space: nowrap;
    border: 0;
    outline: 0;
    z-index: 10;
    
    &:focus {
    outline:none;
    }
  
    ${(props) =>
    props.active &&`
    background: ${theme[props.theme].active};
    `
    }
`;

const ButtonGroupLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
`
;

const TabDiv = styled.div`
    background:transparent;
    display: flex;
    position: relative;
    align-items: center;

    :after {
        content: "";
        display: block;
        background: #69abcb;
        height: 1px;
        z-index: 1;
        position: absolute;
        width: 100%;
    }
`;


const CurrentAccountButtons = memo(() => {
    
    const typesLeft = [
        {
            id: 1,
            name: "CARİ HESAP",
            component: props => <> <Elements /> <CurrentAccountTab/> </>,
            
        },
        {
            id: 2,
            name: "KAPANMAMIŞ FATURALAR",
            component: () => <> <Elements /> <UnclosedBills/> </>,
        },
        {
            id: 3,
            name: "ÖZEL HESAP KAPATMA",
            component: () => <> <Elements /> <AccountClosing/> </>,
        },
        {
            id: 4,
            name: "BA-BS MUTABAKAT",
            component: () => <BaBsReconciliation/>,
        }
        ,
        {
            id: 5,
            name: "BANKA HESAPLARI",
            component: () => <BankAccounts/>,
        },
        {
            id: 6,
            name: "CARİ ÇEKLER",
            component: () => <> <Elements /> <CurrentAccountChecks/> </>,
        },
        {
            id: 7,
            name: "FATURA VADE GÜNÜ",
            component: () => <> <Elements /> <BillingDueDate/> </>,
        },
        {
            id: 8,
            name: "DBS LİSTESİ",
            component: () => <div></div>
        }
    ];


    TabLeft.defaultProps = {
        theme: "blue",
    };

    const types = [
        {
            id: 0,
            name: "",
            icon: ""
        },
        ...typesLeft,
    ];

    const [active, setActive] = useState(1);
    const [tabAction, setTabAction] = useState([{
        "action": types[1]["name"],
        id: types[1]["id"]
    }]);
    
    return (
        <>
           <TabDiv className="row flex-nowrap">
				<ButtonGroupLeft className="col row">
					{typesLeft.map(type => (
						<TabLeft
							key={type.id}
							active={active === type.id}
							onClick={() => {
                                setActive(type.id),
                                setTabAction([...tabAction, {"action": type.name, id: type.id}])
                                }
                            }
						>
							{type.name}
						</TabLeft>
					))}

                    </ButtonGroupLeft>
			</TabDiv>
            <section className="data-table-section">
            <TabComponent component={types[active]}/>
            </section>
        </>
    );
});

export default CurrentAccountButtons;