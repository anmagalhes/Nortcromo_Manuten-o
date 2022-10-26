import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import Context from './Context';

export default function DataTable(props) {
  const columns = props.columns;
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
  const [rows, setRows] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:5000' + props.dados, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        oQueProcurar: props.oQueProcurarRows,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setRows(result.dados);
          setLoading(false);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  if (isLoading) {
    return (
      <div className='loader-container'>
        <div className='spinner'></div>
      </div>
    );
  } else {
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onCellClick={(e) => {
            fetch('http://127.0.0.1:5000' + props.lerlinha, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                oQueProcurar: e.id,
              }),
            })
              .then((res) => res.json())
              .then(
                (result) => {
                  result = result.dados[0];
                  setDados(result);
                  setRender('FormSetor');
                },
                (error) => {
                  console.log(error);
                }
              );
          }}
        />
      </div>
    );
  }
}
