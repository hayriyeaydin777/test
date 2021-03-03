import React, { memo, useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Input from '@material-ui/core/Input';
import Switch from '@material-ui/core/Switch';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  historySearchText,
  setSearchText,
  setDisplayCategories,
} from '../../../redux/reducers/search-action';

import { navigate } from 'gatsby';

import Swal from 'sweetalert2';
import svg from '../../../statics/svg/index';

//bunu şimdilik ekliyoruz
import branddata from './services/branddata';
import campaigndata from './services/campaign';

import awesomeIcon from '../../../statics/icon';
import SearchCategories from './search-categories';
import SearchHistoryPopUp from '../../../components/SearchHistoryPopUp/SearchHistoryPopUp';

const Elements = memo(
  ({
    children,
    className,
    getSearchText,
    setSearchText,
    getDisplayCategories,
    setDisplayCategories,
    historySearchText,
    props,
  }) => {
    const [textBox, setTextBox] = useState({
      search: getSearchText,
    });

    const [checkBox, setCheckBox] = useState({
      new_product: false,
      stock: false,
      campaign: false,
    });

    const [viewCategories, setViewCategories] = useState({
      displayStatus: getDisplayCategories,
    });

    const handleSwitchChange = (event) => {
      setViewCategories({ ...viewCategories, [event.target.name]: event.target.checked });
    };

    const [producer, setProducer] = useState('');
    const [campaign, setCampaign] = useState('');

    const handleProducer = (event) => setProducer(event.target.innerText);
    const handleCampaign = (event) => setCampaign(event.target.innerText);

    const checkBoxHandles = (event) =>
      setCheckBox({ ...checkBox, [event.target.name]: event.target.checked });
    const textBoxHandles = (event) =>
      setTextBox({ ...textBox, [event.target.name]: event.target.value });
    const textBoxTrimHandles = (event) =>
      setTextBox({ ...textBox, [event.target.name]: event.target.value.replace(/ +(?= )/g, '') });

    const formHandle = (event) => {
      switch (event.target.type) {
        case 'text':
          return textBoxHandles(event);
        case 'checkbox':
          return checkBoxHandles(event);
        default:
          break;
      }
    };

    const formatInput = (event) => {
      switch (event.target.type) {
        case 'text':
          return textBoxTrimHandles(event);
        default:
          break;
      }
    };

    const handleSearchInputControl = () => {
      if (textBox['search'].length < 3) {
        Swal.fire({
          title: 'Lütfen en az 3 karakter giriniz.',
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3a8bb8',
          cancelButtonColor: '#d40104',
          iconColor: '#d40104',
          confirmButtonText: 'Tamam',
          customClass: {
            cancelButton: 'swal-fire-button',
            confirmButton: 'swal-fire-button',
          },
        });
        return false;
      } else setSearchText(textBox['search']);
      return navigate('/search', {
        state: {
          tabActive: 1,
        },
      });
    };

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

    /*     const isSSR = typeof window === 'undefined';
    if (!isSSR) {
      const [width, setWidth] = useState(window.innerWidth);
      useEffect(() => {
        function handleResize() {
          setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, [width]);
 */
    return (
      <>
        {children}
        <>
          <div className="search-box">
            <span className="searchbar-icon">
              <svg.search />
            </span>
            <Input
              placeholder="Buraya Yazınız..!"
              className="search-input search-search"
              size="small"
              name="search"
              onChange={formHandle}
              disableUnderline={true}
              onBlur={formatInput}
              value={textBox['search']}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearchInputControl();
                }
              }}
            />

            <button
              color="success"
              className="btn search-btn search-button"
              onClick={handleSearchInputControl}
            >
              Ara
            </button>

            <button
              color="success"
              className="btn search-btn clear-button"
              onClick={() => {
                setTextBox({ search: '' });
                return setSearchText('');
              }}
            >
              Temizle
            </button>

            <SearchHistoryPopUp />

            <FormControlLabel
              className="search-check paste"
              control={
                <Checkbox
                  /*  checked={checkBox['stock']}
                onChange={formHandle} */
                  name="paste"
                  color="primary"
                />
              }
              label="Yapıştır"
            />
          </div>
          <div className="search-control-selectbox">
            <Autocomplete
              options={options_brand.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
              getOptionLabel={(option) => option.title}
              style={{ width: 'auto', border: 'none' }}
              className="search-selectbox"
              name="producer"
              id="producer"
              size="small"
              noOptionsText="Aradığınız bulunamadı"
              onChange={handleProducer}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="search-selectbox-input"
                  placeholder="Üretici"
                  variant="outlined"
                />
              )}
            />

            <Autocomplete
              options={options_campaign.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
              getOptionLabel={(option) => option.title}
              style={{ width: 'auto', border: 'none' }}
              className="search-selectbox"
              name="campaign"
              id="campaign"
              size="small"
              openText=""
              closeText=""
              onChange={handleCampaign}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="search-selectbox-input"
                  placeholder="Kampanya"
                  variant="outlined"
                />
              )}
            />
          </div>
          <div className="search-control-checkbox">
            <FormControlLabel
              className="search-check"
              control={
                <Checkbox
                  checked={checkBox['new_product']}
                  onChange={formHandle}
                  name="new_product"
                  color="primary"
                />
              }
              label="Yeni Ürünler"
            />

            <FormControlLabel
              className="search-check"
              control={
                <Checkbox
                  checked={checkBox['stock']}
                  onChange={formHandle}
                  name="stock"
                  color="primary"
                />
              }
              label="Stoktan"
            />

            <FormControlLabel
              className="search-check"
              control={
                <Checkbox
                  checked={checkBox['campaign']}
                  onChange={formHandle}
                  name="campaign"
                  color="primary"
                />
              }
              label="Kampanyalı"
            />
          </div>
     {/*      <div className="campaign-messages">
            <FormControlLabel
              className="toggle-categories"
              value="checked"
              name="displayStatus"
              control={
                <Switch
                  color="primary"
                  checked={viewCategories.displayStatus}
                  onChange={handleSwitchChange}
                  name="displayStatus"
                />
              }
              label={viewCategories.displayStatus ? 'on' : 'off'}
            />

            {viewCategories.displayStatus
              ? (setDisplayCategories(viewCategories['displayStatus']), console.log())
              : (setDisplayCategories(viewCategories['displayStatus']), console.log())}
          </div> */}
        </>
      </>
    );
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ setSearchText, setDisplayCategories, historySearchText }, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    getSearchText: state.getSearchText,
    getDisplayCategories: state.getDisplayCategories,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Elements);
