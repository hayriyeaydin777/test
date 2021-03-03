import React, { memo, useState } from 'react';

import svg from '../../../statics/svg';

import awesomeIcon from '../../../statics/icon';

//bunları şimdilik oluştruyoruz...
import img from '../../../images/product/pr001.png';
import logo from '../../../images/product/logo/logo-braxis.png';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toastClose } from "../../../redux/reducers/toast";

const Banner = memo(({ children, className, toastToggle, toastClose }) => {
  //const [toggle, setToggle] = useState(true);

  return (
    <>
      {children}

      <div className={`d-flex toast-capsule row ${toastToggle ? 'toast-close' : 'toast-open'}`}>
        <div className="toast-div-all">
          <button
            className="toggle-close"
            onClick={() => {
              toastClose(!toastToggle);
            }}
          >
            X
          </button>
		  <button
            className="toggle-open"
            onClick={() => {
              toastClose(!toastToggle);
            }}
          >
            <awesomeIcon.faAngleUp className="fa-up"/>
          </button>
          <div className="d-flex col-auto toast-left-capsule">
            <div className="row toast-div-left">
                <img className="toast-logo-disc" src={img} />  
              <div className="col toast-text-div">
			      <img className="toast-logo-brand" src={logo} />
                <ul className="col">
                  <li className="toast-text-percent font-weight-bolder">
                    %30
                    <span className="display-3 toast-text-discount font-weight-normal">İndirim</span>
                    <span className="toast-text-url font-weight-light">vistaoto.com.tr</span>
                  </li>
                </ul>
              </div>
              <div className="col-auto basket-text d-flex">
                <div className="portion">
                  <p>10</p>
                  <div className="col-auto">
                    <div className="row math-symbols">
                      <ul className="col-auto">
                        <li><button>+</button></li>
                        <li>
                          <button>-</button><span>Adet</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row d-block">
                  <button className="d-block rounded toast-basket-button">Sepete At</button>
                </div>
              </div>
            </div>
          </div>
          <div className="toast-div-right">
            <div className="inside-div">
              <p className="text-center counter-text font-weight-bold">KAMPANYA</p>
              <div className="counter-div">
                <div className="row">
                  <ul className="col font-weight-bold">
                    <li>
                      2<span>AY</span>
                    </li>
                    <li>
                      20<span>GÜN</span>
                    </li>
                    <li>
                      20<span>SAAT</span>
                    </li>
                    <li>
                      20<span>DAKİKA</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="company-logo">
                <svg.logocampaign />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

const mapDispatchToProps = dispatch => {
  return {
      dispatch,
      ...bindActionCreators({ toastClose }, dispatch)
  }
}

const mapStateToProps = state => {
  return {
      toastToggle: state.toastToggle,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Banner);
