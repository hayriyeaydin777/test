import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import svg from '../../statics/svg';
import awesomeIcon from '../../statics/icon';

export default function SearchHistoryPopUp() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xl'));

  const [open, setOpen] = React.useState(false);

  const handleSearchHistoryOpen = () => {
    setOpen(true);
  };

  const handleSearchHistoryClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      overflowY: 'unset',
      width: '950px',
      maxWidth: '900px',
      maxHeight: '500px',
      height: '500px',
      padding: '0px',
    },
    root: `
    outline: none;
    padding: 0px;

  `,
    closeButton: {
      position: 'absolute',
      left: '95%',
      top: '-5%',
      backgroundColor: 'white',
      color: 'gray',
      '&:focus': {
        outline: 'none',
      },
      '&:hover': {
        backgroundColor: 'white',
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <button className="search-history-icon" onClick={handleSearchHistoryOpen}>
        <svg.searchHistory />
      </button>
      <Dialog
        open={open}
        fullScreen={fullScreen}
        onClose={handleSearchHistoryClose}
        classes={{
          paper: classes.paper,
        }}
      >
        <div className="search-history-wrapper">
          <h3 className="text-center font-weight-bold search-history-title">GEÇMİŞ ARAMALAR</h3>
          <div className="search-history-item-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sıra</th>
                  <th scope="col">Aranan Kelime</th>
                  <th scope="col">Tarih</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>567845</td>
                  <td>06.01.2021</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>567845</td>
                  <td>06.01.2021</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>567845</td>
                  <td>06.01.2021</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <IconButton
          className={classes.closeButton}
          edge="end"
          color="inherit"
          onClick={handleSearchHistoryClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Dialog>
    </>
  );
}
