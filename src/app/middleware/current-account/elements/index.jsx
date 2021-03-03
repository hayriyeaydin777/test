import React, { memo } from 'react';

import { Form, FormControl, InputGroup, Button, Row, Col } from 'react-bootstrap';

const Elements = memo(() => {
  return (
    <>
      <div className="current-account elements d-flex">
        <Row className="flex-nowrap align-items-center">
          <div className="form-groups ca-search">
            <span className="search-text">Genel Arama:</span>
            <InputGroup>
              <FormControl
                placeholder="Stok Marka - Kodu Adı - Açıklama - ARA"
                title="Stok Marka - Kodu Adı - Açıklama - ARA"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">Ara</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>

          <div className="form-groups">
            <Form.Group as={Row}>
              <Form.Label col="auto">Başlangıç Tarihi:</Form.Label>
              <Col col={12}>
                <Row>
                  <Col col={12}>
                    <Form.Control type="date" placeholder="dd.mm.yyyy" />
                  </Col>
                </Row>
              </Col>
            </Form.Group>
          </div>

          <i className="vertical-line" />

          <div className="form-groups">
            <Form.Group as={Row}>
              <Form.Label col="auto">Bitiş Tarihi:</Form.Label>
              <Col col={12}>
                <Row>
                  <Col col={12}>
                    <Form.Control type="date" placeholder="dd.mm.yyyy" />
                  </Col>
                </Row>
              </Col>
            </Form.Group>
          </div>

          <i className="vertical-line" />

          <div className="form-groups">
            <Form.Group as={Row}>
              <Form.Label col="auto">Tipi:</Form.Label>
              <Col col={12}>
                <Row>
                  <Col col={12}>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Tüm işlem tipleri</option>
                      <option>...</option>
                    </Form.Control>
                  </Col>
                </Row>
              </Col>
            </Form.Group>
          </div>

          <i className="vertical-line" />

          <div className="form-groups">
            <Form.Group as={Row}>
              <Form.Label col="auto">İşlem:</Form.Label>
              <Col col={12}>
                <Row>
                  <Col col={12}>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Tüm işlemler</option>
                      <option>...</option>
                    </Form.Control>
                  </Col>
                </Row>
              </Col>
            </Form.Group>
          </div>

          <div className="form-groups">
            <Button type="button" className="btn btn-export excel">
              Excel İndir
            </Button>
          </div>
        </Row>
      </div>
    </>
  );
});

export default Elements;
