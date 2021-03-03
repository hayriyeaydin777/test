import React from 'react';

import { default as SlickSlider } from 'react-slick';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Slider = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  const allImagesQuery = graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "clients/client_1/banner" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 1920 quality: 60) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  `;
  const {
    allFile: { edges: images },
  } = useStaticQuery(allImagesQuery);

  return (
    <SlickSlider {...settings}>
      {images.map((image) => (
        <Img fluid={image.node.childImageSharp.fluid} alt={image.node.base.split('.')[0]} />
      ))}
    </SlickSlider>
  );
};

export default Slider;
