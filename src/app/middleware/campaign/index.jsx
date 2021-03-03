import React, { memo } from 'react';
import {default as DefCampaign} from '../../../components/Campaign/partials';

//bunları şimdilik oluştruyoruz...
import img from '../../../images/product/pr001.png';
import logo from '../../../images/product/logo/logo-braxis.png';

const Campaign = memo(() => {
    const title = " KAMPANYALAR "
    
    return (
        <DefCampaign 
            className="row campaign"
            title={title}>
                <section className="section-campaign row flex-row justify-content-between flex-nowrap align-items-center">
                    <div className="img col-auto">
                        <img src={img}/>
                    </div>
                    <div className="text col">
                        <div className="row flex-column hs-empty">
                            <h2>MERCEDES <i>Yedek parça stoklarımız güncellendi..</i></h2>
                            <h5>Türkiye’nin “Aftermarket” lideri Vista Otomotiv</h5>
                            <h6>www.vistaotomotiv.com.tr</h6>
                        </div>
                    </div>
                    <div className="capsule col-auto">
                        <div className="end-img">
                            <div className="disc">
                                <img src={logo}/>
                                <span>
                                    30%
                                    <b>İndirim</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
        </DefCampaign>
    );
});

export default Campaign;