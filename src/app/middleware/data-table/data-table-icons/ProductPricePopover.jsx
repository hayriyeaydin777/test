import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import awesomeIcon from '../../../../statics/icon';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    backgroundColor: 'white',
    width: '200px',
    height: '170px',
    display: 'flex',
    /* justifyContent: 'center', */
    padding: '10px',
    marginTop: '5px',
    marginLeft: '15px',
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
      <span
        aria-owns={open ? 'price-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {props.price}
      </span>
      <Popover
        id="price-popover"
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
        <div>
          {props.price}
          <table className="price-popover-table">
          <thead>
            <tr>
              <th>Adet</th>
              <th>Fiyat</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>0-9</td>
              <td>612 TL</td>
            </tr>
            <tr>
              <td>10-999</td>
              <td>500 TL</td>
            </tr>
            </tbody>
          </table>
        </div>
      </Popover>
    </>
  );
}
