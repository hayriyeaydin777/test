import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

import styled from 'styled-components';

const theme = {
	blue: {
		default: "#3a8bb8",
		hover: "#235e7c",
		active: "#235e7c"
	},
	pink: {
		default: "#e91e63",
		hover: "#ad1457",
		active: "#930060"
	}
};

const Tab = styled.button`
	font-size: 12px;
	padding: 4px 12px;
	margin: 0 5px 0 0;
	cursor: pointer;
	background: ${props => theme[props.theme].default};
	border-radius:20px;
	white-space: nowrap;
	border: 0;
	outline: 0;
	z-index:10;
	
	&:focus {
	outline:none;
	}
  
	${({active}) =>
	active &&
	`
	/*background-color:${props => theme[props.theme].active};*/
	background: #235e7c;
  `}
`;

const ButtonGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
`;

const TabDiv = styled.div`
	background:transparent;
	:after {
		content: "";
		display: block;
		background: #69abcb;
		height: 1px;
		top: -12px;
		z-index: 1;
		position: relative;
	}
`;

const types = ['Arama Sonuçları', 'Geçmiş', 'Eşdeğer Ürünler'];

const tabItems = [
	{
		id: 1,
		title: "Arama Sonuçları",
		content: "1. DataTable"
	},
	{
		id: 2,
		title: "Geçmiş",
		content: "2. DataTable"
	},
	{
		id: 3,
		title: "STEP 3",
		content: "3. DataTable"
	},
];

Tab.defaultProps = {
	theme: "blue"
};

const Elements = () => {
	const [active, setActive] = useState(types[0]);
	return (
		<>
			<ul>
				<li>
					<InputGroup>
						<FormControl className="search-input"
						             placeholder="Buraya yazın.."
						             aria-label="Buraya yazın.."
						             aria-describedby="basic-addon2"
						/>
						
						<Button className="button search-btn" variant="outline-secondary">Ara</Button>
						<Button className="button search-btn-clear" variant="outline-secondary">Temizle</Button>
					</InputGroup>
				</li>
				<li>
					<Button className="button">TEST</Button>
				</li>
				<li>
					<Form.Group controlId="exampleForm.ControlSelect1">
						<Form.Control as="select" className="product-producer">
							<option>Üretici</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>6</option>
							<option>7</option>
						</Form.Control>
					</Form.Group>
				</li>
				<li>
					<Form.Group controlId="exampleForm.ControlSelect1">
						<Form.Control as="select" className="product-campaign">
							<option>Kampanya5</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</Form.Control>
					</Form.Group>
				</li>
				<li>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Yeni Ürün"/>
					</Form.Group>
				</li>
				<li>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Stokta Olanlar"/>
					</Form.Group>
				</li>
				<li>
				
				</li>
			</ul>
			
			<TabDiv>
				<ButtonGroup>
					{types.map(type => (
						<Tab
							key={type}
							active={active === type}
							onClick={() => setActive(type)}
							data={"data"}
						>
							{type}
						</Tab>
					))}
				</ButtonGroup>
			</TabDiv>
		</>
	);
};

export default Elements;