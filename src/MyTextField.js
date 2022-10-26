import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Context from './multiuso/Context';
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
  ] = useContext(Context);

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
