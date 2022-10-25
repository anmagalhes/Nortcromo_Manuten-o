import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function MyTextField(props) {
  return (
    <Grid item xs={props.xs}>
      <TextField label={props.label} variant='outlined' fullWidth />
    </Grid>
  );
}
