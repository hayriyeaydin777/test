import React from 'react';

import Master from '../master';
import SearchButtons from '../../middleware/search/search-buttons';

const Search = props => {
    return (
        <Master>
            <div className="container-fluid main-container">
                <SearchButtons navigate={props.navigate}/>
                {props.children}
            </div>
        </Master>
    )
};

export default Search;