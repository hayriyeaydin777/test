import React from 'react';
import '../../../style/main.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BigHeader from '../../middleware/header/big-header';
import Search from '../../middleware/search';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    palette: {
      primary: {
        main: '#D20519',
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        contrastText: '#ffcc00',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
    MuiTabs: {
      root: {
        minHeight: '26px',
      },
    },
    MuiTab: {
      root: {
        minHeight: '20px',
        maxHeight: '26px',
        padding: '3px 5px 3px 5px',
        backgroundColor: 'green',
        '&.MuiTab-root': {
          backgroundColor: '#D20519',
          border: 0,
          opacity: '1',
          margin: '0px 5px 0px 0px',
          color: 'white',
          minHeight: '20px',
          '&:hover': {
            border: 0,
          },
        },
        '&.Mui-selected': {
          backgroundColor: '#AA000F',
        },
        MuiButton: {
          text: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          },
        },
      },
    },
  },
});

const Master = (props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BigHeader />
        <Search />
        {props.children}
      </ThemeProvider>
    </>
  );
};

export default Master;
