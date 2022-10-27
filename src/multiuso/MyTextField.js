import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Context from './Context';
import { useState, useEffect, useContext } from 'react';

export default function MyTextField(props) {
  const [
    dados,
    setDados,
    handleChange,
    render,
    setRender,
    lancarNoBanco,
    initialState,
    handleChangeComMask,
  ] = useContext(Context);

  if (props.maskY) {
    return (
      <Grid item xs={props.xs}>
        <TextField
          label={props.label}
          variant='outlined'
          name={props.name}
          disabled={props.disabled}
          onChange={handleChangeComMask}
          value={props.value}
          fullWidth
        />
      </Grid>
    );
  } else {
    return (
      <Grid item xs={props.xs}>
        <TextField
          label={props.label}
          variant='outlined'
          name={props.name}
          disabled={props.disabled}
          onChange={handleChange}
          value={props.value}
          fullWidth
        />
      </Grid>
    );
  }
}
