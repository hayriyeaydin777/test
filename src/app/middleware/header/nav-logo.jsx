import React from 'react';
import NavBackgroundImg from "../../../statics/background/gatsby-background/nav-background";

const NavLogo = ({logo}) => {
    return (
        <>
            <img src={logo}/>
            <NavBackgroundImg/>
            
        </>
    )
}

export default NavLogo;