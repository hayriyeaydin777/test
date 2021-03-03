import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

import Input from '@material-ui/core/Input';

import { makeStyles } from '@material-ui/core/styles';

import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-input': {
      textAlign: 'center',
    },
    width: '50px',
    borderRadius: '30px',
    background: '#e8e8e8',
    margin: '3px 0px 3px 0px',
    textAlign: 'center',
  },
}));

function SpinnerInput() {
  const classes = useStyles();
  const inputSpinnerHandle = (event) => {
    const inputSpinner = event.target.value;

    if ( inputSpinner < 0 || inputSpinner > 999 ) {
      Swal.fire({
        title: 'Lütfen geçerli bir değer giriniz!',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3a8bb8',
        cancelButtonColor: '#d40104',
        iconColor: '#d40104',
        confirmButtonText: 'Tamam',
        customClass: {
          cancelButton: 'swal-fire-button',
          confirmButton: 'swal-fire-button',
        },
      });
      return (event.target.value = 1);
    }
  };

  return (
    <Input
      id="standard-number"
      label=""
      type="number"
      disableUnderline={true}
      defaultValue="1"
      className={classes.root}
      inputProps={{ min: 1, max: 999 }}
      onChange={inputSpinnerHandle}
       onKeyPress={(e) => {   
        if (e.key === 'Enter') {
          if (e.key === 'Enter') {
            Swal.fire({
              title: event.target.value +  ' Ürün Sepetinize Eklendi.',
              icon: 'success',
              showCancelButton: false,
              confirmButtonColor: '#3a8bb8',
              cancelButtonColor: '#d40104',
              iconColor: '#3a8bb8',
              confirmButtonText: 'Tamam',
              customClass: {
                cancelButton: 'swal-fire-button',
                confirmButton: 'swal-fire-button',
              },
            });
          }
        }
      }} 
    />
  );
}

export default SpinnerInput;
