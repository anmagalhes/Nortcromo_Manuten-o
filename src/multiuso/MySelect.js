import { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Context from '../multiuso/Context';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

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
      <FormControl fullWidth>
        <InputLabel>Status do Setor</InputLabel>
        <Select
          value={dados.status_setor}
          label='Status do Setor'
          name='status_setor'
          onChange={handleChange}
        >
          <MenuItem value={'Setor Ativo'}>Setor Ativo</MenuItem>
          <MenuItem value={'Setor Inativo'}>Setor Inativo</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}
