import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import AddBasket from '../../../../components/AddBasket';
import awesomeIcon from '../../../../statics/icon';
import svg from '../../../../statics/svg';

import Slider from 'react-slick';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    borderRadius: '0px',
    overflowX: 'hidden',
  },
  closeButton: {
    outline: 0,
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    '&:focus': {
      outline: 'none',
    },
  },
  dialogPaper: {
    overflowX: 'hidden',
    overflowY: 'hidden',
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    fontSize: '30px',
    '&:focus': {
      outline: 'none',
    },
  },
  tab: {
    background: 'transparent',
    '&:active': {
      outline: 'none',
    },
  },
  tabPanel: {
    height: '30vw',
    width: '900px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '1rem',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

var settings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 1000,
  infinite: true,
};

export default function ImageGallery(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const imageOnHoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const imageOnHoverClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const [openImageDialog, setImageOpen] = React.useState(false);

  const handleImageOpen = () => {
    setImageOpen(true);
  };

  const handleImageClose = () => {
    setImageOpen(false);
  };
  return (
    <>
      <div
        className="data-table-product-image"
        aria-owns={openPopover ? 'product-image-mouse-over-popover' : undefined}
        aria-haspopup="true"
        onClick={handleImageOpen}
        onMouseEnter={imageOnHoverOpen}
        onMouseLeave={imageOnHoverClose}
      >
        <span className="image-gallery-icon">
          <svg.camera />
        </span>
      </div>
      <Popover
        id="product-image-mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={openPopover}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={imageOnHoverClose}
        disableRestoreFocus
      >
        <div className="">
          <div className="product-image-hover text-center">
            <img className="img-fluid" src={props.productImage} />
          </div>
        </div>
      </Popover>

      <Dialog
        maxWidth="xl"
        classes={{ paper: classes.dialogPaper }}
        open={openImageDialog}
        onClose={handleImageClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <IconButton
            className={classes.closeButton}
            edge="end"
            color="inherit"
            onClick={handleImageClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>

          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tab}
            aria-label="simple tabs example"
            centered
          >
            <Tab className={classes.icon} icon={<awesomeIcon.faRotate360 />} {...a11yProps(0)} />
            <Tab className={classes.icon} icon={<awesomeIcon.faCamera />} {...a11yProps(1)} />
            <Tab className={classes.icon} icon={<awesomeIcon.faFilePdf />} {...a11yProps(2)} />
          </Tabs>
          <TabPanel className={classes.tabPanel} value={value} index={0}>
            <div className="container product-image-gallery-slider">
              <Slider {...settings}>
                <div>
                  <img src={props.imageGallery1} />
                </div>
                <div>
                  <img src={props.imageGallery2} />
                </div>
                <div>
                  <img src={props.imageGallery3} />
                </div>
              </Slider>
            </div>
          </TabPanel>
          <TabPanel className={classes.tabPanel} value={value} index={1}>
            <div className="container-fluid">
              <img src={props.productImage} />
            </div>
          </TabPanel>
          <TabPanel className={classes.tabPanel} value={value} index={2}>
            <div className="container-fluid">
              <AddBasket />
            </div>
          </TabPanel>
        </DialogContent>
      </Dialog>
    </>
  );
}
