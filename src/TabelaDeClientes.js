import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CreateIcon from '@mui/icons-material/Create';
import { useState, useEffect, useContext } from 'react';
import Context from './multiuso/Context';

const columns = [
  { field: 'id', headerName: 'id', flex: 0.5 },
  { field: 'razao_social_cliente', headerName: 'Razão Social', flex: 1 },
  { field: 'cnpj_cliente', headerName: 'CNPJ', flex: 1 },
];

export default function DataTable() {
  const [rows, setRows] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [
    dados,
    setDados,
    handleChange,
    render,
    setRender,
    lancarNoBanco,
    initialState,
  ] = useContext(Context);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/lerClientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pnfEntradaSize={5}
        rowsPerPnfEntradaOptions={[5]}
        onCellClick={(e) => {
          fetch('http://127.0.0.1:5000/lerLinhaClientes', {
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
                setTimeout(function () {
                  setDados(result.dados[0]);
                  setRender('Inicio');
                  setTimeout(function () {
                    setRender('FormDeCliente');
                    setDados(result.dados[0]);
                  }, 1);
                }, 1);
              },
              (error) => {
                console.log(error);
              }
            );
        }}
        // checkboxSelection
      />
    </div>
  );
}
