import DataTable from '../multiuso/DataTable_Clientes';

export default function ListaDeClientes() {
  const columns = [
    { field: 'id', headerName: 'id', flex: 0.5 },
    { field: 'razao_social_cliente', headerName: 'Razão Social', flex: 1 },
    { field: 'cnpj_cliente', headerName: 'CNPJ', flex: 1 },
  ];

  return (
    <DataTable
      titulo={'Clientes'}
      tituloDoBtnNovo={'Novo Cliente'}
      oQueRenderizaComOBtnNovo={'FormDeCliente'}
      columns={columns}
      lerlinha={'/lerLinhaClientes'}
      dados={'/lerClientes'}
      renderAposClick={'FormDeCliente'}
    />
  );
}
