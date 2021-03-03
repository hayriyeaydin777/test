import React, { memo, useState, useEffect } from 'react';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import { makeStyles } from '@material-ui/core/styles';

import Elements from './search-tabs';

const SearchTabElements = (props) => {
  const useStyles = makeStyles((theme) => ({
    indicator: {
      display: 'none',
    },
    /* searchTab: {
          opacity: '1',
          margin: '0px 5px 0px 0px',
          color: 'white',
          '& button': {
            minWidth: 50
          }

        },
        indicator: {
          display: 'none',
        },
        tabs: {
            '& button': {
              minWidth: 50,
              maxHeight: 20,
              backgroundColor: 'green',
              fontSize: '0.8rem',
              padding: '5px 10px',
              lineHeight: '1.50'
            }
          } */
  }));
  const classes = useStyles();
  const [tabValue, setTabValue] = useState('1');

  const searchTabHandle = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <>
      <div className="col-xl-12 col-lg-12 search-tabs-wrapper">
        <TabContext value={tabValue}>
          <TabList
            classes={{ indicator: classes.indicator }}
            color="primary"
            onChange={searchTabHandle}
          >
            <Tab label="Lorem Ipsum" value="1" />
            <Tab label="Lorem Ipsum" value="2" />
            <Tab label="Lorem Ipsum" value="3" />
            <Tab label="Lorem Ipsum" value="4" />
          </TabList>

          <TabPanel className="col-xl-12 p-0 search-tabs tab-one" value="1">
            <Elements />
          </TabPanel>
          <TabPanel className="col-xl-12 p-0 search-tabs tab-second" value="2"></TabPanel>
          <TabPanel className="col-xl-12 p-0 search-tabs tab-second" value="3"></TabPanel>
          <TabPanel className="col-xl-12 p-0 search-tabs tab-second" value="4"></TabPanel>
        </TabContext>
      </div>
    </>
  );
};

export default SearchTabElements;
