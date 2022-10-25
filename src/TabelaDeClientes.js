import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CreateIcon from '@mui/icons-material/Create';
import { useState, useEffect, useContext } from 'react';

const columns = [
  { field: 'id', headerName: 'id', flex: 0.5 },
  { field: 'Nome', headerName: 'Nome', flex: 1 },
  { field: 'CPFCNPJ', headerName: 'CPF/CNPJ', flex: 1 },
  { field: 'Fone', headerName: 'Fone', flex: 1 },
  { field: 'Cidade', headerName: 'Cidade', flex: 1 },
];

export default function DataTable() {
  const [rows, setRows] = useState([]);
  const [isLoading, setLoading] = useState(true);

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
        // checkboxSelection
      />
    </div>
  );
}
