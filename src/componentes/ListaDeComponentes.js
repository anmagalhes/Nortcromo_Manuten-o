import DataTable from '../multiuso/DataTable_Clientes';

export default function ListaDeClientes() {
  const columns = [
    { field: 'id', headerName: 'id_operacao', flex: 0.5 },
    {
      field: 'Grupo_Processo_operacao',
      headerName: 'Grupo_Processo_operacao',
      flex: 1,
    },
    {
      field: 'Descricao_Processo_operacao',
      headerName: 'Descricao_Processo_operacao',
      flex: 1,
    },
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
