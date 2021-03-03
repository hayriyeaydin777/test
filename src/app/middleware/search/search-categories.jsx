import React, { memo, useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from "@material-ui/core/Paper";
//bunu şimdilik ekliyoruz
import branddata from './services/branddata';
import campaigndata from './services/campaign';
import productdata from './services/productdata';
import modeldata from './services/modeldata';
import enginetypesdata from './services/enginetypesdata';

import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

const SearchCategories = memo((props) => {
  const [display, setDisplay] = useState({
    display: props.display
  });
  const [producer, setProducer] = useState('');
  const [campaign, setCampaign] = useState('');
  const [product, setProduct] = useState('');
  const [model, setModel] = useState('');
  const [engine, setEngine] = useState('');

  const handleProducer = (event) => setProducer(event.target.innerText);
  const handleCampaign = (event) => setCampaign(event.target.innerText);
  const handleProduct = (event) => setProduct(event.target.innerText);
  const handleModel = (event) => setModel(event.target.innerText);
  const handleEngine = (event) => setEngine(event.target.innerText);

  const useStyles = makeStyles(() => ({
    paper: {
      display: (props) => props.display
    }
  }));

  const classes = useStyles(props);

  const options_brand = branddata.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });
  const options_campaign = campaigndata.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  const options_product = productdata.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });
  const options_model = modeldata.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });
  const options_engine = enginetypesdata.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <div className="search-categories-wrapper">
      <div className="search-selections">
        <Autocomplete
          options={options_brand.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          getOptionLabel={(option) => option.title}
          className="search-input"
          name="producer"
          id="producer-search-category"
          size="small"
          noOptionsText="Aradığınız bulunamadı"
          onChange={handleProducer}
          renderInput={(params) => (
            <TextField {...params} placeholder="Üretici" variant="outlined" />
          )}
        />

        <Autocomplete
          options={options_product.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          getOptionLabel={(option) => option.title}
          className="search-input"
          name="brand"
          id="brand"
          size="small"
          openText=""
          closeText=""
          onChange={handleProduct}
          renderInput={(params) => <TextField {...params} placeholder="Marka" variant="outlined" />}
        />

        <Autocomplete
          options={options_model.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          getOptionLabel={(option) => option.title}
          className="search-input"
          name="model"
          id="model"
          size="small"
          openText=""
          closeText=""
          onChange={handleModel}
          renderInput={(params) => <TextField {...params} placeholder="Model" variant="outlined" />}
        />

        <Autocomplete
          options={options_campaign.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          getOptionLabel={(option) => option.title}
          className="search-input"
          name="generation"
          id="generation"
          size="small"
          openText=""
          closeText=""
          onChange={handleCampaign}
          renderInput={(params) => (
            <TextField {...params} placeholder="Jenerasyon" variant="outlined" />
          )}
        />

        <Autocomplete
          options={options_engine.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          getOptionLabel={(option) => option.title}
          className="search-input"
          name="engine-type"
          id="engine-type"
          size="small"
          openText=""
          closeText=""
          onChange={handleEngine}
          renderInput={(params) => (
            <TextField {...params} placeholder="Motor Tipi" variant="outlined" />
          )}
        />

        <Autocomplete
          options={options_campaign.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          getOptionLabel={(option) => option.title}
          className="search-input"
          name="product-group"
          id="product-group"
          size="small"
          openText=""
          closeText=""
          onChange={handleCampaign}
          renderInput={(params) => (
            <TextField {...params} placeholder="Ürün Grubu" variant="outlined" />
          )}
        />
      </div>
    </div>
  );
});

export default SearchCategories;
