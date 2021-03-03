import React, { memo } from 'react';

import { default as SlickSlider } from 'react-slick';

import { useStaticQuery, graphql } from 'gatsby';
import svg from '../../../statics/svg';

import AddBasket from '../../../components/AddBasket';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { makeStyles } from '@material-ui/core/styles';

const Slider = memo(({ data }) => {
  const gql = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "//product//" } }) {
        edges {
          node {
            dir
            name
            publicURL
            sourceInstanceName
            absolutePath
          }
        }
      }
      allOppProductJson {
        nodes {
          title
          status
          price
          id
          desc
          cargo
          discount
          img
        }
      }
    }
  `);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const [open, setOpen] = React.useState(false);

  const addBasketOpen = () => {
    setOpen(true);
  };

  const addBasketClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      maxWidth: '950px',
      overflowX: 'hidden',
    },
    root: `
    outline: none; 
  `,
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

  return (
    <>
      <section className="col slider">
        <div className="row justify-content-center align-items-center">
          <div className="opp-slider">
            <SlickSlider {...settings}>
              {gql.allOppProductJson.nodes.map((val, key) => {
                const img = gql.allFile.edges.filter((f) => {
                  if (f.node.name == val.img) return f;
                });

                return (
                  <div key={key} className="slider-item">
                    <section className="slider-index">
                      <div className="descraption">
                        {val.price.map((val) => `${val} `)}
                        <span>
                          <b>{val.discount.map((val) => val)}</b>
                          İndirim
                        </span>
                      </div>
                      <div className="slide-img">
                        <img src={img[0].node.publicURL}></img>
                        <div className="img-desc">
                          <div className="ttl">
                            <span className="ttl">{val.title}</span>
                            {val.cargo === 1 && <span className="cargo">Kargo Bedava</span>}
                          </div>
                          <div className="desc">{val.desc}</div>
                        </div>
                      </div>
                      <a className="basket" onClick={addBasketOpen}>
                        DETAY
                        <span>
                          <svg.basket />
                        </span>
                      </a>
                    </section>
                  </div>
                );
              })}
            </SlickSlider>
          </div>
        </div>
      </section>
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
            edge="end"
            color="inherit"
            onClick={addBasketClose}
            aria-label="close"
            className={classes.closeButton}
          >
            <CloseIcon />
          </IconButton>
          <AddBasket />
        </DialogContent>
      </Dialog>
    </>
  );
});

export default Slider;
