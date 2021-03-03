import React from 'react';

import { default as DefSearch } from '../../../components/Search/partials';

import svg from '../../../statics/svg';

import Banner from './banner';
import Elements from './search-tabs';
import SearchTabElements from "./search-tab-elements";
import NavSlider from './nav-slider.jsx';

const Search = () => {
  const searchElements = {
    status: true,
    className: 'col-xl-6 col-lg-6 search-bar',
    element: () => <SearchTabElements />,
  };

  const searchBanner = {
    status: false,
    className: 'search-banner',
    element: () => <Banner className="box text-center" />,
  };

  const navSlider = {
    status: true,
    className: 'col-xl-6 col-lg-6 big-nav-slider',
    element: () => <NavSlider data={''} />,
  };

  return (
    <>
      <DefSearch
        className="col-xl-12 col-lg-12 col-md-12 p-0 search-wrapper"
        searchElements={searchElements}
        searchBanner={searchBanner}
        navSlider={navSlider}
      >
      </DefSearch>
    </>
  );
};

export default Search;
