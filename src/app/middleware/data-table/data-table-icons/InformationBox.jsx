import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import svg from '../../../../statics/svg';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    backgroundColor: '#ffffb5',
    width: '200px',
    height: '170px',
    //overflowY: 'hidden',
    borderRadius: '0px',
  },
}));

export default function InformationBox(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <button
        className="information-box-icon"
        aria-owns={open ? 'information-box-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <svg.info />
      </button>
      <Popover
        id="information-box-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography className="info-paper">
          {props.info}
          Üretici kısıtlaması: MANDO Aşınma ikaz kontağı: Aşınma ikaz göstergesi için hazırlanmış
          değil Uzunluk: 133,00 mm
        </Typography>
      </Popover>
    </>
  );
}
