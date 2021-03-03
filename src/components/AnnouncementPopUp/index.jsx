import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import awesomeIcon from '../../statics/icon';
import svg from '../../statics/svg';

export default function AnnouncementPopUp() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xl'));

  const [open, setOpen] = React.useState(false);

  const handleAnnouncementOpen = () => {
    setOpen(true);
  };

  const handleAnnouncementClose = () => {
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
      <svg.bell className="announcement-icon" onClick={handleAnnouncementOpen} />

      <Dialog
        open={open}
        fullScreen={fullScreen}
        onClose={handleAnnouncementClose}
        classes={{
          paper: classes.paper,
        }}
      >
        <div className="announcement-wrapper">
          <h3 className="text-center font-weight-bold announcement-title">DUYURULAR</h3>
          <div className="announcement-item-wrapper">
            <ul>
              <li>
                <span>
                  <awesomeIcon.faBullhorn />
                </span>
                <span>
                  <b>İADE ARIZALI:</b> Mais ve Orjinal Parçaların İadesi Kesinlikle Yoktur
                </span>
              </li>
              <li>
                <span>
                  <awesomeIcon.faBullhorn />
                </span>
                <span>
                  <b>SANAL POS:</b> Tüm Kredi Kartlarına Taksit İçin Lütfen Bizi Arayınız
                </span>
              </li>
              <li>
                <span>
                  <awesomeIcon.faBullhorn />
                </span>
                <span>
                  <b>KARGO ÜCRETİ:</b> 1000 TL ve Üzeri Kargolarınız Tarafımızdan Ödenir
                </span>
              </li>
              <li>
                <span>
                  <awesomeIcon.faBullhorn />
                </span>
                <span>
                  <b>KARGO SEVKİYATI:</b> SAAT 16:00'a Kadar Verilen Kargo Siparişleriniz Aynı Gün
                  Gönderilir.
                </span>
              </li>
              <li>
                <span>
                  <awesomeIcon.faBullhorn />
                </span>
                <span>
                  <b>ÇALIŞMA SAATLERİ:</b> Hafta içi: 08.30 - 19:00 Hafta sonu: 08:30 - 16:00
                </span>
              </li>
            </ul>
          </div>
        </div>
        <IconButton
          className={classes.closeButton}
          edge="end"
          color="inherit"
          onClick={handleAnnouncementClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Dialog>
    </>
  );
}
