import React, { memo, useState } from 'react';

import { Col, Row, Button } from 'react-bootstrap';

import Iframe from 'react-iframe';

import awesomeIcon from '../../../statics/icon';

const Catalog = memo(({className}) => {
    const [frame, setFrame] = useState("");

    const data = [
        {
            name: "Braxis",
            logo: "https://mir-s3-cdn-cf.behance.net/projects/404/8f246728199597.55b3ca3ddeea6.jpg",
            frame: "https://www.braxis-international.com/e-catalogue.html",
            href:  "https://www.braxis-international.com/e-catalogue.html"
           
        },
        {
            name: "Teknorot",
            logo: "https://www.teknorot.com/assets/images/logo.png",
            frame: "https://www.teknorot.com/yeni-urunler/",
            href:  "https://www.teknorot.com/yeni-urunler/"
            
        },
        {
            name: "GMB",
            logo: "data:image/png;base64,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",
            frame: "https://www.gmb.net/catalog/",
            href:  "https://www.gmb.net/catalog/"
            
        }
    ]

    return (
        <div className={className}>
            <Row>
                <Col xs={2}>
                    <section className="d-flex group-button">
                        {
                            data.map((val, key) => {
                                return (
                                    <>
                                    <a className="catalog-new-tab-button" /* href={`${val.href}`} alt={`${val.name}`} target="_blank" */> <awesomeIcon.faExtarnalLink /> </a>
                                    <Button
                                        key={key}
                                        variant="light"
                                        onClick={() => setFrame(val.frame)}
                                        title={val.name}>
                                        <img src={`${val.logo}`} alt={`${val.name}`}/>
                                        
                                    </Button>
                                    
                                    </>
                                )
                            })
                        }
                    </section>
                </Col>
                <Col xs={10}>
                    <section className="row iframe">
                        <Iframe
                            url={frame}
                            width="100%"
                            height="100vh"
                            className="frame"
                            border="border: 1px solid #ddd"
                        />
                    </section>
                </Col>
            </Row>
        </div>
    );
});

export default Catalog;