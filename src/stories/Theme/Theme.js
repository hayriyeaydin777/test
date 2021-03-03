import React from 'react';
import './Theme.scss';

export default function Theme(props) {
    return (
        <div className="theme">
            {props.children}
        </div>
    )
}
