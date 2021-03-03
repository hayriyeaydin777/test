import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const NavBackground = (props) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "logo-background.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      const imageData = data.desktop.childImageSharp.fluid;
      return <BackgroundImage {...props} fluid={imageData}></BackgroundImage>;
    }}
  />
);

const NavBackgroundImg = styled(NavBackground)`
      content: "";
      position: absolute!important;
      border-radius: 60px;
      width: 158%;
      height: 109%;
      left: -5px;
      background-size: contain!important;
      top: -8px;
      background-repeat: no-repeat!important;;
}
`;

export default NavBackgroundImg;
/*
	content: "";
    position: absolute!important;
    border-radius: 60px;
    width: 134%;
    height: 113%;
	left: -25px;
    background-size: contain!important;
    top: -13%;
	background-repeat: no-repeat!important; */
