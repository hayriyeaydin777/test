import React from 'react';

import Slider from 'react-slick';

import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const NavSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  const allImagesQuery = graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "clients/client_1/slider" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                base64
                aspectRatio
                src
                srcSet
                sizes
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
    <>
      <Slider {...settings}>
        {images.map((image) => (
          <Link to="/campaign-products">
            <div className="">
              <Img fluid={image.node.childImageSharp.fluid} alt={image.node.base.split('.')[0]} />
            </div>
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default NavSlider;
