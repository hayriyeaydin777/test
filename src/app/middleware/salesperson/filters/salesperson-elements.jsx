import React, { memo, useState } from 'react';

import { Form, FormControl, InputGroup, Button, Row, Col } from 'react-bootstrap';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import clientsdata from '../../search/services/clientsdata';
import transactionstatusdata from '../../search/services/transactionstatusdata';

const SalesPersonElements = memo(() => {
  const [clients, setClients] = useState('');
  const handleClients = (event) => setClients(event.target.innerText);

  const options_clients = clientsdata.map((option) => {
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
            <Form.Label col={'auto'}>Firma Arayınız:</Form.Label>
            <div className="col-10">
              <Autocomplete
                options={options_clients.sort(
                  (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                )}
                getOptionLabel={(option) => option.title}
                style={{ border: 'none' }}
                className="salesperson-selectbox"
                name="clients"
                id="salesperson-clients-selectbox"
                size="small"
                noOptionsText="Aradığınız bulunamadı"
                onChange={handleClients}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className="clients-selectbox-input"
                    placeholder="Firma Arayınız"
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

export default SalesPersonElements;
