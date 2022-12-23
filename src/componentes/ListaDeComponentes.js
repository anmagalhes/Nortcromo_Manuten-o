import DataTable from '../multiuso/DataTable_Clientes';

export default function ListaDeClientes() {
  const columns = [
    { field: 'id', headerName: 'id_componente', flex: 0.5 },
    { field: 'Desc_Produto', headerName: 'Desc_Produto', flex: 1 },
    { field: 'Fornec_Produto', headerName: 'Fornec_Produto', flex: 1 },
  ];

  return (
    <DataTable
      titulo={'Componentes'}
      tituloDoBtnNovo={'Novo Componente'}
      oQueRenderizaComOBtnNovo={'FormDeComponente'}
      columns={columns}
      lerlinha={'lerLinhaComponente'}
      dados={'lerComponentes'}
      renderAposClick={'FormDeComponente'}
    />
  );
}
