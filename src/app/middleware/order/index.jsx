import React, { memo, useState } from 'react';

import { Form, FormControl, InputGroup, Button, Row, Col } from 'react-bootstrap';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import clientsdata from '../search/services/clientsdata';
import orderstatusdata from '../search/services/orderstatusdata';

const Order = memo(() => {
  const [clients, setClients] = useState('');
  const handleClients = (event) => setClients(event.target.innerText);

  const options_clients = clientsdata.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  const [orderStatus, setOrderStatus] = useState('');
  const handleOrderStatus = (event) => setOrderStatus(event.target.innerText);

  const options_orderstatus = orderstatusdata.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <div className="current-account elements d-flex">
      <Row className="flex-nowrap align-items-center">
        <div className="form-groups">
          <Form.Group as={Row}>
            <Form.Label col={'auto'}>Başlangıç Tarihi:</Form.Label>
            <Col col={12}>
              <Row>
                <Col col={12}>
                  <Form.Control type="date" placeholder="dd.mm.yyyy" />
                </Col>
              </Row>
            </Col>
          </Form.Group>
        </div>

        <i className="vertical-line"></i>

        <div className="form-groups">
          <Form.Group as={Row}>
            <Form.Label col={'auto'}>Bitiş Tarihi:</Form.Label>
            <Col col={12}>
              <Row>
                <Col col={12}>
                  <Form.Control type="date" placeholder="dd.mm.yyyy" />
                </Col>
              </Row>
            </Col>
          </Form.Group>
        </div>

        <i className="vertical-line"></i>

        <div className="form-groups ca-search">
          <span className="search-text">Evrak No:</span>
          <InputGroup>
            <FormControl placeholder="Arama..." title="Arama..." />
            <InputGroup.Append>
              <Button variant="outline-secondary">Ara</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>

        <div className="form-groups">
          <Form.Group as={Row}>
            <Form.Label col={'auto'}>Gönderen Kullanıcı:</Form.Label>
            <div className= "col-10">
              <Autocomplete
                options={options_clients.sort(
                  (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                )}
                getOptionLabel={(option) => option.title}
                style={{ border: 'none' }}
                className="order-selectbox"
                name="clients"
                id="order-clients-selectbox"
                size="small"
                noOptionsText="Aradığınız bulunamadı"
                onChange={handleClients}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className="clients-selectbox-input"
                    placeholder="Gönderen"
                    variant="outlined"
                  />
                )}
              />
            </div>
          </Form.Group>
        </div>

        <div className="form-groups ml-5">
          <Form.Group as={Row}>
            <Form.Label col={'auto'}>Sipariş Durumu:</Form.Label>
            <div className= "col-10">
              <Autocomplete
                options={options_orderstatus.sort(
                  (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                )}
                getOptionLabel={(option) => option.title}
                style={{ border: 'none' }}
                className="order-selectbox"
                name="order-status"
                id="order-status-selectbox"
                size="small"
                noOptionsText="Aradığınız bulunamadı"
                onChange={handleOrderStatus}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className="clients-selectbox-input"
                    placeholder="Sipariş Durumu"
                    variant="outlined"
                  />
                )}
              />
            </div>
          </Form.Group>
        </div>
      </Row>
    </div>
  );
});

export default Order;
