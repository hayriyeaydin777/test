import React from 'react';

import Master from '../master';

import Banner from '../../middleware/banner';



const Home = (props) => {
  return (
    <Master>
      <main className="container-fluid">
        <Banner />
        {props.children}
      </main>
    </Master>
  );
};

export default Home;
