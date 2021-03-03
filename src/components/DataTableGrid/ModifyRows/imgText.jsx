import React, { memo, useState } from 'react';

import PopUp from '../../PopUp';

const ImgText = memo(({text, title, icon}) => {
    const [togglePop, setTogglePop] = useState(false);

    return (
        <>
            <button
                title={title} 
                className="btn btn-link table-img-btn" 
                onClick={() => {
                    return setTogglePop(true);
                }}
            >
                {icon}
            </button>
            {
                togglePop &&
                <PopUp
                    close={setTogglePop}
                    title="Sepet" 
                    className="basket-popup"
                >
                    <div style={{margin: "30px"}}>
                        <img src={text} alt={title}/>
                    </div>
                </PopUp>
            }    
        </>
    );
});

export default ImgText;