import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

import '../style/main.scss';
import Elements from "../app/middleware/elements";
import awesomeIcon from '../statics/icon';

export default () => {
	return (
		<Container className="x-large">
			{
				awesomeIcon.twitter(
					{
						className:"social-media",
						size: "10",
						style: {
							lineHeight: "inherit"
						}
					}
				)
			}
			<Elements/>
		</Container>
	);
};
