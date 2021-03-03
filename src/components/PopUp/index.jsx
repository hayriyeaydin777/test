import React, { memo } from 'react';
import awesomeIcon from '../../statics/icon';

const PopUp = memo((props) => {
    return (
        <section className={`popup-page ${props.className}`}>
            <div className="popup-container">
                <button className="btn btn-close" onClick={() => props.close(false)}><awesomeIcon.faClose/></button>
                {props.children}
            </div>
        </section>
    );
});

export default PopUp;