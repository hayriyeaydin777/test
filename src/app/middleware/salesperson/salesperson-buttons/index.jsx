import React, { memo, useState } from 'react';
import { Row } from 'react-bootstrap';

import styled from 'styled-components';
import TabComponent from '../../../../components/TabComponent';
import SalesPersonElements from '../filters/salesperson-elements';

import AllSalesPerson from '../partials/all-salesperson';
import WithBalance from '../partials/with-balance';
import WithItemsinBasket from '../partials/with-items-basket';


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


const SalesPersonButtons = memo(() => {
   
    const typesLeft = [
        {
            id: 1,
            name: "BAKİYESİ OLANLAR",
            component: props => <> <SalesPersonElements /> <WithBalance/> </>
            
        },
        {
            id: 2,
            name: "SEPETTE ÜRÜN OLANLAR",
            component: () => <> <SalesPersonElements /> <WithItemsinBasket/> </>
        },
        {
            id: 3,
            name: "TÜMÜ",
            component: () => <> <SalesPersonElements /> <AllSalesPerson/> </>
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
            <div className="data-table-section">
            <TabComponent component={types[active]}/>
            </div>
        </>
    );
});

export default SalesPersonButtons;