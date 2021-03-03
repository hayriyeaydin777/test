import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const SliderBackground = props => (
	<StaticQuery
		query={graphql`
	      query {
	        desktop: file(relativePath: { eq: "slider-background.png" }) {
	          childImageSharp {
	            fluid(quality: 90, maxWidth: 1920) {
	              ...GatsbyImageSharpFluid_withWebp
	            }
	          }
	        }
	      }
	    `}
		render={data => {
			const imageData = data.desktop.childImageSharp.fluid
			return (
				<BackgroundImage
					{...props}
					fluid={imageData}
				>
				</BackgroundImage>
			)
		}}
	/>
)

const SliderBackgroundImg = styled(SliderBackground)`
    position: absolute!important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: inherit!important;
    background-size: contain!important;
    background-repeat: no-repeat!important;
    z-index: 10;
`


export default SliderBackgroundImg