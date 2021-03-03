import React, { memo } from 'react';
import awesomeIcon from '../../../statics/icon';

import svg from '../../../statics/svg';

const OldPayments = memo(() => {
	return (
		<div className="new-page">
			<div className="row">
				<div className="col-auto logo">
					<svg.logooldpayments />
				</div>
				<div className="col text d-flex flex-nowrap flex-row">
					<div className="col-auto d-flex align-items-center">
						<div className="d-flex flex-column justify-content-center align-items-center bold">
							<awesomeIcon.faInfo className="fa-icon"/>
							<span>Önemli Hatırlatma</span>
						</div>
					</div>
					<div className="col d-flex align-items-center thin">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quod atque? A deserunt praesentium dolor facere repellat corporis, atque cumque maxime. Libero, iusto accusamus ab odit placeat delectus eaque ducimus!
					</div>
				</div>
			</div>
		</div>
	);
});

export default OldPayments;