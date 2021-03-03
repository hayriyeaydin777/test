import React from 'react';
import {default as DefHeader} from '../../../components/Header/partials';

import { useStaticQuery, graphql } from "gatsby";

import NavMenu from './nav-menu';
import NavWidget from './nav-widget';

const BigHeader = () => {
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

    const navMenu = {
        status: true,
        className: "col-xl-12 col-lg-12 p-0 mb-3 big-nav-menu",
        element: () => <NavMenu data={gql.allNavJson.nodes}/>
    }
    
    const navWidget = {
        status: true,
        className: "col-xl-12 col-lg-12 p-0 big-nav-widget",
        element: () => <NavWidget />
    }
    
    return (
        <DefHeader
            className="col-xl-12 col-lg-12 p-0 big-header"
            navMenu={navMenu}
            navWidget={navWidget}
        />
    );
};

export default BigHeader;