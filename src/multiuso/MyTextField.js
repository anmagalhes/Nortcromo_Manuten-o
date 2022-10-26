import { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Context from '../multiuso/Context';
import Grid from '@mui/material/Grid';

export default function MyTextField(props) {
  const [dados, setDados] = useContext(Context);

  const handleChange = (event) => {
    const value = event.target.value;

    setDados((prevState) => {
      return {
        ...prevState,
        [event.target.name]: value,
      };
    });
  };

  return (
    <Grid item xs={props.xs}>
      <TextField
        disabled={props.permitido}
        label={props.label}
        name={props.name}
        defaultValue={props.value}
        onChange={handleChange}
        variant='outlined'
        fullWidth
      />
    </Grid>
  );
}
