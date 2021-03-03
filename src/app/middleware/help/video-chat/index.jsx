import React, { memo } from 'react';

import { Link } from 'gatsby';

/*Statik olarak PNG dosyalarını alana kadar ekliyoruz*/
import cameraicon from '../../../../statics/png/help-page-images/camera.png';
import excellicon from '../../../../statics/png/help-page-images/excell.png';
import headset from '../../../../statics/png/help-page-images/headset.png';
import messagebubble from '../../../../statics/png/help-page-images/message-bubble.png';
import messagegreen from '../../../../statics/png/help-page-images/message-green.png';
import videoiconwhite from '../../../../statics/png/help-page-images/video-white.png';
import pdficon from '../../../../statics/png/help-page-images/pdf.png';
import usericon from '../../../../statics/png/help-page-images/user.png';
import videoicon from '../../../../statics/png/help-page-images/video.png';
import voiceicon from '../../../../statics/png/help-page-images/voice.png';
import placeholderperson from '../../../../statics/png/help-page-images/placeholderperson.jpg';

const VideoChatPage = memo(() => {
  return (
    <div className="video-outer-container">
      <div className="row mx-auto video-title-row">
        <span>SATIŞ DESTEK</span>
        <span>
          <img src={videoiconwhite} className="mr-2" />
          Görüntülü Konuşma
        </span>
      </div>
      <div className="col-auto video-inner-container">
        <div className="row pt-3 pb-3">
          <div className="col d-flex flex-nowrap ml-3 video-left-side">
            <div className="col-auto d-flex flex-nowrap pb-3 pt-3">
              <div className="col-6">
                <img className="img-fluid rounded" src={placeholderperson} />
                <div className="topleft">
                  <img src={headset} /> <span>Operatör</span>
                </div>
              </div>
              <div className="col-6 rounded">
                <img className="img-fluid rounded" src={placeholderperson} />
                <div className="topleft">
                  <img src={usericon} /> <span>Operatör</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 video-right-side">
            <div className="row comment-bubble text-center">
              <img src={messagebubble} />
            </div>
            <div className="row video-message-icons">
              <ul>
                <li>
                  <button>
                    <img src={videoicon}></img>
                    <span>Görüntülü</span>
                  </button>
                </li>

                <li>
                  <Link to="/help/">
                    <button>
                      <img src={messagegreen}></img>
                      <span>Mesaj</span>
                    </button>
                  </Link>
                </li>
                <li>
                  <button>
                    <img src={pdficon}></img>
                    <span>Pdf</span>
                  </button>
                </li>
              </ul>
              <ul>
                <li>
                  <button>
                    <img src={cameraicon}></img>
                    <span>Fotoğraf</span>
                  </button>
                </li>

                <li>
                  <button>
                    <img src={voiceicon}></img>
                    <span>Ses</span>
                  </button>
                </li>
                <li>
                  <button>
                    <img src={excellicon}></img>
                    <span>Excell</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default VideoChatPage;
