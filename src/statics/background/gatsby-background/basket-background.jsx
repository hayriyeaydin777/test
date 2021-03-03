import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const BasketBackground = (props) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "basket-background.png" }) {
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

const BasketBackgroundImg = styled(BasketBackground)`
  content: '';
  position: absolute !important;
  border-radius: 60px;
  width: 100%;
  height: 100%;
  left: 0;
  background-size: contain !important;
  top: 200px;
  z-index: -1;
  background-repeat: no-repeat !important;
`;

export default BasketBackgroundImg;
