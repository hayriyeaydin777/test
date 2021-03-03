import * as React from 'react';

import SearchBanner from './search-banner';
import SearchElements from './search-elements';
import Slider from './slider';

const Search = ({ children, className, searchElements, searchBanner, navSlider }) => {
  return (
    <>
      <div className={className}>
        {children}
        <SearchElements className={searchElements.className} element={searchElements.element} />

        {navSlider.status && <Slider className={navSlider.className} element={navSlider.element} />}
      </div>
      {searchBanner.status && (
        <SearchBanner className={searchBanner.className} element={searchBanner.element} />
      )}
    </>
  );
};

export default Search;
