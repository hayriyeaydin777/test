import React, { memo } from 'react';

import { Link } from 'gatsby';

import awesomeIcon from '../../../../statics/icon';

/*Statik olarak PNG dosyalarını alana kadar ekliyoruz*/
import cameraicon from '../../../../statics/png/help-page-images/camera.png';
import excellicon from '../../../../statics/png/help-page-images/excell.png';
import headset from '../../../../statics/png/help-page-images/headset.png';
import messagebubble from '../../../../statics/png/help-page-images/message-bubble.png';
import messagegreen from '../../../../statics/png/help-page-images/message-green.png';
import messagewhite from '../../../../statics/png/help-page-images/message-white.png';
import pdficon from '../../../../statics/png/help-page-images/pdf.png';
import usericon from '../../../../statics/png/help-page-images/user.png';
import videoicon from '../../../../statics/png/help-page-images/video.png';
import voiceicon from '../../../../statics/png/help-page-images/voice.png';

const HelpPage = memo(() => {
  return (
    <div className="outer-container">
      <div className="row mx-auto help-title-row">
        <span>SATIŞ DESTEK</span>
        <span>
          <img src={messagewhite} className="mr-2" />
          Mesajlaşma
        </span>
      </div>
      <div className="col-auto inner-container">
        <div className="row pt-3 pb-3">
          <div className="col d-flex flex-nowrap flex-row left-side-outer">
            <div className="col d-flex flex-nowrap left-side-inner">
              <div className="row left-side-row">
                <div className="col-3 text-center">
                  <img className="icon" src={headset} />
                  <span>Operatör</span>
                </div>
                <div className="col-9">
                  Mekanik enerjinin oluşması için gerekli olan ısı enerjisi çeşitli yakıtlardan ve
                  motor silindirlerinin içinde veya dışında üretilebilir.
                </div>
                <button className="delivered">
                  <awesomeIcon.faCheck className="mr-2" />
                  İletildi
                </button>
              </div>
              <div className="row left-side-row">
                <div className="col-3 text-center">
                  <img className="icon" src={usericon} />
                  <span>Müşteri</span>
                </div>
                <div className="col-9">
                  Mekanik enerjinin oluşması için gerekli olan ısı enerjisi çeşitli yakıtlardan ve
                  motor silindirlerinin içinde veya dışında üretilebilir.
                </div>
                <button className="send">Gönder</button>
                <button className="delete">Sil</button>
              </div>
              <div className="row left-side-row">
                <div className="col-3 text-center">
                  <img className="icon" src={usericon} />
                  <span>Müşteri</span>
                </div>
                <div className="col-9">
                  Mekanik enerjinin oluşması için gerekli olan ısı enerjisi çeşitli yakıtlardan ve
                  motor silindirlerinin içinde veya dışında üretilebilir.
                </div>
                <button className="send">Gönder</button>
                <button className="delete">Sil</button>
              </div>
            </div>
          </div>
          <div className="col-3 right-side">
            <div className="row comment-bubble text-center">
              <img src={messagebubble} />
            </div>
            <div className="row message-icons">
              <ul>
                <li>
                  <Link to="/video-chat/">
                    <button>
                      <img src={videoicon}></img>
                      <span>Görüntülü</span>
                    </button>
                  </Link>
                </li>

                <li>
                  <button>
                    <img src={messagegreen}></img>
                    <span>Mesaj</span>
                  </button>
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
           {/*    <Button
                text="Click me"
                onClick={this.sayHelloWorld}
            /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default HelpPage;
