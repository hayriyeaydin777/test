import React from 'react';
import {default as DefHeader} from '../../../components/Header/partials';

import { useStaticQuery, graphql } from "gatsby";

import logoheader from '../../../statics/background/images/logo.png';

import NavLogo from './nav-logo';
import NavMenu from './nav-menu';
import NavSlider from './nav-slider';
import NavWidget from './nav-widget';

const Header = () => {
    const gql = useStaticQuery(graphql`{
        allNavJson {
            nodes {
              id
              title
              page
              className
              isTabs
              order
              status
              tabs {
                className
                id
                isTabs
                order
                page
                status
                title
              }
            }
          }
    }`)

    const navLogo = {
        status: true,
        className: "col-2 nav-logo",
        element: () => <NavLogo />
    }
    
    const navMenu = {
        status: true,
        className: "nav-menu",
        element: () => <NavMenu data={gql.allNavJson.nodes}/>
    }
    
    const navSlider = {
        status: true,
        className: "nav-slider",
        element: () => <NavSlider data={""}/>
    }
    
    const navWidget = {
        status: true,
        className: "nav-widget",
        element: () => <NavWidget data={""}/>
    }
    
    return (
        <DefHeader
            className="row justify-content-between header"
            backgroundImage={""}
            navLogo={navLogo}
            navMenu={navMenu}
            navSlider={navSlider}
            navWidget={navWidget}
        />
    );
};

export default Header;