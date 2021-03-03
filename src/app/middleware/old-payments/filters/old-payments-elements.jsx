import React, { memo, useState } from 'react';

import { Form, FormControl, InputGroup, Button, Row, Col } from 'react-bootstrap';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import banknamedata from '../../search/services/banknamedata';
import transactionstatusdata from '../../search/services/transactionstatusdata';

const OldPaymentsElements = memo(() => {
  const [bankname, setBankname] = useState('');
  const handleBankname = (event) => setBankname(event.target.innerText);

  const options_bankname = banknamedata.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  const [transactionStatus, setTransactionStatus] = useState('');
  const handleTransactionStatus = (event) => setTransactionStatus(event.target.innerText);

  const options_transactionstatus = transactionstatusdata.map((option) => {
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
          <span className="search-text">Provizyon No:</span>
          <InputGroup>
            <FormControl placeholder="Arama..." title="Arama..." />
            <InputGroup.Append>
              <Button variant="outline-secondary">Ara</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>

        <div className="form-groups">
          <Form.Group as={Row}>
            <Form.Label col={'auto'}>Banka:</Form.Label>
            <div className= "col-12">
              <Autocomplete
                options={options_bankname.sort(
                  (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                )}
                getOptionLabel={(option) => option.title}
                style={{ border: 'none' }}
                className="bankname-selectbox"
                name="bankname"
                id="bankname-selectbox"
                size="small"
                noOptionsText="Aradığınız bulunamadı"
                onChange={handleBankname}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className="bankname-selectbox-input"
                    placeholder="Banka Seçiniz"
                    variant="outlined"
                  />
                )}
              />
            </div>
          </Form.Group>
        </div>

        <div className="form-groups ml-5">
          <Form.Group as={Row}>
            <Form.Label col={'auto'}>İşlem Durumu:</Form.Label>
            <div className= "col-12">
              <Autocomplete
                options={options_transactionstatus.sort(
                  (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                )}
                getOptionLabel={(option) => option.title}
                style={{ border: 'none' }}
                className="transaction-selectbox"
                name="transaction-status"
                id="transaction-status-selectbox"
                size="small"
                noOptionsText="Aradığınız bulunamadı"
                onChange={handleTransactionStatus}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className="transaction-selectbox-input"
                    placeholder="İşlem Durumu"
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

export default OldPaymentsElements;
