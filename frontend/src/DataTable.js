import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CreateIcon from '@mui/icons-material/Create';

const columns = [
  { field: 'id', headerName: 'id', flex: 0.5 },
  { field: 'Data', headerName: 'Data', flex: 1 },
  { field: 'nOS', headerName: 'Nº OS', flex: 1 },
  { field: 'nfEntrada', headerName: 'NF Entrada', flex: 1 },
  { field: 'Vendedor', headerName: 'Vendedor', flex: 1 },
  { field: 'Cliente', headerName: 'Cliente', flex: 1 },
  { field: 'Evolução', headerName: 'Evolução', flex: 1 },
];

const rows = [
  {
    id: 1,
    Data: '20/10/2022',
    nOS: '567',
    nfEntrada: 35,
    Vendedor: 2,
    Cliente: 'Dante',
    Evolução: '2/10',
  },
  {
    id: 2,
    Data: '20/10/2022',
    nOS: '567',
    nfEntrada: 42,
    Vendedor: 2,
    Cliente: 'Dante',
    Evolução: '2/10',
  },
  {
    id: 3,
    Data: '20/10/2022',
    nOS: '567',
    nfEntrada: 45,
    Vendedor: 2,
    Cliente: 'Dante',
    Evolução: '2/10',
  },
  {
    id: 4,
    Data: '20/10/2022',
    nOS: '567',
    nfEntrada: 16,
    Vendedor: 2,
    Cliente: 'Dante',
    Evolução: '2/10',
  },
  {
    id: 5,
    Data: '20/10/2022',
    nOS: '567',
    nfEntrada: 88,
    Vendedor: 2,
    Cliente: 'Dante',
    Evolução: '2/10',
  },
  {
    id: 6,
    Data: '20/10/2022',
    nOS: '567',
    nfEntrada: 150,
    Vendedor: 2,
    Cliente: 'Dante',
    Evolução: '2/10',
  },
  {
    id: 7,
    Data: '20/10/2022',
    nOS: '567',
    nfEntrada: 44,
    Vendedor: 2,
    Cliente: 'Dante',
    Evolução: '2/10',
  },
  {
    id: 8,
    Data: '20/10/2022',
    nOS: '567',
    nfEntrada: 36,
    Vendedor: 2,
    Cliente: 'Dante',
    Evolução: '2/10',
  },
  {
    id: 9,
    Data: '20/10/2022',
    nOS: '567',
    nfEntrada: 65,
    Vendedor: 2,
    Cliente: 'Dante',
    Evolução: '2/10',
  },
];

export default function DataTable() {
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
