import React, { memo } from 'react';

import { Menu, Item, useContextMenu } from 'react-contexify';

import 'react-contexify/dist/ReactContexify.css';

import { Link } from 'gatsby';

import awesomeIcon from '../../../../statics/icon';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import AddBasket from '../../../../components/AddBasket';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const MENU_ID = 'menu-id';

export default function ContexifyMenu(props) {
  // 🔥 you can use this hook from everywhere. All you need is the menu id
  /* const { show } = useContextMenu({
    id: MENU_ID,
  }); */
  const { show } = useContextMenu({ id: 'menu-id' });
  function showMenu(e) {
    show(e);
  }

  function handleItemClick({ event, props, data }) {}
  const [open, setOpen] = React.useState(false);

  const addBasketOpen = () => {
    setOpen(true);
  };

  const addBasketClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    root: `
    outline: none;

   
  `,
    paper: {
      maxWidth: '950px',
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
  }));

  const classes = useStyles();
  /* function displayMenu(e){
    show(e);
  } */

  return (
    <>
      <Menu id="menu-id">
        <Item onClick={addBasketOpen}>
          <span>
            <awesomeIcon.faCheck />
          </span>
          Sepete Ekle
        </Item>
        <Item onClick={addBasketOpen}>
          <span>
            <awesomeIcon.faCheck />
          </span>
          Sepete Ekle (Aylık Sepet)
        </Item>
        <Item onClick={addBasketOpen}>
          <span>
            <awesomeIcon.faCheck />
          </span>
          Sepete Ekle (İkinci Sepet)
        </Item>
        <Item onClick={handleItemClick}>
          <span>
            <awesomeIcon.faMinus />
          </span>
          Sepetten Sil
        </Item>
        <Item onClick={handleItemClick}>
          <Link to='/search/' state={{ tabActive: 4 }}>
            <span>
              <awesomeIcon.faCheck />
            </span>
            Bakiye Sepetine Ekle
          </Link>
        </Item>

        <Item onClick={handleItemClick}>
          <span>
            <awesomeIcon.faVideo />
          </span>
          Resim Göster
        </Item>

        <Item onClick={handleItemClick}>
          <Link to='/search/' state={{ tabActive: 4 }}>
            <span>
              <awesomeIcon.faInfo />
            </span>
            Oem
          </Link>
        </Item>

        <Item onClick={handleItemClick}>
          <Link to='/search/' state={{ tabActive: 5 }}>
            <span>
              <awesomeIcon.faInfo />
            </span>
            Çapraz Kodlar
          </Link>
        </Item>

        <Item onClick={handleItemClick}>
          <Link to='/search/' state={{ tabActive: 2 }}>
            <span>
              <awesomeIcon.faInfo />
            </span>
            Eşdeğer Ürünler
          </Link>
        </Item>

        <Item onClick={handleItemClick}>
          <Link to='/search/' state={{ tabActive: 6 }}>
            <span>
              <awesomeIcon.faInfo />
            </span>
            Araçlar
          </Link>
        </Item>

        <Item onClick={handleItemClick}>
          <Link to='/search/' state={{ tabActive: 7 }}>
            <span>
              <awesomeIcon.faHistory />
            </span>
            Stok Geçmişi
          </Link>
        </Item>

        <Item onClick={handleItemClick}>
          <span>
            <awesomeIcon.faHistory />
          </span>
          Stok Hareketleri
        </Item>

        <Item onClick={handleItemClick}>
          <span>
            <awesomeIcon.faPlus />
          </span>
          Kopyala (Sonuçlar)
        </Item>
        <Item onClick={handleItemClick}>
          <span>
            <awesomeIcon.faPlus />
          </span>
          Kopyala (Stok Kodu)
        </Item>
        <Item onClick={handleItemClick}>
          <span>
            <awesomeIcon.faPlus />
          </span>
          Kopyala (Stok Adı)
        </Item>
        <Item onClick={handleItemClick}>
          <span>
            <awesomeIcon.faPlus />
          </span>
          Kopyala (Oem)
        </Item>
        <Item onClick={handleItemClick}>
          <span>
            <awesomeIcon.faPlus />
          </span>
          Fiyatı Gelince Haber Ver
        </Item>
        <Item onClick={handleItemClick}>
          <span>
            <awesomeIcon.faPlus />
          </span>
          Stoğa Gelince Haber Ver
        </Item>
        <Item onClick={handleItemClick}>
          <span>
            <awesomeIcon.faPlus />
          </span>
          Haftalık Siparişe Kaydet
        </Item>
      </Menu>
      <Dialog
        open={open}
        onClose={addBasketClose}
        className={classes.root}
        classes={{
          paper: classes.paper,
        }}
      >
        <DialogContent>
          <IconButton
            className={classes.closeButton}
            edge="end"
            color="inherit"
            onClick={addBasketClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <AddBasket />
        </DialogContent>
      </Dialog>
    </>
  );
}
