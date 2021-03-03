import React from 'react';
import Gallery from 'devextreme-react/gallery';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { gallery } from './data.js';
import { useStaticQuery, graphql } from 'gatsby';

const DevNavSlider = (props) => {
  const data = useStaticQuery(graphql`
    {
      allSliderJson {
        edges {
          node {
            id
            imageName
          }
        }
      }
    }
  `);

  return (
    <div className="widget-container">
      <div style={{ height: '130px', background: 'yellow' }}>
        <pre>{JSON.stringify(data, null, 4)}</pre> {/* {data.allSliderJson.edges.node} */}
      </div>
      <Gallery
        id="gallery"
        dataSource={gallery}
        height={200}
        slideshowDelay={1000}
        loop={false}
        showNavButtons={false}
        showIndicator={false}
      />
    </div>
  );
};

export default DevNavSlider;
